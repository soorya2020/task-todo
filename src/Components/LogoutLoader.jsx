import React from 'react'

const LogoutLoader = () => {
  return (
   <div className="fixed inset-0 bg-slate-50 z-[100] flex flex-col items-center justify-center space-y-4">
        {/* A simple CSS spinner or your Logo */}
        <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="text-center">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Logging out...
          </h2>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
            Securing your session
          </p>
        </div>
      </div>
  )
}

export default LogoutLoader