const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'data.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ waitlist: [], tokens: [] }, null, 2));
}

const getData = () => JSON.parse(fs.readFileSync(DATA_FILE));
const saveData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// API Routes
app.post('/api/waitlist', (req, res) => {
    const { type, contact } = req.body;
    const data = getData();
    data.waitlist.push({ type, contact, timestamp: new Date() });
    saveData(data);
    res.status(201).json({ message: 'Success! You are on the waitlist.' });
});

app.post('/api/tokens/create', (req, res) => {
    const { workerName, amount, shiftType } = req.body;
    const data = getData();
    const newToken = {
        id: Date.now(),
        workerName,
        amount,
        shiftType,
        status: 'pending',
        timestamp: new Date()
    };
    data.tokens.push(newToken);
    saveData(data);
    res.status(201).json(newToken);
});

app.get('/api/tokens/active', (req, res) => {
    const data = getData();
    res.json(data.tokens);
});

app.get('/api/stats', (req, res) => {
    const data = getData();
    res.json({
        totalWorkers: 15 + (data.tokens.length / 100), // Dynamic increment for demo
        settlementTime: 30,
        debtCreated: 0,
        investorYield: 8.7
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
