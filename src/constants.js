export const ROUTES = {
  LANDING: "/",
  APP: "/app",
  LOGIN: "/app/login",
  TODOS: "/app/todos",
  TODO_DETAIL: (id = ":id") => `/app/todo/${id}`, // Flexible for both config and links
};

export const TODO_PREPARING_DELAY = 7000;

export const NAV_LINKS = [
  { name: "Todos", path: "/app/todos" },
  { name: "Todo", path: "/app/todo/:id" },
];

export const DEFAULT_TODO_COLLECTIONS = [
  {
    name: "Work 💼",
    todos: [{ task: "Check emails" }, { task: "Plan weekly goals" }],
  },
  {
    name: "Personal 🏠",
    todos: [{ task: "Morning workout" }, { task: "Meditation" }],
  },
  {
    name: "Shopping 🛒",
    todos: [{ task: "Buy milk" }, { task: "Get groceries" }],
  },
];

export const TODO_PREVIEW_LIMIT = 5;
