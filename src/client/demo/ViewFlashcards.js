import React from "react";

class ViewFlashCards extends React.Component {
  state = {
    counter: 0
  };

  // handleNext = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // };

  render() {
    let quesAns = this.props.notebook.map(item => item.questionAnswer);
    let queryArray = [].concat.apply([], quesAns);
    let { counter } = this.state;
    return (
      <div>
        This is where you see Flashcards for {this.props.title} notebook
        <p>Click the Card to View Answer</p>
        <div>{queryArray[counter].ques}</div>
        <div>
          <button>next</button>
          <button>previous</button>
        </div>
        <button onClick={this.props.backHandler}>Back</button>
      </div>
    );
  }
}

export default ViewFlashCards;
