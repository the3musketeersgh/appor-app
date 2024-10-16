import React from "react";
import classes from "./Home.module.css";
function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src="./images/bece.jpg" alt="one" />
        <div className={classes.content}>
          <h3>Card One</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos praesentium amet itaque iste omnis, recusandae cumque
            debitis, ea, magni impedit nulla unde ipsa aut assumenda eos
            pariatur veniam laboriosam?
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <img src="./images/bece.jpg" alt="one" />
        <div className={classes.content}>
          <h3>Card Two</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos praesentium amet itaque iste omnis, recusandae cumque
            debitis, ea, magni impedit nulla unde ipsa aut assumenda eos
            pariatur veniam laboriosam?
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <img src="./images/bece.jpg" alt="Three" />
        <div className={classes.content}>
          <h3>Card Three</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos praesentium amet itaque iste omnis, recusandae cumque
            debitis, ea, magni impedit nulla unde ipsa aut assumenda eos
            pariatur veniam laboriosam?
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <img src="./images/bece.jpg" alt="Four" />
        <div className={classes.content}>
          <h3>Card Four</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos praesentium amet itaque iste omnis, recusandae cumque
            debitis, ea, magni impedit nulla unde ipsa aut assumenda eos
            pariatur veniam laboriosam?
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <img src="./images/bece.jpg" alt="Five" />
        <div className={classes.content}>
          <h3>Card Five</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos praesentium amet itaque iste omnis, recusandae cumque
            debitis, ea, magni impedit nulla unde ipsa aut assumenda eos
            pariatur veniam laboriosam?
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <img src="./images/bece.jpg" alt="Six" />
        <div className={classes.content}>
          <h3>Card Six</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos praesentium amet itaque iste omnis, recusandae cumque
            debitis, ea, magni impedit nulla unde ipsa aut assumenda eos
            pariatur veniam laboriosam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
