const TodoItem = ({ item, onToggle, onUpdate }) => (
  <div className="group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-sm transition-all">
    <button
      onClick={() => onToggle(item.id)}
      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
        item.completed
          ? "bg-blue-600 border-blue-600"
          : "bg-white border-slate-200 group-hover:border-blue-400"
      }`}
    >
      {item.completed && (
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>

    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={(e) => onUpdate(item.id, e.currentTarget.innerText)}
      className={`flex-1 outline-none text-slate-700 font-medium transition-all 
        ${item.completed ? "line-through text-slate-300" : ""} 
        truncate focus:whitespace-normal focus:overflow-visible focus:break-words`}
    >
      {item.text}
    </div>
  </div>
);

export default TodoItem;
