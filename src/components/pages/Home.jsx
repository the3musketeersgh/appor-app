import React from "react";
import classes from "./Home.module.css";
import QuestionCard from "../ui/QuestionCard";
import questionType from "../../data/questionType";
function Home() {
  return (
    <div className={classes.container}>
      {questionType.map((question) => (
        <QuestionCard
          key={question.type}
          type={question.type}
          title={question.title}
          desc={question.desc}
          cardImage={question.cardImage}
        />
      ))}
    </div>
  );
}

export default Home;
