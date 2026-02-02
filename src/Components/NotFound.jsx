import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-5 mt-10">
      {/* Big Faded Background Text */}
      <h1 className="text-[12rem] font-black text-slate-100 absolute -z-10 select-none">
        404
      </h1>

      <h2 className="text-4xl font-bold text-slate-900 mb-2">Lost in Space</h2>

      <p className="text-slate-500 max-w-sm mb-8 font-medium">
        We couldn't find the page you're looking for. It might have been moved
        or deleted.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
