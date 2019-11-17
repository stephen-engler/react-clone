import { createElement } from "../ReactClone/ReactClone";
import { Component } from "../ReactClone/Types";
declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
  namespace JSX {
    export interface IntrinsicElements {
      [elemName: string]: any;
      props: any;
      children: any;
    }
  }
}

const Button = () =>
  createElement("button", { onClick: () => console.log("clicked") }, ["click"]);
const HelloWorld = () => createElement("p", null, ["hello world", Button]);

const MyButton = () => {
  return <button>click me!!</button>;
};

//const App = () => createElement("div", null, [HelloWorld]);
const App = () => {
  return (
    <div>
      <p>HELLO</p>
      <p>test</p>
    </div>
  );
};
export default App;
