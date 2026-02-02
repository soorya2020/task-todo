import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  // Redirect logic: back where they came from, or to the todos
  const from = location.state?.from?.pathname || "/app/todos";

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate Auth
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: email.split("@")[0] || "User",
        email: email,
      }),
    );
    navigate(from, { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-[100vh] bg-slate-100">
      {/* CARD: Same width as our previous refined version 
          but with the Landing Page's shadow and border style
      */}
      <div className="w-full max-w-[400px] bg-white rounded-sm border border-slate-100 shadow-2xl  p-10 relative overflow-hidden">
        {/* Subtle Background Accent (Matches Landing Page blobs) */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 -mr-16 -mt-16"></div>

        {/* Brand Logo Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
            <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
            Task
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Welcome back, achiever.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-600/10 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium text-slate-900"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                Password
              </label>
              <a
                href="#"
                className="text-[10px] font-bold text-blue-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-600/10 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium text-slate-900"
            />
          </div>

          {/* Login Button - Matches Landing Page Blue Action */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sign In to Task
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-10 text-sm font-medium text-slate-400">
          New to Task?{" "}
          <Link
            to="/"
            className="text-slate-900 font-black hover:text-blue-600 transition-colors"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
