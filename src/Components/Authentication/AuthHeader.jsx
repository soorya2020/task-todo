import Logo from "../Logo";

const AuthHeader = ({ isLogin }) => (
  <div className="text-center flex flex-col space-y-2 items-center ">
    <div>
      <Logo size="asdf" />
    </div>

    <h1 className="text-2xl font-black text-slate-900 tracking-tight">
      {isLogin ? "Welcome back." : "Join the curve."}
    </h1>
    <p className="text-slate-500 font-sm">
      {isLogin
        ? "Enter your details to access your tasks."
        : "Start organizing your life in seconds."}
    </p>
  </div>
);
export default AuthHeader;
