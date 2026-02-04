const TodoItem = ({ item, onToggle, onUpdate, onDelete }) => {
  const handleClick = () => {
    if (item.task != "") {
      onToggle(item._id);
    }
  };

  return (
    <div className="group flex items-center gap-3 sm:gap-4 p-2 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 shadow-2xs hover:shadow-sm transition-all">
      {/* Checkbox */}
      <button
      
        onClick={handleClick}
        className={`
      shrink-0
      w-4 h-4 sm:w-6 sm:h-6
      rounded-lg border-2 flex items-center justify-center
      transition-all
      ${
        item.completed
          ? "bg-blue-600 border-blue-600"
          : "bg-white border-slate-200 group-hover:border-blue-400"
      }
    `}
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

      {/* Input */}
      <input
        disabled={item.completed}
        value={item.task}
        onChange={(e) => onUpdate(item._id, e.target.value)}
        className={`
      flex-1 min-w-0
      outline-none bg-transparent
      text-slate-700 font-medium
      transition-all
      ${item.completed ? "line-through text-slate-300" : ""}
    `}
      />

      {/* Delete */}
      <button
        title="Delete this task"
        onClick={() => onDelete(item._id)}
        className="
      shrink-0
      opacity-100 sm:opacity-0 sm:group-hover:opacity-100
      transition-opacity duration-200
      p-2 rounded-lg
      hover:bg-red-50
    "
      >
        <span className="text-lg">🗑️</span>
      </button>
    </div>
  );
};

export default TodoItem;
