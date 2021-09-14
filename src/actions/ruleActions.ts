import { GET_RULES, ADD_RULE, LOADING_RULES } from "./types";
import { Dispatch } from "redux";
import data from "../data.json";

// Getting the rules

export const getRules = (fieldKey: String) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_RULES,
  });

  // Mapping through data to get the right field rules
  // eslint-disable-next-line array-callback-return
  data.map((field) => {
    if (field.field_key === fieldKey) {
      dispatch({
        type: GET_RULES,
        payload: field.rules,
      });
    }
  });
};

// Adding the rule
export const addRule = (rule: object) => async (dispatch: Dispatch) => {
  dispatch({
    type: ADD_RULE,
    payload: rule,
  });
};
