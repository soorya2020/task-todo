import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import { API } from "../../../utils/axios";

const Todo = () => {
  const { id } = useParams();

  const [selectedCollection, setSelectedCollection] = useState(null);
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const pendingTasks = todos.filter((item) => !item.completed);
  const completedTasks = todos.filter((item) => item.completed);

  //fetch collection during initial render and when id chages
  useEffect(() => {
    if (id === "new") return;
    let isMounted = true;
    const fetchCollection = async () => {
      try {
        const { data } = await API.get(`/todos/collections/${id}`);
        if (isMounted) setSelectedCollection(data.data);
      } catch (err) {
        console.error("Failed to fetch collection", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();

    return () => {
      isMounted = false;
    };
  }, [id]);

  //used to save 
  useEffect(() => {
    const savedDraft = localStorage.getItem(`todo_draft_${id}`);

    if (savedDraft) {
      const parsed = JSON.parse(savedDraft);
      setTitle(parsed.title || "");
      setTodos(parsed.items || []);
      return;
    }

    if (id !== "new" && selectedCollection) {
      setTitle(selectedCollection.name || "");
      setTodos(selectedCollection.todos || []);
      return;
    }

    if (id === "new") {
      setTitle("");
      setTodos([]);
    }
  }, [id, selectedCollection]);

  // 2. Continuous LocalStorage Backup
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (title || todos.length > 0) {
        localStorage.setItem(
          `todo_draft_${id}`,
          JSON.stringify({ title, items: todos }),
        );
      }
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [title, todos, id]);

  useEffect(() => {
    if (title.trim() === "" && todos.length === 0) {
      return;
    }

    const timeoutId = setTimeout(() => {
      saveToDatabase(title, todos);
    }, 1000); // ⏳ wait 1s after last change

    return () => {
      clearTimeout(timeoutId); // cancel previous save
    };
  }, [title, todos]);

  const toggleItem = (itemId) => {
    setTodos((prev) =>
      prev.map((i) =>
        i._id === itemId ? { ...i, completed: !i.completed } : i,
      ),
    );
  };

  const updateItemText = (itemId, newText) => {
    setTodos((prev) =>
      prev.map((i) => (i._id === itemId ? { ...i, task: newText } : i)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((i) => i._id !== id));
  };

  const addNewItem = () => {
    setTodos((prev) => [
      ...prev,
      {
        _id: crypto.randomUUID(),
        task: "",
        completed: false,
        isNew: true,
      },
    ]);
  };

  const saveToDatabase = async (name, todos) => {
    try {
      const payload = {
        name: name.trim() || "Untitled Collection",
        todos: todos
          .filter((t) => t.task?.trim())
          .map(({ _id, isNew, ...rest }) => (isNew ? rest : { _id, ...rest })),
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

  if (loading) return <>loading</>;

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
        {pendingTasks.map((item) => (
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
      {completedTasks.length > 0 && (
        <div className="pt-6 space-y-3">
          <div className="flex items-center gap-4 px-2">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
              Completed ({completedTasks.length})
            </span>
            <div className="h-[1px] w-full bg-slate-100"></div>
          </div>

          <div className="opacity-60 grayscale-[0.5]">
            {completedTasks.map((item) => (
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
