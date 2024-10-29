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
      <QuestionCard
        type={questionType.RME5.type}
        title={questionType.RME5.title}
        desc={questionType.RME5.desc}
        cardImage={questionType.RME5.cardImage}
      />
      <QuestionCard
        type={questionType.RME6.type}
        title={questionType.RME6.title}
        desc={questionType.RME6.desc}
        cardImage={questionType.RME6.cardImage}
      />
      <QuestionCard
        type={questionType.RME7.type}
        title={questionType.RME7.title}
        desc={questionType.RME7.desc}
        cardImage={questionType.RME7.cardImage}
      />
      <QuestionCard
        type={questionType.RME8.type}
        title={questionType.RME8.title}
        desc={questionType.RME8.desc}
        cardImage={questionType.RME8.cardImage}
      />
      <QuestionCard
        type={questionType.RME9.type}
        title={questionType.RME9.title}
        desc={questionType.RME9.desc}
        cardImage={questionType.RME9.cardImage}
      />
      <QuestionCard
        type={questionType.RME10.type}
        title={questionType.RME10.title}
        desc={questionType.RME10.desc}
        cardImage={questionType.RME10.cardImage}
      />
      <QuestionCard
        type={questionType.RME11.type}
        title={questionType.RME11.title}
        desc={questionType.RME11.desc}
        cardImage={questionType.RME11.cardImage}
      />
      <QuestionCard
        type={questionType.RME12.type}
        title={questionType.RME12.title}
        desc={questionType.RME12.desc}
        cardImage={questionType.RME12.cardImage}
      />
      <QuestionCard
        type={questionType.RME13.type}
        title={questionType.RME13.title}
        desc={questionType.RME13.desc}
        cardImage={questionType.RME13.cardImage}
      />
      <QuestionCard
        type={questionType.RME14.type}
        title={questionType.RME14.title}
        desc={questionType.RME14.desc}
        cardImage={questionType.RME14.cardImage}
      />
      <QuestionCard
        type={questionType.SCI1.type}
        title={questionType.SCI1.title}
        desc={questionType.SCI1.desc}
        cardImage={questionType.SCI1.cardImage}
      />
      <QuestionCard
        type={questionType.COMP1.type}
        title={questionType.COMP1.title}
        desc={questionType.COMP1.desc}
        cardImage={questionType.COMP1.cardImage}
      />
      <QuestionCard
        type={questionType.COMP2.type}
        title={questionType.COMP2.title}
        desc={questionType.COMP2.desc}
        cardImage={questionType.COMP2.cardImage}
      />
      <QuestionCard
        type={questionType.COMP3.type}
        title={questionType.COMP3.title}
        desc={questionType.COMP3.desc}
        cardImage={questionType.COMP3.cardImage}
      />
      {/* <div className={classes.card}>
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
      </div> */}
    </div>
  );
}

export default Home;
