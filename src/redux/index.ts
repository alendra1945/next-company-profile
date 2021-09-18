import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'src/redux/features';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const { NODE_ENV } = process.env;

const optionsDev = { trace: true, traceLimit: 25 };

const composeEnhancers = composeWithDevTools(optionsDev);

const store = (() => {
  return createStore(
    rootReducer(),
    NODE_ENV === 'production'
      ? applyMiddleware(thunkMiddleware)
      : composeEnhancers(applyMiddleware(thunkMiddleware))
  );
})();

export default store;
export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
