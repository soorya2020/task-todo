export  const ROUTES = {
  LANDING: "/",
  APP: "/app",
  LOGIN: "/app/login",
  TODOS: "/app/todos",
  TODO_DETAIL: (id = ":id") => `/app/todo/${id}`, // Flexible for both config and links
};


export const NAV_LINKS = [
  { name: "Todos", path: "/app/todos" },
  { name: "Todo", path: "/app/todo/:id" },
];
