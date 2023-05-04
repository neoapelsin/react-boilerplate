import axios from 'axios';
import { parallel, reflect, reflectAll } from 'async';

import { 
  SET_CALCULATED_LAYOUT, 
  RESET_STATE,
  BOOK_FORM, 
} from "./types";

import _ from 'lodash';


export const bookForm = (id, open) => async (dispatch, getState) => {
  const state = getState().mainState;
  const book_forms = state.book_forms;
  let i = _.findIndex(book_forms, (x)=>{return x.id === id});
  if (i !== -1) {
    book_forms[i].open = open;
  }
  dispatch({
    type: BOOK_FORM,
    payload: {
      book_forms: book_forms
    }
  });
  
}

export const resetState = (payload) => (dispatch, getState) => {
  try {
    dispatch({
      type: RESET_STATE,
      payload: payload,
    });
  } catch (error) {
    console.log("Error", error);
  }
};


export const updateCalculatedLayout = (lt) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_CALCULATED_LAYOUT,
      payload: {
        lt: lt,
        errMessage: ""
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
