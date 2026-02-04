const Loading = ({ text = "Loading..." }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center
      bg-slate-50"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />

        {/* Text */}
        <p className="text-sm font-semibold text-slate-600">{text}</p>
      </div>
    </div>
  );
};

export default Loading;
