const TodoHeader = ({ title, setTitle, completedCount, totalCount }) => (
  <div className="mb-12">
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Collection Title..."
      className="w-full text-5xl font-black text-slate-900 bg-transparent outline-none tracking-tighter placeholder:text-slate-100"
    />
    <p className="text-slate-400 font-bold mt-2 uppercase text-[10px] tracking-widest">
      {completedCount} of {totalCount} tasks completed
    </p>
  </div>
);
export default TodoHeader