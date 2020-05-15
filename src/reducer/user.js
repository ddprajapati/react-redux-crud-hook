import { ADD_USER } from "../constants/action-types";
import { UPDATE_USER } from "../constants/action-types";
import { DELETE_USER } from "../constants/action-types";

import { OPEN_FORM } from "../constants/action-types";
import { CLOSE_FORM } from "../constants/action-types";
import { OPEN_EDIT_FORM } from "../constants/action-types";
import { CLOSE_EDIT_FORM } from "../constants/action-types";

const initialState = {
  //Read
  users: [
    {
      id: 1, //:TODO uuid need to use
      name: "Dilip Prajapati",
      role: "Partner",
      created: "10/11/2019",
      status: "inactive",
    },
    {
      id: 2,
      name: "Sagar Valad",
      role: "Admin",
      created: "12/11/2019",
      status: "active",
    },
    {
      id: 3,
      name: "Tarak Mehta",
      role: "Partner",
      created: "12/11/2019",
      status: "active",
    },
  ],
  uiState: {
    openFormDialog: false,
    openEditDialog: false,
    userToEdit: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case OPEN_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: true,
        },
      };

    case CLOSE_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: false,
        },
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id !== action.payload.id) {
            return user;
          } else {
            return { ...user, ...action.payload };
          }
        }),
      };

    case OPEN_EDIT_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: true,
          userToEdit: action.payload,
        },
      };

    case CLOSE_EDIT_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: false,
        },
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};
