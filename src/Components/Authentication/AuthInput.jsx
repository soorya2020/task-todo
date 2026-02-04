import { useState } from "react";

const AuthInput = ({ label, type, placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine actual input type
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-2 relative">
      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
        {label}
      </label>
      <div className="relative">
        <input
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-16 bg-slate-50 border border-slate-100 rounded-sm outline-none focus:border-blue-600 focus:bg-white transition-all font-medium text-slate-900"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 text-sm font-medium"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
