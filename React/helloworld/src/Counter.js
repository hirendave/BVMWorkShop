import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.counter = this.state.counter + 1;

    this.setState({
      counter: this.state.counter
    });


    console.log("counter", this.state.counter);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Increment counter</button>
        <div>Counter value is {counter}</div>
      </div>
    );
  }
}
