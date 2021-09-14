import { GET_FIELDS, ADD_FIELD, LOADING_FIELDS } from "./types";
import { Dispatch } from "redux";
import data from "../data.json";

// Getting fields

export const getFields = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_FIELDS,
  });

  dispatch({
    type: GET_FIELDS,
    payload: data,
  });
};

// Adding Fields

export const addField = (field: object) => async (dispatch: Dispatch) => {
  dispatch({
    type: ADD_FIELD,
    payload: field,
  });
};
