import { ADD_LIST, DELETE_LIST, COMPLETE_LIST, EDIT_LIST } from "./actionType.js"

export const addItem = payload => {
  return {
    type: ADD_LIST,
    payload
  };
  
};

export const deleteItem = payload => {
  return {
    type: DELETE_LIST,
    payload
  };
  
};

export const completeItem = payload => {
  return {
    type: COMPLETE_LIST,
    payload
  };
  
};

export const editItem = payload => {
  return {
    type: EDIT_LIST,
    payload
  };
  
};