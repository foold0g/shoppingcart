import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./components/homepage/home";
ReactDOM.render(<Homepage />, document.getElementById("root"));
registerServiceWorker();
