import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);

export default createStore(rootReducer, enhancer);
