import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import AuthToggle from "./AuthToggle";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <AuthHeader isLogin={isLogin} />

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-sm border border-slate-100 shadow-sm space-y-4"
        >
          {!isLogin && (
            <AuthInput label="Full Name" type="text" placeholder="John Doe" />
          )}

          <AuthInput
            label="Email Address"
            type="email"
            placeholder="name@company.com"
          />

          <AuthInput label="Password" type="password" placeholder="••••••••" />

          <button className="w-full py-3 bg-slate-900 text-white font-black rounded-sm hover:bg-blue-600 transition-all transform active:scale-[0.98] mt-2">
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold">
              <span className="bg-white px-2 text-slate-300">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-sm"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-4 h-4"
              alt="Google"
            />
            Google
          </button>
        </form>

        <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
};

export default Authentication;
