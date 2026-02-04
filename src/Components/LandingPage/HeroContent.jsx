import { Link } from "react-router-dom";

const HeroContent = () => (
  <div className="flex-1 text-center lg:text-left space-y-4 py-4">
    {/* Reduced margin and padding on the badge */}
    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
      <span className="text-[9px] font-black uppercase tracking-widest text-blue-700">
        Web & Mobile
      </span>
    </div>

    {/* Reduced text size from 8xl/6xl to 5xl/4xl */}
    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
      Stay ahead <br />
      <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        of the curve.
      </span>
    </h1>

    {/* Reduced font size and line height */}
    <p className="text-base text-slate-500 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
      Task is the simple, fast todo manager designed to help you conquer your
      day.
    </p>

    {/* Reduced button padding and shadow size */}
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
      <Link
        to="/app"
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-sm font-black rounded-xl shadow-lg hover:scale-105 transition-all"
      >
        Try Task Free
      </Link>
      <Link
        to="/app"
        className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 text-sm font-black rounded-xl border-2 border-slate-100 hover:bg-slate-50 transition-all"
      >
        Live Demo
      </Link>
    </div>
  </div>
);

export default HeroContent;
