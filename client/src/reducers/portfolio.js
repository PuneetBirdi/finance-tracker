import {
  PORTFOLIO_ERROR,
  PORTFOLIO_LOADED,
  SET_LOADING,
  CLEAR_PORTFOLIO,
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
    case PORTFOLIO_ERROR:
    case CLEAR_PORTFOLIO:
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
