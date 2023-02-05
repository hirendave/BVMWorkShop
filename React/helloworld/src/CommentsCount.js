import React, { Component } from "react";
import Hoc from "./Hoc";

class CommentsCount extends Component {
  render() {
    return (
      <div>
        Total Comments : {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Add Comment!</button>
      </div>
    );
  }
}

const EnhancedComments = Hoc(CommentsCount, 10);

export default EnhancedComments;
