import {
  GET_TRANSACTIONS,
  NEW_TRANSACTION,
  SET_LOADING,
  TRANSACTION_ERROR,
} from '../actions/types.js';

const initialState = {
  transactions: null,
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case NEW_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    default:
      return state;
  }
}
