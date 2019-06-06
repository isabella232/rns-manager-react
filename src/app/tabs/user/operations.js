import { changeMyCryptoMetamask as changeMyCryptoMetamaskAction } from './actions';
import { logOut } from '../../auth';

export const changeMyCryptoMetamask = viewMyCrypto => dispatch => {
  dispatch(changeMyCryptoMetamaskAction(viewMyCrypto));
  if (viewMyCrypto) dispatch(logOut());

  localStorage.setItem('viewMyCrypto', viewMyCrypto ? 'true' : 'false');
};
