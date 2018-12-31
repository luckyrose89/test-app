import React from "react";
import NotePage from "./NotePage";
import { navigate } from "@reach/router";

class Notebook extends React.Component {
  state = {
    title: this.props.location.state.title,
    visible: true,
    pageCount: 0,
    notebook: [
      { title: "", questionAnswer: [{ ques: "", ans: "" }], summary: "" }
    ]
  };

  handleNoteAdded = () => {
    this.setState({
      visible: false
    });
  };
  handleAddNotes = () => {
    let notebookCopy = this.state.notebook.slice();
    let id = this.state.pageCount;
    notebookCopy[id].questionAnswer.push({ ques: "", ans: "" });
    this.setState({
      notebook: notebookCopy
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.setState({
      pageCount: this.state.pageCount + 1,
      visible: true
    });
  };

  handleChange = () => {
    let notebookCopy = this.state.notebook.slice();
    let id = this.state.pageCount;
    if (["ques", "ans"].includes(event.target.className)) {
      let questionAnswer = notebookCopy[id].questionAnswer;
      questionAnswer[event.target.dataset.id][event.target.className] =
        event.target.value;
      this.setState({ notebook: notebookCopy });
    } else {
      notebookCopy[id][event.target.name] = event.target.value;
      this.setState({ notebook: notebookCopy });
    }
  };

  handleViewNotes = () => {
    navigate("notebook/viewnote");
  };

  render() {
    let { title, visible, pageCount } = this.state;
    const addPage = <button onClick={this.handleNoteAdded}>Add Page</button>;
    const viewNotes = (
      <button onClick={this.handleViewNotes}>View Notes</button>
    );
    const createFlashCards = (
      <button onClick={this.handleCreateFlashCards}>Create Flashcards</button>
    );
    // const viewFlashCards = <button onClick={this.handleViewFlashCards}>View Flashcards</button>;
    if (visible === true) {
      return (
        <div>
          <p>Hi I am just a notebook called {title}</p>
          {pageCount > 0 ? (
            <div>
              {viewNotes}
              {createFlashCards}
            </div>
          ) : (
            addPage
          )}
        </div>
      );
    } else {
      return (
        <div>
          <NotePage
            notebookData={this.state.notebook[pageCount]}
            controlFunc={this.handleChange}
            addNotesFunc={this.handleAddNotes}
          />
          <input type="submit" value="Save" onClick={this.handleSubmitForm} />
        </div>
      );
    }
  }
}

export default Notebook;
