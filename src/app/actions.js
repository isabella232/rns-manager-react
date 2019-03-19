import { ADD_TRANSACTION_ERROR, REMOVE_TRANSACTION_ERROR, ADD_TRANSACTION_CONFIRMED, TRANSACTION_MINED } from './types';

export const addTxError = message => ({
  type: ADD_TRANSACTION_ERROR,
  message
});

export const removeTxError = errorId => ({
  type: REMOVE_TRANSACTION_ERROR,
  errorId
});

export const addTxConfirmed = txHash => ({
  type: ADD_TRANSACTION_CONFIRMED,
  txHash
});

export const txMined = txHash => ({
  type: TRANSACTION_MINED,
  txHash
});