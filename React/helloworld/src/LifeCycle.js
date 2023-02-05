import React from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {counter: props.initialCounter };
  }

  shouldComponentUpdate() {
    return false;
  }


  componentDidMount() {
    //Normally used for API call
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
