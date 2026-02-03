import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import AuthToggle from "./AuthToggle";

import { useUser } from "../../context/UserContext";

import { API } from "../../../utils/axios";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // useEffect(() => {
  //   setError("");
  // });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (error) setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const endpoint = isLogin ? "/sign-in" : "/sign-up";
      const response = await API.post("/auth" + endpoint, formData);
      const result = response.data;
      if (!result.success) {
        throw new Error(result.data.message || "Something went wrong");
      }

      login(result.data.user, result.data.token);
      navigate("/app/todos");
    } catch (err) {
      const serverMessage =
        err.response?.data?.error || err.message || "An error occurred";
      setError(serverMessage);
      setIsLoading(false);
    }
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
            <AuthInput
              onChange={(e) => handleChange(e, "name")}
              label="Full Name"
              type="text"
              placeholder="John Doe"
            />
          )}

          <AuthInput
            onChange={(e) => handleChange(e, "email")}
            label="Email Address"
            type="email"
            placeholder="name@company.com"
          />

          <AuthInput
            onChange={(e) => handleChange(e, "password")}
            label="Password"
            type="password"
            placeholder="••••••••"
          />
          <p className="text-red-500 text-sm">{error}</p>

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

          {/* <button
            type="button"
            className="w-full py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-sm"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-4 h-4"
              alt="Google"
            />
            Google
          </button> */}
        </form>
        <div>
          <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
