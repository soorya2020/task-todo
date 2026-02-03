import { Link } from "react-router-dom";

const HeroContent = () => (
  <div className="flex-1 text-center lg:text-left space-y-8">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
      <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">
        Available for Web & Desktop
      </span>
    </div>

    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9]">
      Stay ahead <br />
      <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        of the curve.
      </span>
    </h1>

    <p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium">
      Task is the beautifully simple, lightning-fast todo manager designed to
      help you conquer your day, one checkmark at a time.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
      <Link
        to="/app"
        className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:scale-105 transition-all"
      >
        Try Task Free
      </Link>
      <Link
        to="/app"
        className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-black rounded-2xl border-2 border-slate-100 hover:bg-slate-50 transition-all"
      >
        Live Demo
      </Link>
    </div>
  </div>
);

export default HeroContent;
