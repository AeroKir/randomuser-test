function createAction(type, ...argNames) {
  const actionCreator = (...args) => {
    const action = {
      type,
      payload: {},
    };
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
    return action;
  };
  actionCreator.type = type;
  return actionCreator;
}

export default createAction;
