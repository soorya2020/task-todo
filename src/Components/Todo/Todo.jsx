import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterActions from "./FooterActions";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

const Todo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id !== "new") {
      setTitle("Project Launch");
      setItems([
        { id: 1, text: "Finalize UI Design", completed: true },
        { id: 2, text: "Connect API Endpoints", completed: false },
        { id: 3, text: "User Testing Phase 1", completed: false },
      ]);
    }
  }, [id]);

  const toggleItem = (itemId) => {
    setItems(
      items.map((i) =>
        i.id === itemId ? { ...i, completed: !i.completed } : i,
      ),
    );
  };

  const updateItemText = (itemId, newText) => {
    setItems(items.map((i) => (i.id === itemId ? { ...i, text: newText } : i)));
  };

  const addNewItem = () => {
    setItems([...items, { id: Date.now(), text: "", completed: false }]);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <TodoHeader
        title={title}
        setTitle={setTitle}
        completedCount={items.filter((i) => i.completed).length}
        totalCount={items.length}
      />

      <div className="space-y-3">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onToggle={toggleItem}
            onUpdate={updateItemText}
          />
        ))}

        <button
          onClick={addNewItem}
          className="flex items-center gap-3 px-4 py-3 text-blue-600 font-bold text-sm hover:bg-blue-50 rounded-xl transition-colors mt-4"
        >
          <span className="text-xl">+</span> Add an item
        </button>
      </div>

      <FooterActions
        onSave={() => navigate("/app/todos")}
        onDelete={() => console.log("Delete triggered")}
      />
    </div>
  );
};

export default Todo;
