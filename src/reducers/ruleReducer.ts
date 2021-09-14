import { GET_RULES, ADD_RULE, LOADING_RULES } from "../actions/types";

interface DefaultState {
  rules: string[];
  loading: boolean;
}

const defaultState: DefaultState = {
  rules: [],
  loading: false,
};

const ruleReducer = (
  state: DefaultState = defaultState,
  action: any
): DefaultState => {
  switch (action.type) {
    // Returning all rules
    case GET_RULES:
      return {
        ...state,
        rules: action.payload,
        loading: false,
      };

    // Returning all rules + added rule
    case ADD_RULE:
      console.log(state);
      return {
        ...state,
        rules: [...state.rules, action.payload],
      };

    // Loading all rules
    case LOADING_RULES:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default ruleReducer;
