import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserSection = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!user) {
    return (
      <Link
        to="/login"
        className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
      >
        {/* Avatar with Placeholder */}
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-200">
          {user.name ? user.name.charAt(0).toUpperCase() : "?"}
        </div>

        <span className="hidden sm:block text-sm font-bold text-slate-700">
          {user.name || "Account"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Transparent backdrop to close dropdown when clicking away */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-20">
            <div className="px-4 py-2 border-b border-slate-50">
              <p className="text-[10px] font-black text-slate-300 uppercase">
                Email
              </p>
              <p className="text-xs font-medium text-slate-600 truncate">
                {user.email}
              </p>
            </div>

            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserSection;
