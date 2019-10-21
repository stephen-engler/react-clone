const helloWorld = (): Component => {
  return {
    type: "p",
    children: ["hello world"]
  };
};

const app = (): Component => {
  return {
    type: "div",
    children: [helloWorld]
  };
};

export interface Component {
  type: string;
  children: ((() => Component) | string)[];
}

export default app;
