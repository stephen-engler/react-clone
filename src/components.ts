import { createElement } from "../ReactClone/ReactClone";
import { Component } from "../ReactClone/Types";

const Button = () =>
  createElement("button", { onClick: () => console.log("clicked") }, ["click"]);
const HelloWorld = () => createElement("p", null, ["hello world", Button]);

//const App = () => createElement("div", null, [HelloWorld]);

export default App;
