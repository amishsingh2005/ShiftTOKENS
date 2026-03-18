import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Database, Search, Filter, Shield, ArrowUpRight, Globe, Layers } from 'lucide-react';
import toast from 'react-hot-toast';

const InvestorDashboard = () => {
    const [tokens, setTokens] = useState([]);
    const [stats, setStats] = useState({ totalVolume: 124500, activeAPY: 8.7, tvl: 4500000 });
    const [isLoading, setIsLoading] = useState(true);

    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    useEffect(() => {
        fetch(`${API_BASE}/api/tokens/active`)
            .then(res => res.json())
            .then(data => {
                setTokens(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    const handleFund = (tokenId) => {
        toast.promise(
            new Promise(resolve => setTimeout(resolve, 1500)),
            {
                loading: 'Executing On-Chain Transaction...',
                success: 'Contract Funded Successfully!',
                error: 'Transaction Failed.',
            }
        );
    }

    return (
        <div className="container mx-auto px-6 py-24 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-4xl font-space mb-2">Investor <span className="text-accent-gold">Portal</span></h1>
                    <p className="text-text-muted">Direct yields from real-world labor liquidity pools.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                     <p className="text-[10px] text-text-muted font-bold uppercase mb-1">Total Value Locked</p>
                     <p className="text-lg font-space text-white">₹{(stats.tvl / 1000000).toFixed(1)}M</p>
                  </div>
                  <button className="btn-premium btn-glow-blue !bg-white/5 !border-white/10 !shadow-none hover:!bg-white/10">
                    <Globe size={18} /> Market Monitor
                  </button>
                </div>
            </header>

            {/* Market Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    { label: 'Cumulative Volume', value: `₹${stats.totalVolume.toLocaleString()}`, icon: <TrendingUp />, color: 'gold' },
                    { label: 'Target Yield (APY)', value: `${stats.activeAPY}%`, icon: <BarChart3 />, color: 'blue' },
                    { label: 'Active Contracts', value: tokens.length.toString(), icon: <Layers />, color: 'green' },
                ].map((stat, i) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-10 relative group overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-accent-${stat.color}/5 rounded-full blur-3xl`} />
                        <div className={`w-12 h-12 rounded-2xl bg-accent-${stat.color}/10 text-accent-${stat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                            {stat.icon}
                        </div>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-3xl font-space text-white">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card overflow-hidden">
                <div className="p-10 border-b border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                           <Search className="text-accent-blue" /> Opportunity Marketplace
                        </h3>
                        <p className="text-text-muted text-sm">Browse and fund individual work tokens for short-term yielding.</p>
                    </div>
                    <div className="flex gap-4 w-full lg:w-auto">
                        <div className="relative flex-1 lg:w-64">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                            <input 
                                type="text" 
                                placeholder="Filter pool..."
                                className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-2.5 text-xs outline-none focus:border-accent-blue transition-all"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-5 bg-white/5 border border-white/5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                            <Filter size={14} /> Risk Filters
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/[0.02] text-[10px] uppercase font-black tracking-[0.2em] text-text-muted">
                                <th className="px-10 py-6">Pool / Shift Asset</th>
                                <th className="px-10 py-6">Protocol Score</th>
                                <th className="px-10 py-6">Contract Value</th>
                                <th className="px-10 py-6">Target Date</th>
                                <th className="px-10 py-6 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {tokens.length > 0 ? tokens.map(token => (
                                <tr key={token.id} className="group hover:bg-white/[0.01] transition-colors duration-300">
                                    <td className="px-10 py-8">
                                       <div className="flex items-center gap-4">
                                          <div className="w-10 h-10 rounded-xl bg-card-light border border-white/10 flex items-center justify-center text-accent-blue font-black text-[10px]">
                                             RWA
                                          </div>
                                          <div>
                                             <p className="font-bold text-white group-hover:text-accent-blue transition-colors">{token.shiftType}</p>
                                             <p className="text-xs text-text-muted font-medium">{token.workerName} • Delivery Partner</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-green/10 border border-accent-green/20 rounded-lg">
                                           <Shield size={12} className="text-accent-green" />
                                           <span className="text-[10px] font-black text-accent-green uppercase">A+ High Trust</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                       <p className="font-space text-lg text-white">₹{token.amount}</p>
                                       <p className="text-[10px] text-text-muted font-bold uppercase mt-1">ROI: 2.5% FIXED</p>
                                    </td>
                                    <td className="px-10 py-8">
                                       <p className="text-sm font-bold text-white uppercase tracking-tighter">Apr 12, 2026</p>
                                       <p className="text-[10px] text-accent-blue font-bold tracking-widest mt-1">7 DAYS LEFT</p>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button 
                                            onClick={() => handleFund(token.id)}
                                            className="btn-premium btn-glow-blue !py-2 !px-8 text-xs font-black uppercase tracking-widest"
                                        >
                                            Fund Pool <ArrowUpRight size={14} className="ml-2" />
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="px-10 py-32 text-center">
                                       <div className="max-w-xs mx-auto space-y-4">
                                          <div className="w-16 h-16 bg-white/5 rounded-full mx-auto flex items-center justify-center text-text-muted">
                                             <Database size={32} />
                                          </div>
                                          <p className="text-sm text-text-muted italic">All available shift tokens have been successfully funded by the protocol.</p>
                                          <button className="text-accent-blue text-xs font-bold uppercase hover:underline">Set Alert for Next Pool</button>
                                       </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                <div className="p-8 bg-white/[0.02] border-t border-white/5 text-center">
                   <p className="text-[10px] text-text-muted font-bold tracking-[0.3em] uppercase">ShiftTokens Protocol • RWA Tier 1 Assets • Polygon Secured</p>
                </div>
            </div>
        </div>
    );
};

export default InvestorDashboard;
