import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Wallet, 
  ArrowUpRight, 
  Activity, 
  TrendingUp,
  UserCheck,
  Filter,
  Download
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Workers', value: '1,245', change: '+12%', icon: <Users />, color: 'blue' },
    { name: 'Active Investors', value: '482', change: '+5%', icon: <UserCheck />, color: 'green' },
    { name: 'Total Liquidity', value: '₹85.4M', change: '+18%', icon: <Wallet />, color: 'gold' },
    { name: 'Active Contracts', value: '3,892', change: '+24%', icon: <ArrowUpRight />, color: 'cyan' },
  ];

  const transactions = [
    { id: 'TXN-9402', user: 'Arjun Sharma', type: 'Worker', amount: '₹1,240', status: 'Approved', date: 'Mar 18, 09:42' },
    { id: 'TXN-9401', user: 'Global Capital', type: 'Investor', amount: '₹45,000', status: 'Paid', date: 'Mar 18, 08:15' },
    { id: 'TXN-9400', user: 'Ravi Kumar', type: 'Worker', amount: '₹850', status: 'Pending', date: 'Mar 17, 22:10' },
    { id: 'TXN-9399', user: 'Priya Verma', type: 'Worker', amount: '₹1,100', status: 'Approved', date: 'Mar 17, 19:45' },
    { id: 'TXN-9398', user: 'Crypto Ventures', type: 'Investor', amount: '₹120,000', status: 'Paid', date: 'Mar 17, 18:30' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-space mb-1">System Overview</h1>
          <p className="text-text-muted text-sm italic">Status: Fully Operational • All nodes synced</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors">
            <Download size={16} /> Export Data
          </button>
          <button className="btn-premium btn-glow-blue !py-2 !px-4 text-sm">
            Refresh Monitor
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 relative group overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-accent-${stat.color}`} />
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-accent-${stat.color}/10 text-accent-${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-accent-green bg-accent-green/10 px-2 py-1 rounded-md">
                {stat.change}
              </span>
            </div>
            <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-1">{stat.name}</p>
            <p className="text-3xl font-space text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Table Section */}
      <div className="glass-card overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
           <div>
              <h3 className="text-xl font-bold mb-1">Recent Transactions</h3>
              <p className="text-sm text-text-muted">Live monitoring of shift tokenization and liquidity cycles.</p>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-card-light border border-white/5 rounded-xl text-sm font-semibold text-text-muted hover:text-white hover:bg-white/10 transition-all">
              <Filter size={16} /> Detailed Filters
           </button>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-xs uppercase tracking-widest font-bold text-text-muted">
                <th className="px-8 py-4">Reference ID</th>
                <th className="px-8 py-4">User Details</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="px-8 py-5 text-sm font-space text-accent-blue">{txn.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-card-light border border-white/10 flex items-center justify-center text-xs font-bold text-white uppercase">
                        {txn.user.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors">{txn.user}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                     <span className={`text-[10px] uppercase font-black px-2 py-1 rounded-md bg-white/5 ${
                       txn.type === 'Worker' ? 'text-accent-blue' : 'text-accent-gold'
                     }`}>
                        {txn.type}
                     </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold font-space">{txn.amount}</td>
                  <td className="px-8 py-5">
                     <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          txn.status === 'Paid' ? 'bg-accent-green shadow-glow-green' : 
                          txn.status === 'Approved' ? 'bg-accent-blue shadow-glow-blue' : 'bg-accent-gold'
                        }`} />
                        <span className="text-sm font-semibold">{txn.status}</span>
                     </div>
                  </td>
                  <td className="px-8 py-5 text-xs text-text-muted font-medium">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-white/[0.02] flex justify-between items-center">
            <p className="text-xs text-text-muted font-bold uppercase tracking-widest">Showing 1-5 of 3,892 events</p>
            <div className="flex gap-2">
               <button className="px-3 py-1 bg-card rounded-md border border-white/5 text-xs font-bold hover:border-accent-blue transition-all disabled:opacity-30" disabled>PREV</button>
               <button className="px-3 py-1 bg-accent-blue rounded-md text-background text-xs font-bold shadow-glow-blue">NEXT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
