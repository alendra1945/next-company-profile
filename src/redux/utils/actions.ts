// Actions Utils
export const createAction = (actionName: string) => {
  function _actionFn(payload: any) {
    return {
      type: actionName,
      payload,
    };
  }
  _actionFn.type = actionName;
  return _actionFn;
};

export const createAsyncAction = (actionName: string, fn: any) => {
  fn.type = actionName;
  return fn;
};

export const actionSuccess = (actionName: string) => `${actionName}_SUCCESS`;
export const actionFailure = (actionName: string) => `${actionName}_FAILURE`;
