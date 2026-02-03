import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [collections, setCollections] = useState([
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
  ]); // This will hold your Todo Folders

  const addCollection = (newCollection) => {
    setCollections([...collections, newCollection]);
  };

  return (
    <TodoContext.Provider
      value={{ collections, setCollections, addCollection }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
