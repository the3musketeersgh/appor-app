import React from "react";
import { Link } from "react-router-dom";
import classes from "./QuestionCard.module.css"; // Adjust the import based on your styles location

const QuestionCard = ({ type, title, cardImage, desc }) => {
  return (
    <Link to={`/questions?type=${type}`} style={{ textDecoration: "none" }}>
      <div className={classes.card} style={{ cursor: "pointer" }}>
        <img src={cardImage} alt="one" />
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
