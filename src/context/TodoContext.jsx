import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [collections, setCollections] = useState([]); // This will hold your Todo Folders

  const addCollection = (newCollection) => {
    setCollections([...collections, newCollection]);
  };

  return (
    <TodoContext.Provider
      value={{ collections, addCollection, setCollections }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
