import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id !== "new") {
      // Mocking the data structure for a specific folder
      setTitle("Project Launch");
      setItems([
        { id: 1, text: "Finalize UI Design", completed: true },
        { id: 2, text: "Connect API Endpoints", completed: false },
        { id: 3, text: "User Testing Phase 1", completed: false },
      ]);
    }
  }, [id]);

  const toggleItem = (itemId) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, completed: !item.completed } : item
    ));
  };

  const addNewItem = () => {
    const newItem = { id: Date.now(), text: "", completed: false };
    setItems([...items, newItem]);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* 1. Header Area */}
      <div className="mb-12">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Collection Title..."
          className="w-full text-5xl font-black text-slate-900 bg-transparent outline-none tracking-tighter placeholder:text-slate-100"
        />
        <p className="text-slate-400 font-bold mt-2 uppercase text-[10px] tracking-widest">
          {items.filter(i => i.completed).length} of {items.length} tasks completed
        </p>
      </div>

      {/* 2. Checklist Area */}
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.id}
            className="group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-sm transition-all"
          >
            {/* Custom Checkbox */}
            <button 
              onClick={() => toggleItem(item.id)}
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                item.completed 
                ? "bg-blue-600 border-blue-600" 
                : "bg-white border-slate-200 group-hover:border-blue-400"
              }`}
            >
              {item.completed && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>

            {/* Task Text Input */}
            <input
              type="text"
              value={item.text}
              onChange={(e) => {
                const newItems = [...items];
                newItems.find(i => i.id === item.id).text = e.target.value;
                setItems(newItems);
              }}
              placeholder="List item..."
              className={`flex-1 bg-transparent outline-none text-slate-700 font-medium transition-all ${
                item.completed ? "line-through text-slate-300" : ""
              }`}
            />
          </div>
        ))}

        {/* 3. Add New Item Action */}
        <button 
          onClick={addNewItem}
          className="flex items-center gap-3 px-4 py-3 text-blue-600 font-bold text-sm hover:bg-blue-50 rounded-xl transition-colors mt-4"
        >
          <span className="text-xl">+</span> Add an item
        </button>
      </div>

      {/* 4. Footer Actions */}
      <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between">
        <button 
          onClick={() => navigate("/app/todos")}
          className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl shadow-lg hover:bg-slate-800 transition-all"
        >
          Save Collection
        </button>
        <button className="text-red-400 text-sm font-bold hover:text-red-600 transition-colors">
          Delete Collection
        </button>
      </div>
    </div>
  );
};

export default Todo;