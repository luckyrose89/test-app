import React from "react";
import NotePage from "./NotePage";

class Notebook extends React.Component {
  state = {
    noteAdded: false,
    notebook: [
      { title: "", questionAnswer: [{ ques: "", ans: "" }], summary: "" }
    ]
  };

  handleNoteAdded = () => {
    this.setState({
      noteAdded: true
    });
  };
  handleAddNotes = () => {
    // this.setState(prevState => ({
    //   questionAnswer: [...prevState.questionAnswer, { ques: "", ans: "" }]
    // }));
  };

  handleSubmitForm = event => {
    event.preventDefault();
  };

  handleChange = () => {
    // if (["ques", "ans"].includes(event.target.className)) {
    //   let questionAnswer = [...this.state.notebook.questionAnswer];
    //   questionAnswer[event.target.dataset.id][event.target.className] =
    //     event.target.value;
    //   this.setState({ questionAnswer });
    // } else {
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   });
    // }
  };

  render() {
    const title = this.props.title;
    let { noteAdded } = this.state;

    if (noteAdded === false) {
      return (
        <div>
          <p>Hi I am just a notebook called {title}</p>
          <button onClick={this.handleNoteAdded}>Add Page</button>
        </div>
      );
    } else {
      return (
        <div>
          <NotePage
            notebookData={this.state.notebook}
            controlFunc={this.handleChange}
            submitFormFunc={this.handleSubmitForm}
            addNotesFunc={this.handleAddNotes}
          />
        </div>
      );
    }
  }
}

export default Notebook;
