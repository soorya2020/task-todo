import React from "react";

const Logo = ({ size = "small" }) => {
  const isSmall = size === "small";

  return (
    <div
      className={`flex items-center gap-3 ${isSmall ? "flex-row" : "flex-col"}`}
    >
      {/* Icon Box */}
      <div
        className={`${isSmall ? "w-10 h-10" : "w-12 h-12"} bg-blue-600 rounded-xl flex items-center justify-center shadow-lg`}
      >
        <div
          className={`${isSmall ? "w-4 h-4 border-2" : "w-4 h-4 border-2"} border-white rounded-sm rotate-45`}
        ></div>
      </div>

      {/* Brand Name */}
      <span
        className={`${isSmall ? "text-2xl" : "text-2xl"} font-black tracking-tighter text-slate-900 uppercase`}
      >
        Task
      </span>
    </div>
  );
};

export default Logo;
