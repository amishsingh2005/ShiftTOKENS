import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@shifttokens.com' && password === 'admin') {
      toast.success('Admin Login successful!');
      navigate('/admin');
    } else if (email && password) {
      toast.success('Login successful!');
      navigate('/worker');
    } else {
      toast.error('Please enter credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-stretch">
      {/* Left: Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-card items-center justify-center p-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px]" />
          <div className="grid-bg opacity-40" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-md"
        >
          <Link to="/" className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center text-background font-bold text-2xl shadow-glow-blue">ST</div>
            <span className="font-space text-4xl tracking-tight text-white">ShiftTokens</span>
          </Link>
          <h2 className="text-5xl font-space leading-tight mb-8">
            The Financial Layer for <span className="text-accent-blue">Work.</span>
          </h2>
          <p className="text-xl text-text-muted leading-relaxed mb-12">
            Experience the future of gig economy payments. Instant, secure, and decentralized.
          </p>
          <div className="grid grid-cols-2 gap-8">
              <div>
                  <p className="text-3xl font-space text-white mb-2">15M+</p>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Protocol Users</p>
              </div>
              <div>
                  <p className="text-3xl font-space text-white mb-2">$85B</p>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Market Opportunity</p>
              </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-20 relative">
        <Link to="/" className="absolute top-8 left-8 flex lg:hidden items-center gap-2 text-text-muted">
           <ArrowRight size={16} className="rotate-180" /> Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[440px]"
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-space mb-4">Welcome back</h1>
            <p className="text-text-muted">Enter your access credentials to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-blue transition-colors" size={20} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full bg-card-light border border-white/5 rounded-2xl pl-12 pr-5 py-4 focus:ring-1 focus:ring-accent-blue focus:border-accent-blue outline-none transition-all placeholder:text-text-muted/40"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-text-muted uppercase">Password</label>
                <a href="#" className="text-xs text-accent-blue font-bold hover:underline">Forgot password?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-blue transition-colors" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-card-light border border-white/5 rounded-2xl pl-12 pr-12 py-4 focus:ring-1 focus:ring-accent-blue focus:border-accent-blue outline-none transition-all placeholder:text-text-muted/40"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="remember" className="w-5 h-5 rounded-lg accent-accent-blue bg-card-light border-white/10" />
              <label htmlFor="remember" className="text-sm text-text-muted cursor-pointer select-none">Remember this device</label>
            </div>

            <button type="submit" className="btn-premium btn-glow-blue w-full py-4 text-lg">
              Sign In <ArrowRight size={20} className="ml-2" />
            </button>
          </form>

          <div className="mt-12">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold"><span className="bg-background px-4 text-text-muted">Or login with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-3 py-3 border border-white/5 rounded-xl bg-card hover:bg-card-light transition-colors font-semibold text-sm">
                  <Github size={18} /> GitHub
               </button>
               <button className="flex items-center justify-center gap-3 py-3 border border-white/5 rounded-xl bg-card hover:bg-card-light transition-colors font-semibold text-sm">
                  <div className="w-4 h-4 bg-white/10 rounded-full" /> Google
               </button>
            </div>
          </div>

          <p className="mt-12 text-center text-text-muted text-sm">
            Don't have an account? <Link to="/" className="text-accent-blue font-bold hover:underline">Get started free</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
