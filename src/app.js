import React from "react"
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/style.scss"
import IndecisionApp from "./components/IndecisionApp.js"

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
console.log(process.env.NODE_ENV)

ReactDOM.render(<IndecisionApp />, document.getElementById("root"))