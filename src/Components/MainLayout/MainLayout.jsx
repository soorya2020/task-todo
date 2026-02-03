import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import BreadCrumps from "../BreadCrumps";
import Logo from "../Logo";
import LayoutFooter from "./LayoutFooter";
import UserSection from "./UserSection";
import { useUser } from "../../context/UserContext";

const MainLayout = () => {
  const { user, logout } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Sticky Header Container */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <NavLink to="/" className="tracking-tighter">
          <Logo size={"small"} />
        </NavLink>

        <UserSection user={user} />
      </header>

      {/* Breadcrumbs appear only for logged-in users */}
      {user && (
        <div className="bg-white border-b border-slate-100">
          <BreadCrumps />
        </div>
      )}

      {/* Content Area */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <Outlet />
      </main>

      <LayoutFooter />
    </div>
  );
};

export default MainLayout;
