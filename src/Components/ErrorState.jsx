import React from "react";

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 animate-in fade-in zoom-in duration-300">
      {/* Visual Icon Container */}
      <div className="w-20 h-20 bg-red-50 rounded-[2rem] flex items-center justify-center mb-6 ring-8 ring-red-50/50">
        <svg 
          className="w-10 h-10 text-red-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-black text-slate-900 tracking-tight">
        Something went wrong
      </h3>
      <p className="text-slate-500 text-sm font-medium mt-2 mb-8 max-w-[280px] text-center leading-relaxed">
        {message || "We couldn't load your collections. Please check your connection and try again."}
      </p>

      {/* Action Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="group flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
        >
          <svg 
            className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;