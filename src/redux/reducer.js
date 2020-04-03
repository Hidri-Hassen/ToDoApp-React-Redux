import {
  ADD_LIST,
  DELETE_LIST,
  COMPLETE_LIST,
  EDIT_LIST
} from "./actionType.js";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
     
    case DELETE_LIST:
      return state.filter((el, i) => i !== action.payload);

    case COMPLETE_LIST:
      return state.map((el, i) =>
        i === action.payload ? { ...el, done: !el.done } : el
      );
      
    case EDIT_LIST:
      return state.map((el, i) =>
        el.id === action.payload.id ? { ...el, todo: action.payload.todo } : el
      );
    default:
      return state;
  }
};
export default reducer;