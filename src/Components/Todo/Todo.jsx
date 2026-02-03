import React, { useState, useEffect, use, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterActions from "./FooterActions";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodoContext";
import { API } from "../../../utils/axios";

const Todo = () => {
  const { id } = useParams();
  const { collections } = useTodos();

  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Guard flag

  const titleRef = useRef(title);
  const itemsRef = useRef(items);

  const selectedCollection = collections?.find((item) => item._id === id);

  const pendingItems = items.filter((item) => !item.completed);
  const completedItems = items.filter((item) => item.completed);

  useEffect(() => {
    titleRef.current = title;
    itemsRef.current = items;
  }, [title, items]);

  useEffect(() => {
    if (isLoaded) return; // Don't run this again if we already have data

    const savedDraft = localStorage.getItem(`todo_draft_${id}`);
    if (savedDraft) {
      const parsed = JSON.parse(savedDraft);
      setTitle(parsed.title || "");
      setItems(parsed.items || []);
      setIsLoaded(true);
    } else if (id !== "new" && selectedCollection) {
      setTitle(selectedCollection.name || "");
      setItems(selectedCollection.todos || []);
      setIsLoaded(true);
    } else if (id === "new") {
      setIsLoaded(true); // Ready for a new entry
    }
  }, [selectedCollection, id, isLoaded]);

  // 2. Continuous LocalStorage Backup
  useEffect(() => {
    if (isLoaded && (title || items.length > 0)) {
      localStorage.setItem(
        `todo_draft_${id}`,
        JSON.stringify({ title, items }),
      );
    }
  }, [title, items, id, isLoaded]);

  useEffect(() => {
    return () => {
      // Logic: Only save if the user actually typed something
      if (titleRef.current.trim() !== "" || itemsRef.current.length > 0) {
        saveToDatabase(titleRef.current, itemsRef.current);
      }
    };
  }, []); // Only runs on unmount

  const toggleItem = (itemId) => {
    setItems((prev) =>
      prev.map((i) =>
        i._id === itemId || i.id === itemId
          ? { ...i, completed: !i.completed }
          : i,
      ),
    );
  };

  const updateItemText = (itemId, newText) => {
    setItems((prev) =>
      prev.map((i) => (i._id === itemId ? { ...i, task: newText } : i)),
    );
  };

  const deleteTodo = (id) => {
    setItems((prev) => prev.filter((i) => i._id != id));
  };

  const addNewItem = () => {
    const newItem = {
      _id: Date.now().toString(), // Temporary ID for React keys
      task: "", // Match your backend 'task' field
      completed: false,
      isNew: true, // Useful flag for styling/logic
    };

    setItems([...items, newItem]);
  };

  const saveToDatabase = async (name, todos) => {
    try {
      const payload = {
        name: name || "Untitled Collection",
        todos: todos.map((item) => {
          if (item.isNew) {
            const { _id, isNew, ...rest } = item; // Strip temporary _id and flag
            return rest;
          }
          return item; // Keep existing items as is
        }),
      };

      if (id === "new") {
        await API.post("/todos/collections", payload);
      } else {
        await API.put(`/todos/collections/${id}`, payload);
      }
      localStorage.removeItem(`todo_draft_${id}`);
    } catch (err) {
      console.error("Auto-save failed:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Title Section */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-4xl font-black bg-transparent outline-none text-slate-900 w-full"
        placeholder="Collection Name"
      />

      {/* 1. Pending Section */}
      <div className="space-y-3">
        {pendingItems.map((item) => (
          <TodoItem
            key={item._id}
            item={item}
            onToggle={toggleItem}
            onUpdate={updateItemText}
            onDelete={(id) => deleteTodo(id)}
          />
        ))}
        <button
          onClick={addNewItem}
          className="w-full p-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:border-blue-300 hover:text-blue-500 transition-all"
        >
          + Add New Task
        </button>
      </div>

      {/* 2. Completed Divider & Section */}
      {completedItems.length > 0 && (
        <div className="pt-6 space-y-3">
          <div className="flex items-center gap-4 px-2">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
              Completed ({completedItems.length})
            </span>
            <div className="h-[1px] w-full bg-slate-100"></div>
          </div>

          <div className="opacity-60 grayscale-[0.5]">
            {completedItems.map((item) => (
              <TodoItem
                key={item._id}
                item={item}
                onToggle={toggleItem}
                onUpdate={updateItemText}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
