import React from "react";
import { useNavigate } from "react-router-dom";
import NewTaskCard from "./NewTaskCard";
import TodoPreviewCard from './TodoPreviewCard'
const CreateTodo = () => {
  const navigate = useNavigate();

  const todos = [
    {
      id: "101",
      title: "Design System Update",
      status: "High",
      tasks: ["Update color tokens", "Review typography", "Export SVG icons"],
    },
    {
      id: "102",
      title: "Client Meeting",
      status: "Medium",
      tasks: ["Prepare slides", "Send invite"],
    },
    {
      id: "103",
      title: "Refactor Auth",
      status: "Urgent",
      tasks: ["Fix JWT expiry", "Add MFA support", "Clean up useEffects"],
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NewTaskCard onClick={() => navigate("/app/todo/new")} />

        {todos.map((todo) => (
          <TodoPreviewCard
            key={todo.id}
            todo={todo}
            onClick={(id) => navigate(`/app/todo/${id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateTodo;
