import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return <h1>Welcome to the world of React</h1>;
  }
}

/*
JSX is short hand for react.createElement
React.createElement(
  type,
  [props],
  [...children]
)
*/