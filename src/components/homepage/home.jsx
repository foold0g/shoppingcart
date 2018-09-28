import React, { Component } from "react";
import Navbar from "../navigation/navbar";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <body class="content-div">
        <Navbar />
        <div class="content-area">
          <div class="content-panel left-panel">
            <p class="col-indent">This is col1</p>
          </div>
          <div class="content-panel center-panel">
            <p class="col-indent">
              This is col2, main panel for displaying the content. it will
              occupy most of the center area where use pay more attention.
              anything inside it will resize automatically.
            </p>
          </div>
          <div class="content-panel right-panel">
            <p class="col-indent">This is col3</p>
          </div>
        </div>
      </body>
    );
  }
}

export default Homepage;
