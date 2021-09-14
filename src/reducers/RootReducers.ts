import { combineReducers } from "redux";
import fieldReducer from "./fieldReducer";
import optionReducer from "./optionReducer";
import ruleReducer from "./ruleReducer";

// Standard root reducer

const RootReducer = combineReducers({
  field: fieldReducer,
  option: optionReducer,
  rule: ruleReducer,
});

export default RootReducer;
