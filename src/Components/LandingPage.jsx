import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-primary/30">
      
      {/* 1. NAVIGATION HEADER */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Task</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Sign In</Link>
          <Link to="/login" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md">
            Get Started
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-8 gap-12 py-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Available for Web & Desktop</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9]">
            Stay ahead <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              of the curve.
            </span>
          </h1>

          <p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium">
            Task is the beautifully simple, lightning-fast todo manager 
            designed to help you conquer your day, one checkmark at a time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/app" className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:scale-105 transition-all">
              Try Task Free
            </Link>
            <Link to="/app" className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-black rounded-2xl border-2 border-slate-100 hover:bg-slate-50 transition-all">
              Live Demo
            </Link>
          </div>
        </div>

        {/* Right Side: Visual Mockup */}
        <div className="flex-1 relative w-full max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl blur-[80px] opacity-20 -z-10 animate-pulse"></div>
          
          {/* A "Fake" App UI to look professional */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-4">
              <div className="h-10 w-3/4 bg-slate-50 rounded-lg flex items-center px-4">
                <div className="w-4 h-4 border-2 border-blue-500 rounded-md mr-3"></div>
                <div className="h-2 w-24 bg-slate-200 rounded"></div>
              </div>
              <div className="h-10 w-full bg-blue-50/50 rounded-lg flex items-center px-4 border border-blue-100">
                <div className="w-4 h-4 bg-blue-500 rounded-md mr-3"></div>
                <div className="h-2 w-32 bg-blue-200 rounded"></div>
              </div>
              <div className="h-10 w-2/3 bg-slate-50 rounded-lg flex items-center px-4">
                <div className="w-4 h-4 border-2 border-slate-200 rounded-md mr-3"></div>
                <div className="h-2 w-16 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="px-8 py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">© 2026 Task Labs</p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">GitHub</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;