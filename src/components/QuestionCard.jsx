import React from "react";
import { Link } from "react-router-dom";
import classes from "./QuestionCard.module.css"; // Adjust the import based on your styles location

const QuestionCard = ({ type, title, cardImage, desc }) => {
  return (
    <div className={classes.card} style={{ cursor: "pointer" }}>
      <Link
        to={`/questions?type=${type}&title=${title}`}
        style={{ textDecoration: "none" }}
      >
        <img src={cardImage} alt="one" />
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default QuestionCard;
