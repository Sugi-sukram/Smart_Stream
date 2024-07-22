import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarNavItem,
  sidebarNavlist,
} from "../config/sidebar-info/sidebar-config";
import "../styles/sidebar/sidebar-styles.scss";
const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {sidebarNavlist.items.map((sidebar: SidebarNavItem) => (
            <li
              title={sidebar.title}
              key={sidebar.title}
              className="sidebar-nav-list-item"
            >
              <Link to={sidebar.link} className="sidebar-nav-list-item-link">
                {location.pathname == sidebar.link? (
                  <sidebar.enableIcon className="sidebar-icon" />

                ) : (
                  <sidebar.icon className="sidebar-icon" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
