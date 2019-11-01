let globalState: any;

const useState = (initialValue: any) => {
  const setGlobalState = (newState: any) => [(globalState = newState)];

  return [globalState, setGlobalState];
};

export default useState;
