import { createElement } from "./index";
const Button = () =>
  createElement("button", { onClick: () => console.log("clicked") }, ["click"]);
const HelloWorld = () => createElement("p", null, ["hello world", Button]);

// const helloWorld = (): Component => {
//   return {
//     type: "p",
//     children: ["hello world"]
//   };
// };

const button = (): Component => {
  return {
    type: "button",
    children: ["Click Me!!!!"],
    props: function onClick() {
      console.log("clicked");
    }
  };
};

const App = () => createElement("div", null, [HelloWorld]);

export interface Component {
  type: string;
  children: ((() => Component) | string)[];
  props?: any;
}

export default App;
// const app:any = ():any => {
//   return (
//     <div>
//       <HelloWorld />
//     </div>
//   );
// };
