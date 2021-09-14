import {
  GET_OPTIONS,
  ADD_OPTION,
  DELETE_OPTION,
  LOADING_OPTIONS,
} from "../actions/types";

interface DefaultState {
  options: string[];
  loading: boolean;
}

const defaultState: DefaultState = {
  options: [],
  loading: false,
};

const optionReducer = (
  state: DefaultState = defaultState,
  action: any
): DefaultState => {
  switch (action.type) {
    // Returning all options
    case GET_OPTIONS:
      return {
        ...state,
        options: action.payload,
        loading: false,
      };

    // Returning all options + added option
    case ADD_OPTION:
      return {
        ...state,
        options: [...state.options, action.payload],
      };

    // Loading all options
    case LOADING_OPTIONS:
      return {
        ...state,
        loading: true,
      };

    // Deleting an option
    case DELETE_OPTION:
      return {
        ...state,
        options: state.options.filter(
          (option, i) => i !== action.payload.index
        ),
      };

    default:
      return state;
  }
};

export default optionReducer;
