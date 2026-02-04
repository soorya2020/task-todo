# Todo App Frontend

This is the **frontend for the Todo App**, built with **React and Tailwind CSS**.

It interacts with the backend API hosted at [https://api.gittogether.co.in](https://api.gittogether.co.in) and is deployed on **Vercel** at [https://todo.gittogether.co.in](https://todo.gittogether.co.in).

---

## 🛠 Tech Stack

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Context API** - Global state management, reduces prop drilling
- **Axios** - API requests and token management with interceptors
- **Tailwind CSS** - Utility-first CSS framework for styling

---

## 🌟 Features

- Users can **create an account** and sign in/out
- Each user can **create multiple todos** under different categories
- Pre-generated default categories for initial users:
  - Work
  - Shopping
  - Personal  
    This provides a better experience on first login.
- Centralized state management using **Context API**
- **Axios interceptors** handle tokens and API requests seamlessly
- **Tailwind CSS** provides a responsive and modern UI

---

## 💡 Assumptions & Design Decisions

- **Assumptions:**
  - Users must be able to **see all todo lists in one place**.  
  - Routing is designed such that **landing page and login page are separated** from the main app layout.  

- **Design Decisions:**
  - Separation of authentication pages from the app UI ensures **clean and modular routing**.  
  - **Context API** is used to reduce prop drilling and centralize state management.  
  - **Axios interceptors** manage authentication tokens automatically for all requests.  
  - **Tailwind CSS** was chosen for rapid, responsive UI development without custom CSS bloat.  

---

## 📦 Local Installation

### 1. Clone the repository

```bash
git clone <frontend-repo-url>
cd <repo-folder>

npm install

Create a .env file in the root folder:

VITE_API_URL=https://api.gittogether.co.in

npm run dev
```

The app will be available at:
[http://localhost:5173](http://localhost:5173)

