import React from "react";
import { useNavigate } from "react-router-dom";
import NewTaskCard from "./NewTaskCard";
import TodoPreviewCard from "./TodoPreviewCard";
import { useTodos } from "../../context/TodoContext";
const CreateTodo = () => {
  const navigate = useNavigate();
  const { collections, setCollections, addCollection } = useTodos();
  if (!collections) {
    return (
      <div className="p-8 bg-slate-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* We keep the NewTaskCard visible or show a skeleton for it too */}
          <div className="h-64 border-2 border-dashed border-slate-200 rounded-[2.5rem] animate-pulse" />

          {/* Render 7 skeleton cards to fill the grid */}
          {[...Array(7)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NewTaskCard onClick={() => navigate("/app/todo/new")} />
        {collections.map((todo) => (
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

const SkeletonCard = () => {
  return (
    <div className="h-64 bg-white border border-slate-200 rounded-2xl p-8 shadow-md animate-pulse">
      {/* Status Badge Skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 w-16 bg-slate-100 rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-slate-100"></div>
      </div>

      {/* Title Skeletons */}
      <div className="space-y-3">
        <div className="h-5 w-3/4 bg-slate-100 rounded-lg"></div>
        <div className="h-5 w-1/2 bg-slate-100 rounded-lg"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="mt-20 pt-4 border-t border-slate-50 flex justify-between items-center">
        <div className="h-3 w-12 bg-slate-50 rounded"></div>
        <div className="h-3 w-16 bg-slate-50 rounded"></div>
      </div>
    </div>
  );
};
