import React from "react";
import { NAV_LINKS } from "../constants";
import { NavLink } from "react-router-dom";

export const BreadCrumps = () => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-100 px-4 py-2 rounded-md text-sm "
    >
      <ol
        className=" flex flex-wrap items-center justify-center
      text-gray-600
      sm:justify-start"
      >
        {NAV_LINKS.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-gray-600 hover:text-blue-600"
              }
              aria-current={index === NAV_LINKS.length - 1 ? "page" : undefined}
            >
              {item.name}
            </NavLink>

            {index < NAV_LINKS.length - 1 && (
              <span className="px-2" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumps;
