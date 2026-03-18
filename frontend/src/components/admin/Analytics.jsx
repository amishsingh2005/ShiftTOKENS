import React from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion } from 'framer-motion';

const Analytics = () => {
  const lineData = [
    { name: 'Mon', earnings: 4000, payouts: 2400 },
    { name: 'Tue', earnings: 3000, payouts: 1398 },
    { name: 'Wed', earnings: 2000, payouts: 9800 },
    { name: 'Thu', earnings: 2780, payouts: 3908 },
    { name: 'Fri', earnings: 1890, payouts: 4800 },
    { name: 'Sat', earnings: 2390, payouts: 3800 },
    { name: 'Sun', earnings: 3490, payouts: 4300 },
  ];

  const pieData = [
    { name: 'Zomato', value: 45 },
    { name: 'Uber', value: 25 },
    { name: 'Swiggy', value: 20 },
    { name: 'Others', value: 10 },
  ];

  const COLORS = ['#00B4FF', '#00C853', '#F39C12', '#E74C3C'];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-space mb-1">Advanced Analytics</h1>
          <p className="text-text-muted text-sm">Real-time performance metrics of the ShiftTokens protocol.</p>
        </div>
        <div className="flex gap-2">
           {['Daily', 'Weekly', 'Monthly'].map(t => (
             <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${
               t === 'Weekly' ? 'bg-accent-blue border-accent-blue text-background' : 'bg-white/5 border-white/5 text-text-muted hover:text-white'
             }`}>{t}</button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Growth Chart */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="lg:col-span-2 glass-card p-8"
        >
          <div className="flex justify-between items-start mb-10">
            <div>
               <h3 className="text-xl font-bold mb-1">Growth Overview</h3>
               <p className="text-sm text-text-muted tracking-tight">System earnings vs. worker payouts</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-blue" />
                  <span className="text-xs font-bold text-text-muted uppercase">Earnings</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-green" />
                  <span className="text-xs font-bold text-text-muted uppercase">Payouts</span>
               </div>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00B4FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00B4FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPayouts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C853" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00C853" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#8A9BB5" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  stroke="#8A9BB5" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111C30', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="earnings" stroke="#00B4FF" strokeWidth={3} fillOpacity={1} fill="url(#colorEarnings)" />
                <Area type="monotone" dataKey="payouts" stroke="#00C853" strokeWidth={3} fillOpacity={1} fill="url(#colorPayouts)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Distribution Chart */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="glass-card p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-2">Market Share</h3>
          <p className="text-sm text-text-muted mb-10">Integration breakdown by provider</p>
          
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111C30', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4 mt-6">
             {pieData.map((d, i) => (
               <div key={d.name} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                     <span className="text-sm font-bold text-white uppercase tracking-tighter">{d.name}</span>
                  </div>
                  <span className="text-sm font-space text-accent-blue">{d.value}%</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
