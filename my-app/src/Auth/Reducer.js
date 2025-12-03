import {
  GET_USER_REQUEST,
  GET_USER_SCCESS,
  GET_USER_SCCESS_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SCCESS,
} from "../Auth/ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SCCESS:
    case LOGIN_SCCESS:
      return { ...state, isLoading: true, error: null, jwt: action.payload };
    case GET_USER_SCCESS:
      return { ...state, isLoading: true, error: null, user: action.payload };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_SCCESS_FAILURE:
      return { ...state, isLoading: true, error: null, user: action.payload };
    case LOGOUT:
        return{...initialState}
    default:
      return state;
  }
};
