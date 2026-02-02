import { Outlet, Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import BreadCrumps from "./BreadCrumps";

const MainLayout = () => {
  const userJson = localStorage.getItem("user");
  const user = userJson //TODO:remove the user
    ? JSON.parse(userJson)
    : null;
  return (
    <div className="flex flex-col min-h-screen bg-slate-100" >
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="font-bold text-2xl text-primary">
          <NavLink to={"/"}>Task</NavLink>
        </div>

        {/* 2. CONDITIONAL USER SECTION */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex  hidden sm:block ">
                <p className="text-[10px]  text-secondary">Hey</p>
                <p className="text-xs font-bold text-slate-900">{user.name}</p>
              </div>
              {/* Simple Avatar Circle */}
              <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-bold text-secondary hover:text-primary transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>
      {user && <BreadCrumps />}

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Child routes (Home/About) render here */}
        <Outlet />
      </main>

      <footer className="p-4 text-center border-t border-gray-100 text-gray-500">
        © 2024 My App
      </footer>
    </div>
  );
};

export default MainLayout;
