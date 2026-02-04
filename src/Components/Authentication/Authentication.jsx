import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../LoadingButton";

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
    <div
      className="min-h-screen flex items-center justify-center p-4
  bg-linear-to-br from-blue-300 via-purple-50 to-blue-300"
    >
      <div className="w-full max-w-4xl bg-white rounded-md shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row">
          {/* LEFT: Header / Branding */}
          <div className="md:w-1/2 p-6 md:p-10 flex items-center justify-center bg-slate-50">
            <AuthHeader isLogin={isLogin} />
          </div>

          {/* RIGHT: Form */}
          <div className="md:w-1/2 p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
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

              {/* Error space reserved */}
              <p className="min-h-5 text-red-500 text-sm">{error}</p>

              <LoadingButton
                isLoading={isLoading}
                text={isLogin ? "Sign In" : "Create Account"}
                loadingText={isLogin ? "Signing In..." : "Creating Account..."}
                type="submit"
              />

              <div className="relative py-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
              </div>
            </form>
            <div className="p-4 text-center">
              <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
