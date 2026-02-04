export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};
