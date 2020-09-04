import {
  PORTFOLIO_ERROR,
  PORTFOLIO_LOADED,
  SET_LOADING,
  CLEAR_PORTFOLIO,
  CREATE_ACCOUNT,
  ACCOUNT_ERROR,
  CLEAR_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
};

export default function(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case PORTFOLIO_LOADED:
      return {
        ...state,
        details: payload,
        email: payload.email,
        accounts: payload.accounts,
        loading: false,
        error: null,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, payload],
        loading: false,
      };
    case PORTFOLIO_ERROR:
    case CLEAR_PORTFOLIO:
      localStorage.removeItem('token');
      return {
        user: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ACCOUNT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
