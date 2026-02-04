export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const validateForm = (formData, isLogin = false) => {
  const { name, email, password } = formData;

  // For signup, name is required
  if (!isLogin && (!name || name.trim() === "")) {
    return "Name is required";
  }

  // Email validation
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  // Password validation (only for signup or login with password)
  if (!password) {
    return "Password is required";
  }

  if (!isLogin) {
    // Check password rules: min 8 chars, 1 uppercase, 1 special char
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long, include 1 uppercase letter and 1 special character";
    }
  }

  return null; // No errors
};
