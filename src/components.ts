import { createElement } from "../ReactClone/ReactClone";

const Button = () =>
  createElement("button", { onClick: () => console.log("clicked") }, ["click"]);
const HelloWorld = () => createElement("p", null, ["hello world", Button]);

const app = () => {
  return createElement("div", null, [HelloWorld]);
};

export default app;
