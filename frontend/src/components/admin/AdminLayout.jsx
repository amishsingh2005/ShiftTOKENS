import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  ArrowLeftRight, 
  BarChart3, 
  Search, 
  Bell, 
  Settings,
  Menu,
  X,
  UserCircle,
  LogOut
} from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Admin logged out');
    navigate('/');
  };

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Users / Workers', icon: <Users size={20} />, path: '/admin/workers' },
    { name: 'Investors', icon: <TrendingUp size={20} />, path: '/admin/investors' },
    { name: 'Transactions', icon: <ArrowLeftRight size={20} />, path: '/admin/transactions' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/admin/analytics' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } transition-all duration-300 bg-card border-r border-white/5 flex flex-col z-[110] relative`}
      >
        <div className="p-6 flex items-center justify-between">
          <Link to="/admin" className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}>
            <div className="w-8 h-8 shrink-0 bg-accent-blue rounded-lg flex items-center justify-center text-background font-bold shadow-glow-blue">ST</div>
            {isSidebarOpen && <span className="font-space text-xl tracking-tight text-white whitespace-nowrap">Admin Portal</span>}
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-white/5 rounded-md lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/admin' && location.pathname === '/admin/');
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? 'bg-accent-blue/10 text-accent-blue text-neon-blue' 
                    : 'text-text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className={`${isActive ? 'text-accent-blue' : 'group-hover:text-white'}`}>
                  {item.icon}
                </div>
                {isSidebarOpen && <span className="font-semibold text-sm whitespace-nowrap">{item.name}</span>}
                {isActive && isSidebarOpen && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-blue shadow-glow-blue" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-4 px-4 py-3 bg-white/5 rounded-2xl">
             <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-bold text-xs">AD</div>
             {isSidebarOpen && (
               <div className="overflow-hidden">
                  <p className="text-sm font-bold text-white truncate">Admin User</p>
                  <p className="text-[10px] text-accent-blue uppercase font-bold">Protocol Lead</p>
               </div>
             )}
          </div>
          <button 
            onClick={handleLogout}
            className={`mt-4 w-full flex items-center gap-4 px-4 py-3 text-text-muted hover:bg-accent-red/10 hover:text-accent-red rounded-xl transition-all group ${!isSidebarOpen && 'justify-center px-0'}`}
            title="Logout"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-semibold text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-background relative overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-card/30 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:flex hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Search resources, users, transactions..."
                className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-5 py-2.5 text-sm outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-all group">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent-red rounded-full border-2 border-background group-hover:scale-125 transition-transform" />
            </button>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-3 p-1 rounded-full hover:bg-white/5 transition-all">
                <UserCircle className="text-text-muted" size={32} />
              </button>
              <button 
                onClick={handleLogout}
                className="p-2 text-text-muted hover:text-accent-red transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8 no-scrollbar scroll-smooth">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
