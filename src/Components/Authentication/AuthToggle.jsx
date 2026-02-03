const AuthToggle = ({ isLogin, setIsLogin }) => (
  <p className="text-center text-sm font-bold text-slate-400">
    {isLogin ? "New to Task?" : "Already have an account?"}{" "}
    <button
      onClick={() => setIsLogin(!isLogin)}
      className="text-blue-600 hover:underline ml-1"
    >
      {isLogin ? "Create an account" : "Sign in here"}
    </button>
  </p>
);
export default AuthToggle