const errorReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  let message = payload ? payload.message : '';
  return {
    ...state,
    // Store errorMessage
    // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
    //      else clear errorMessage when receiving GET_TODOS_REQUEST
    [requestName]: requestState === 'FAILURE' ? message : '',
  };
};

// api/selectors.js
const createErrorMessageSelector =
  (...actions: string[]) =>
  (state) => {
    // returns the first error messages for actions
    // * We assume when any request fails on a page that
    //   requires multiple API calls, we shows the first error
    const errors = actions.map((action) => state.error[action]);
    if (errors && errors[0]) {
      return errors[0];
    }
    return '';
  };

export { errorReducer, createErrorMessageSelector };
