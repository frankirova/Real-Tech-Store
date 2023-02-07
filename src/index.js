import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import dotenv from '../node_modules/dotenv'
// require('dotenv').config()


import "bootstrap/dist/css/bootstrap.min.css";
// require('').config()
// require(dotenv).config();
// module.exports = {
//   REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
