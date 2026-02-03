export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) return "Today";

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
