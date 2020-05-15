import { ADD_USER } from "../constants/action-types";
import { OPEN_FORM } from "../constants/action-types";

export const addUser = (user) => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};

export const openForm = () => (dispatch) => {
  dispatch({
    type: OPEN_FORM,
  });
};
