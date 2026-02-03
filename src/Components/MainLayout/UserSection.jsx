import {  Link } from "react-router-dom";

const UserSection = ({ user }) => {
  if (!user) {
    return (
      <Link
        to="/login"
        className="text-sm font-bold text-secondary hover:text-primary transition-colors"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:block text-right">
        <p className="text-[10px] text-secondary leading-none">Hey</p>
        <p className="text-xs font-bold text-slate-900">{user.name}</p>
      </div>
      {/* Avatar Circle */}
      <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-sm">
        {user.name?.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

export default UserSection;
