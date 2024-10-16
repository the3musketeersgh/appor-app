import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <div className={classes.layout}>
      {/* <Header /> */}
      <MainNavigation />
      <div className={classes.maincontent}>
        {/* <Sidebar /> */}
        <div className={classes.content}>{children}</div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
