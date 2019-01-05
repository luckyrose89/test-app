import React from "react";

const ViewFlashCards = props => {
  return (
    <div>
      This is where you see Flashcards for {props.title} notebook
      <button onClick={props.backHandler}>Back</button>
    </div>
  );
};

export default ViewFlashCards;
