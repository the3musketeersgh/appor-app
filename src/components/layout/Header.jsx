import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={classes.navbar}>
        <div className={classes.navbarcontainer}>
          {/* Logo */}

          <div className={classes.navbarlogo}>
            {/* <img src="logo.png" alt="Logo" /> */}
            <h1>MySite</h1>
          </div>
          <ul className={classes.navlinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* <div className={classes.navsearch}>
            <input type="text" placeholder="Search..." />
          </div> */}
          <div>
            <button className={classes.btn}>Login</button>
            <button className={classes.btn}>SignUp</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
