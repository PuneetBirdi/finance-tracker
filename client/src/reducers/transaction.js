import {
  GET_TRANSACTIONS,
  NEW_TRANSACTION,
  SET_LOADING,
  TRANSACTION_ERROR,
  CLEAR_ERROR,
} from '../actions/types.js';

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case NEW_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions,],
        loading: false,
        error: null,
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: [...payload],
        loading: false,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
