import { TODO_PREVIEW_LIMIT } from "../../constants";
import { formatDate } from "../../helpers";

const TodoPreviewCard = ({ item, onClick, index }) => {
  const inCompletedTodoList = item.todos.filter(
    (item) => item.completed == false,
  );

  return (
    <div
      onClick={() => onClick(item._id)}
      className="group h-80 bg-white border border-slate-100 rounded-[2.5rem] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex justify-between items-start mb-3">
          {/* Date Badge */}
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-slate-100 text-slate-500">
            {item.createdAt ? formatDate(item.createdAt) : "No Date"}
          </span>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-1">
          {item.name}
        </h3>
      </div>

      {/* Task List Preview */}
      <div className="flex-grow space-y-2">
        {inCompletedTodoList.slice(0, TODO_PREVIEW_LIMIT).map((todo, index) => (
          <div key={todo._id} className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-slate-200 rounded-md flex-shrink-0" />
            <span className="text-sm text-slate-500 line-clamp-1">
              {todo.task}
            </span>
          </div>
        ))}
        {inCompletedTodoList.length > 3 && (
          <p className="text-[10px] font-bold text-slate-400 pl-6">
            {inCompletedTodoList.length > TODO_PREVIEW_LIMIT ? " +" : ""}
            {inCompletedTodoList.length > TODO_PREVIEW_LIMIT
              ? inCompletedTodoList.length - TODO_PREVIEW_LIMIT
              : ""}
            {inCompletedTodoList.length > TODO_PREVIEW_LIMIT ? " MORE" : ""}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-4">
        <span className="text-xs font-bold text-slate-400  tracking-widest">
          ID: {100 + index + 1}
        </span>
        <span className="text-blue-600 text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">
          OPEN LIST →
        </span>
      </div>
    </div>
  );
};

export default TodoPreviewCard;
