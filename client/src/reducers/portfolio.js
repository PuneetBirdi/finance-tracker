import {
  PORTFOLIO_ERROR,
  PORTFOLIO_LOADED,
  SET_LOADING,
  CLEAR_PORTFOLIO,
  CREATE_ACCOUNT,
  ACCOUNT_ERROR,
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
        totalValue: payload.totalValue,
        id: payload._id,
        email: payload.email,
        accounts: payload.accounts,
        history: payload.history,
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
    case ACCOUNT_ERROR:
      localStorage.removeItem('token');
      return {
        user: null,
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
