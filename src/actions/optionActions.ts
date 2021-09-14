import {
  GET_OPTIONS,
  ADD_OPTION,
  DELETE_OPTION,
  LOADING_OPTIONS,
} from "./types";
import { Dispatch } from "redux";
import data from "../data.json";

// Getting options

export const getOptions = (fieldKey: String) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_OPTIONS,
  });

  // Mapping through data to get the correct field options
  // eslint-disable-next-line array-callback-return
  data.map((field) => {
    if (field.field_key === fieldKey) {
      dispatch({
        type: GET_OPTIONS,
        payload: field.options,
      });
    }
  });
};

// Adding an option

export const addOption = (option: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: ADD_OPTION,
    payload: option,
  });
};

// Deleting an option

export const deleteOption = (i: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_OPTION,
    payload: { index: i },
  });
};
