import React from "react";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const navigate = useNavigate();

  // Mock data - in a real app, this comes from an API or State
  const todos = [
    { id: "101", title: "Design System Update", status: "High" },
    { id: "102", title: "Client Meeting Notes", status: "Medium" },
    { id: "103", title: "Refactor Auth Logic", status: "Urgent" },
  ];

  const handleCreateNew = () => {
    // Usually, you'd generate a new ID on the backend first
    navigate("/app/todo/new");
  };

  const handleOpenExisting = (id) => {
    navigate(`/app/todo/${id}`);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {/* ADD NEW CARD */}
        <button 
          onClick={handleCreateNew}
          className="group h-64 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col justify-center items-center gap-4 hover:border-blue-600/30 hover:bg-blue-50/30 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-3xl font-light text-blue-600">+</span>
          </div>
          <p className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600">New Task</p>
        </button>

        {/* EXISTING TODO CARDS */}
        {todos.map((todo) => (
          <div
            key={todo.id}
            onClick={() => handleOpenExisting(todo.id)}
            className="group h-64 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                  todo.status === 'Urgent' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {todo.status}
                </span>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                {todo.title}
              </h3>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className="text-xs font-bold text-slate-400">ID: {todo.id}</span>
              <span className="text-blue-600 text-sm font-black opacity-0 group-hover:opacity-100 transition-opacity">VIEW →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTodo;