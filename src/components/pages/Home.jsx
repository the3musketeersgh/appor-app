import React from "react";
import classes from "./Home.module.css";
import QuestionCard from "../QuestionCard";
import questionType from "../../data/questionType";
function Home() {
  return (
    <div className={classes.container}>
      <QuestionCard
        type={questionType.RME1.type}
        title={questionType.RME1.title}
        desc={questionType.RME1.desc}
        cardImage={questionType.RME1.cardImage}
      />
      <QuestionCard
        type={questionType.RME2.type}
        title={questionType.RME2.title}
        desc={questionType.RME2.desc}
        cardImage={questionType.RME2.cardImage}
      />
      <QuestionCard
        type={questionType.RME3.type}
        title={questionType.RME3.title}
        desc={questionType.RME3.desc}
        cardImage={questionType.RME3.cardImage}
      />
      <QuestionCard
        type={questionType.RME4.type}
        title={questionType.RME4.title}
        desc={questionType.RME4.desc}
        cardImage={questionType.RME4.cardImage}
      />
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
