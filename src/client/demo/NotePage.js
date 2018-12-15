import React from "react";

const NotePage = props => {
  return props.notebook.map((val, idx) => {
    let titleId = `title-${idx}`;
    let summaryId = `summary-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={titleId}>Title</label>
        <input
          type="text"
          name={titleId}
          value={props.notebook[idx].title}
          onChange={props.controlFunc}
        />
        {props.notebook.questionAnswer.map((val, idx) => {
          let quesId = `ques-${idx}`,
            ansId = `ans-${idx}`;

          return (
            <div key={idx}>
              <label htmlFor={quesId}> Question </label>
              <input
                type="text"
                name={quesId}
                data-id={idx}
                className="ques"
                id={quesId}
                value={props.notebook[idx].questionAnswer[idx].ques}
                onChange={props.controlFunc}
              />
              <label htmlFor={ansId}> Answer </label>
              <input
                type="text"
                name={ansId}
                className="ans"
                data-id={idx}
                id={ansId}
                value={props.notebook.questionAnswer[idx].ans}
                onChange={props.controlFunc}
              />
            </div>
          );
        })}
        <input type="button" value="Add a Note" onClick={props.addNotesFunc} />
        <label htmlFor={summaryId}>Summary</label>
        <input
          type="text"
          name={summaryId}
          value={props.notebook[idx].summary}
          onChange={props.controlFunc}
        />
        <input type="submit" value="Save" onClick={props.SubmitFormFunc} />
      </div>
    );
  });
};

export default NotePage;
