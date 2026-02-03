import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContext";

export const BreadCrumps = () => {
  const { id } = useParams();
  const { collections } = useTodos();

  // 1. Find the collection name
  const currentCollection = collections?.find((c) => c._id === id);
  const secondLevelName =
    id === "new" ? "New Collection" : currentCollection?.name || "Untitled";

  return (
    <nav
      aria-label="Breadcrumb"
      className="px-6 py-3 text-sm border-b border-slate-100 bg-white "
    >
      <ol className="flex items-center text-slate-500 font-medium">
        {/* Level 1: Home/Dashboard */}
        <li className="flex items-center">
          <NavLink
            to="/app/todos"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-black"
                : "hover:text-blue-600 transition-colors"
            }
          >
            Collections
          </NavLink>
        </li>

        {/* Level 2: The Specific Todo Collection */}
        {id && (
          <li className="flex items-center">
            <span
              className="px-3 text-slate-300 select-none"
              aria-hidden="true"
            >
             /
            </span>
            <NavLink
              // Construct the dynamic path
              to={`/app/todo/${id}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-black"
                  : "hover:text-blue-600 transition-colors"
              }
            >
              <span className="truncate max-w-[150px] inline-block align-bottom">
                {secondLevelName}
              </span>
            </NavLink>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumps;
