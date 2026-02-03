import React, { useState, useEffect } from "react";
const STEPS = [
  { label: "Work", icon: "💼" },
  { label: "Personal", icon: "🏠" },
  { label: "Shopping", icon: "🛒" },
];
const SetupLoadingScreen = ({ timer }) => {
  const [seconds, setSeconds] = useState(timer / 1000);

  // Countdown logic for the text display
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-50 z-[100] flex items-center justify-center p-6">
      <div className="max-w-xl w-full flex flex-col items-center">
        {/* Quote & Welcome */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl font-black text-slate-900">
            Welcome to the family!
          </h2>
          <p className="text-slate-500 font-medium">
            Preparing your workspace in{" "}
            <span className="text-blue-600 font-black">
              {Math.ceil(seconds)}s
            </span>
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex justify-between items-center mb-12">
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0" />

          {/* Animated Progress Line */}
          <div
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 rounded-full z-10 transition-all ease-linear"
            style={{
              width: "100%",
              animation: `fillProgress ${timer}ms linear forwards`,
            }}
          />

          {/* Timeline Nodes */}
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="relative z-20 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-xl hover:scale-110 transition-transform bg-white">
                {step.icon}
              </div>
              <span className="absolute -bottom-8 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <p className="mt-8 text-slate-400 italic text-sm text-center max-w-sm">
          "The secret of getting ahead is getting started."
        </p>

        {/* Global CSS for the bar animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes fillProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `,
          }}
        />
      </div>
    </div>
  );
};

export default SetupLoadingScreen;
