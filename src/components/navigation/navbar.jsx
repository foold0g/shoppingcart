import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
