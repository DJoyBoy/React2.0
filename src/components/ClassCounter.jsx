import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.plass = this.plass.bind(this);
    this.delate = this.delate.bind(this);
  }

  plass() {
    this.setState({ count: this.state.count + 1 });
  }

  delate() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.plass}>+</button>
        <button onClick={this.delate}>-</button>
      </div>
    );
  }
}

export default ClassCounter;
