import React from "react";

const ViewNotes = props => {
  return (
    <div>
      This is where you see the notes
      <button onClick={props.backHandler}>Back</button>
    </div>
  );
};

export default ViewNotes;
