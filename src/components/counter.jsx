import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  //   constructor() {
  //     super();
  //     this.incrementCounter = this.incrementCounter.bind(this);
  //   }
  render() {
    return (
      <div>
        <label>Enter a tag: </label>
        <input id="newTag" type="text" />
        <button onClick={this.incrementCounter}>Increment</button>
        <h4>{this.state.value}</h4>
        <ul>
          {this.state.tags.map(str => (
            <li key={str}>{str}</li>
          ))}
        </ul>
      </div>
    );
  }
  incrementCounter = () => {
    let shoppingItem = document.getElementById("newTag").value;
    this.setState({
      count: this.state.value + 1,
      tags: this.state.tags.concat(shoppingItem)
    });
  };
}
export default Counter;
