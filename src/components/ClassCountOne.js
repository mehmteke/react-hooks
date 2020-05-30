import React, { Component } from "react";

class ClassCountOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {" "}
          Click {this.state.count} times
        </button>
        <h2>{JSON.stringify(this.state.count)}</h2>
      </div>
    );
  }
}

export default ClassCountOne;
