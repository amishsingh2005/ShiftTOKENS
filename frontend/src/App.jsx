import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WorkerDashboard from './components/WorkerDashboard';
import InvestorDashboard from './components/InvestorDashboard';
import Login from './components/Login';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/Dashboard';
import AdminAnalytics from './components/admin/Analytics';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-background text-text-light font-inter selection:bg-accent-blue/30">
        <div className="grid-bg" />
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
            </>
          } />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="/feed" element={
            <>
              <Navbar />
              <Feed />
            </>
          } />
          
          {/* Dashboard Routes */}
          <Route path="/worker" element={
            <>
              <Navbar isDashboard />
              <WorkerDashboard />
            </>
          } />
          
          <Route path="/investor" element={
            <>
              <Navbar isDashboard />
              <InvestorDashboard />
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
        
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: '#162038',
            color: '#D0D8E8',
            border: '1px solid rgba(255,255,255,0.1)',
          }
        }} />
      </div>
    </Router>
  );
}

export default App;
