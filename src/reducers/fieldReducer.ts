import { GET_FIELDS, ADD_FIELD, LOADING_FIELDS } from "../actions/types";

interface DefaultState {
  fields: string[];
  loading: boolean;
}

const defaultState: DefaultState = {
  fields: [],
  loading: false,
};

const fieldReducer = (
  state: DefaultState = defaultState,
  action: any
): DefaultState => {
  switch (action.type) {
    // Returning all the fields
    case GET_FIELDS:
      return {
        ...state,
        fields: action.payload,
        loading: false,
      };

    // Returning the fields + the added field
    case ADD_FIELD:
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };

    // Loading the fields
    case LOADING_FIELDS:
      return {
        ...state,
        loading: true,
      };

    // Default
    default:
      return state;
  }
};

export default fieldReducer;
