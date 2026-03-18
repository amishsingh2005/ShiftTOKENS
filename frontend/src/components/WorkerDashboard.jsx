import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Smartphone, History, CheckCircle, Zap, TrendingUp, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import toast from 'react-hot-toast';

const WorkerDashboard = () => {
    const [amount, setAmount] = useState(500);
    const [status, setStatus] = useState('');
    const [activeTokens, setActiveTokens] = useState([]);
    const [isTokenizing, setIsTokenizing] = useState(false);

    const fetchActiveTokens = () => {
        fetch('http://localhost:5000/api/tokens/active')
            .then(res => res.json())
            .then(data => setActiveTokens(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchActiveTokens();
    }, []);

    const handleTokenize = async () => {
        setIsTokenizing(true);
        setStatus('Initiating Secure Smart Contract...');
        
        try {
            const res = await fetch('http://localhost:5000/api/tokens/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    workerName: 'Arjun',
                    amount: amount,
                    shiftType: 'Evening Shift (Zomato)'
                })
            });
            
            if (res.ok) {
                setTimeout(() => {
                    toast.success(`Success! ₹${(amount * 0.8).toFixed(0)} sent to your UPI account.`);
                    setStatus('');
                    setIsTokenizing(false);
                    fetchActiveTokens();
                }, 2000);
            }
        } catch (err) {
            toast.error('Tokenization failed. Network error.');
            setIsTokenizing(false);
        }
    }

    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-space mb-2">Worker <span className="text-accent-blue">Dashboard</span></h1>
                    <p className="text-text-muted">Manage your shift liquidity and blockchain credit score.</p>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck size={16} /> Verified Protocol User
                </div>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { label: 'Wallet Balance', value: '₹2,450.00', icon: <Wallet />, color: 'blue' },
                    { label: 'Credit Score', value: '780', sub: 'A + High Trust', icon: <TrendingUp />, color: 'green' },
                    { label: 'UPI Status', value: 'Connected', icon: <Smartphone />, color: 'cyan' },
                ].map((stat, i) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-8 border-white/5 group hover:border-accent-blue/30 transition-all"
                    >
                        <div className={`text-accent-${stat.color} mb-6 group-hover:scale-110 transition-transform`}>
                            {stat.icon}
                        </div>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-2xl font-space text-white">{stat.value}</p>
                        {stat.sub && <p className="text-[10px] text-accent-green mt-2 font-bold uppercase">{stat.sub}</p>}
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
                {/* Main Action Card */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="glass-card p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl" />
                        
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Zap className="text-accent-blue" /> Tokenize Current Shift
                        </h3>
                        
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <p className="text-sm text-text-muted font-bold uppercase">Estimated Shift Earnings</p>
                                    <p className="text-3xl font-space text-white">₹{amount}</p>
                                </div>
                                <input 
                                    type="range" 
                                    min="100" 
                                    max="2000" 
                                    step="50" 
                                    value={amount} 
                                    onChange={(e) => setAmount(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent-blue"
                                />
                                <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                                    <span>Min ₹100</span>
                                    <span>Max ₹2,000</span>
                                </div>
                            </div>

                            <div className="p-6 bg-accent-blue/5 rounded-2xl border border-accent-blue/10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue shadow-glow-blue">
                                        <DollarSign size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted font-bold">Available Liquidity (80%)</p>
                                        <p className="text-xl font-bold text-accent-blue">₹{(amount * 0.8).toFixed(0)}</p>
                                    </div>
                                </div>
                                <p className="text-[10px] text-accent-blue font-bold text-right">Fee: 2.5% fixed<br />Settled on Friday</p>
                            </div>

                            <button 
                                onClick={handleTokenize} 
                                disabled={isTokenizing}
                                className={`btn-premium btn-glow-blue w-full py-4 text-lg ${isTokenizing && 'opacity-50 cursor-not-allowed'}`}
                            >
                                {isTokenizing ? 'Processing Smart Contract...' : 'Tokenize & Instant UPI'} 
                                <ArrowRight size={20} className="ml-2" />
                            </button>
                            
                            <AnimatePresence>
                                {status && (
                                    <motion.p 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-center text-accent-green font-bold text-sm tracking-tight"
                                    >
                                        {status}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Sidebar History */}
                <div className="lg:col-span-2">
                    <div className="glass-card p-8 h-full">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <History size={20} className="text-accent-gold" /> Protocol History
                        </h3>
                        
                        <div className="space-y-4">
                            {activeTokens.length > 0 ? (
                                activeTokens.slice(0, 5).map((token, i) => (
                                    <motion.div 
                                        key={token.id} 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-all cursor-default"
                                    >
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors">₹{token.amount}</p>
                                            <p className="text-[10px] text-text-muted uppercase font-bold tracking-tighter">Zomato • {new Date(token.timestamp).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                                                {token.status}
                                            </span>
                                            <p className="text-[9px] text-text-muted mt-1 uppercase">Settled via UPI</p>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-sm text-text-muted italic">No protocol events yet.</p>
                                </div>
                            )}
                        </div>
                        
                        <button className="w-full mt-8 py-3 text-xs font-bold text-text-muted hover:text-white transition-colors border-t border-white/5">
                            VIEW FULL RECONCILIATION
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerDashboard;
