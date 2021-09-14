import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/RootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux Store

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;

export type RootState = ReturnType<typeof RootReducer>;
