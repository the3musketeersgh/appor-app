import React, { useState } from "react";
import styles from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className={styles.title}>
        Logo
      </Link>
      <div
        className={styles.menu}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/jhs"
          >
            JHS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shs"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            SHS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/university"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            University
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
