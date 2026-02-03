import { Link } from "react-router-dom";
import Logo from "../Logo";

const NavBar = () => (
  <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
        <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
      </div> */}
      <Logo size="small" />
      
    </div>

    <div className="flex items-center gap-6">
      <Link
        to="/login"
        className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
      >
        Sign In
      </Link>
      <Link
        to="/login"
        className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md"
      >
        Get Started
      </Link>
    </div>
  </nav>
);

export default NavBar;
