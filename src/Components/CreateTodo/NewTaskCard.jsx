const NewTaskCard = ({ onClick }) => (
  <button
    onClick={onClick}
    className="group h-80 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col justify-center items-center gap-4 hover:border-blue-600/30 hover:bg-white transition-all duration-300"
  >
    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
      <span className="text-3xl font-light text-blue-600">+</span>
    </div>
    <p className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600">
      New Task
    </p>
  </button>
);

export default NewTaskCard;
