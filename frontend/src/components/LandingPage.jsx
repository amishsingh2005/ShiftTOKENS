import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, TrendingUp, Clock, ChevronRight, Play, ArrowRight, User, Briefcase, BarChart, Wallet } from 'lucide-react';

const LandingPage = () => {
  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const fadeInUp = {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    variants: variants
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold tracking-wider uppercase mb-6 shadow-glow-blue">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </span>
              Protocols for the Gig Economy
            </div>
            <h1 className="text-5xl lg:text-7xl font-space leading-[1.1] mb-8">
              Tokenizing Work.<br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green bg-clip-text text-transparent drop-shadow-sm">
                Instant Cash.
              </span>
            </h1>
            <p className="text-xl text-text-muted mb-10 max-w-xl leading-relaxed">
              Unlocking liquidity for 15M+ gig workers. Get paid within 30 seconds of finishing your shift using decentralized smart contracts.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/worker" className="btn-premium btn-glow-blue text-lg px-10">
                Get Early Access
              </Link>
              <button className="btn-premium bg-white/5 border border-white/10 hover:bg-white/10 group">
                <Play size={18} className="fill-white group-hover:scale-110 transition-transform" />
                View Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="glass-card p-8 border-accent-blue/20 max-w-md ml-auto relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Active Payout</p>
                  <p className="text-2xl font-space text-white">₹1,240.00</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green shadow-glow-green">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '85%' }} 
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-accent-blue shadow-glow-blue" 
                  />
                </div>
                <div className="flex justify-between text-xs text-text-muted">
                  <span>Shift Tokenized</span>
                  <span className="text-accent-blue">85% Processed</span>
                </div>
              </div>
              <button className="w-full py-3 bg-accent-green text-background font-bold rounded-lg text-sm tracking-wide">
                SETTLE VIA UPI
              </button>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding relative overflow-hidden" id="problem">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} transition={{ duration: 1 }} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">The 7-Day Wait is <span className="text-accent-red underline decoration-accent-red/30 underline-offset-8">Deadly.</span></h2>
            <p className="text-lg text-text-muted">Gig workers earn daily but get paid weekly or monthly. This liquidity gap forces them into predatory debt cycles.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={32} />, title: "70% OF EARNINGS", desc: "Go toward immediate operational costs like fuel, maintenance, and data plans.", color: "text-accent-blue" },
              { icon: <BarChart size={32} />, title: "24% INTEREST", desc: "Average monthly interest paid to local moneylenders for emergency medical or family needs.", color: "text-accent-red" },
              { icon: <Briefcase size={32} />, title: "30-DAY PAYOUTS", desc: "Some platforms hold earnings for a month, leaving workers with zero cash-on-hand.", color: "text-accent-gold" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={variants}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="glass-card p-10 hover:border-accent-blue/40 group transition-all duration-500"
              >
                <div className={`${card.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {card.icon}
                </div>
                <h3 className="text-xl mb-4 text-white group-hover:text-accent-blue transition-colors">
                  {card.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-card/30" id="solution">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={variants}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Tokenizing Work.<br />
              <span className="text-accent-blue">Real-World Utility.</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Instant UPI Settlement", desc: "Receive cash in your bank account via UPI within 30 seconds.", icon: <Zap /> },
                { title: "Smart Contracts", desc: "Immutable, transparent agreements on Polygon blockchain.", icon: <Shield /> },
                { title: "Zero Debt Burden", desc: "It's your money, not a loan. No interest, no credit checks.", icon: <TrendingUp /> }
              ].map((feat, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-background transition-all duration-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">{feat.title}</h4>
                    <p className="text-text-muted">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-radial from-accent-blue/20 to-transparent absolute inset-0 blur-[100px] pointer-events-none" />
            <div className="glass-card rounded-[2rem] p-4 p-8 overflow-hidden relative border-white/5">
               <div className="absolute top-0 left-0 w-full h-1 bg-accent-blue/50" />
               <div className="bg-background/40 rounded-xl p-6 mb-4 border border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">A</div>
                    <div>
                      <p className="font-bold text-white">Arjun Sharma</p>
                      <p className="text-xs text-text-muted">Delivery Partner • Zomato</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <p className="text-text-muted mb-1 text-xs uppercase tracking-tighter">Earnings</p>
                      <p className="font-bold">₹1,450</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border-l-4 border-accent-blue">
                      <p className="text-text-muted mb-1 text-xs uppercase tracking-tighter">Tokenized</p>
                      <p className="font-bold text-accent-blue">₹1,160</p>
                    </div>
                  </div>
               </div>
               <div className="text-center">
                  <p className="text-xs text-text-muted italic opacity-60">Smart Contract: 0x8a...4b1f secured on Polygon</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works (Steps) */}
      <section className="section-padding" id="how-it-works">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Built for <span className="text-neon-blue">Speed.</span></h2>
            <p className="text-lg text-text-muted">Four simple steps from work to wallet.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-accent-blue/0 via-accent-blue/30 to-accent-blue/0" />
            
            {[
              { icon: <User />, label: "Verify", desc: "Connect your platform ID (Zomato/Uber/Swiggy)." },
              { icon: <Zap />, label: "Tokenize", desc: "Select shifts to convert into liquidity tokens." },
              { icon: <TrendingUp />, label: "Invest", desc: "Investors fund tokens via short-term pools." },
              { icon: <Wallet />, label: "Cashout", desc: "Receive funds instantly via UPI 2.0." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={variants}
                transition={{ delay: i * 0.1 }}
                className="relative text-center group px-4"
              >
                <div className="w-20 h-20 bg-card rounded-2xl mx-auto flex items-center justify-center text-accent-blue border border-white/5 mb-8 group-hover:border-accent-blue/50 group-hover:shadow-glow-blue transition-all duration-500 relative z-10 font-bold text-xl">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{step.label}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="section-padding relative" id="waitlist">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="glass-card max-w-5xl mx-auto p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-blue" />
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl mb-6 leading-tight">Join the<br /><span className="text-accent-blue underline underline-offset-8">Financial Revolution.</span></h2>
                <p className="text-text-muted mb-8">ShiftTokens is launching soon. Secure your spot in the whitelist today.</p>
                <div className="flex items-center gap-4 text-sm font-bold opacity-60">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(k => (
                      <div key={k} className="w-8 h-8 rounded-full border-2 border-background bg-accent-blue/20 flex items-center justify-center text-[10px]">U{k}</div>
                    ))}
                  </div>
                  <span>10k+ partners already waiting</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
                  <button className="flex-1 py-3 rounded-lg bg-accent-blue text-background font-bold text-sm">I'm a Worker</button>
                  <button className="flex-1 py-3 rounded-lg text-white font-bold text-sm">I'm an Investor</button>
                </div>
                <div className="space-y-4">
                   <div className="space-y-1">
                    <label className="text-xs font-bold text-text-muted uppercase">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all outline-none" />
                   </div>
                   <button className="btn-premium btn-glow-blue w-full py-4 text-lg">
                      Request Access <ArrowRight size={20} className="ml-2" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center text-background font-bold text-xl">ST</div>
                <span className="font-space text-2xl">ShiftTokens</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Tokenizing work. Unlocking liquidity. The future of short-term labor financing on Web3.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-white mb-6">Product</h5>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">How It Works</a>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Risk Engine</a>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Polygon PoS</a>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-white mb-6">Resources</h5>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Documentation</a>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Market Report</a>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Brand Kit</a>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-white mb-6">Community</h5>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Twitter / X</a>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Discord</a>
              <a href="#" className="block text-sm text-text-muted hover:text-accent-blue">Telegram</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-text-muted uppercase tracking-widest font-bold">
            <p>&copy; 2026 ShiftTokens Protocol. Built on Polygon.</p>
            <div className="flex gap-8">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
