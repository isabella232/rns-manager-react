import { combineReducers } from 'redux';
import {
  OWNER, RESOLVER, TTL,
  ADD_SUBDOMAIN, RECEIVE_SUBDOMAIN_OWNER, CLEAR_SUBDOMAINS,
  REQUEST_SET_SUBDOMAIN_OWNER, RECEIVE_SET_SUBDOMAIN_OWNER, VIEW_EDIT_SUBDOMAIN_OWNER,
  REVERSE_REQUEST_GET, REVERSE_RECEIVE_GET, REVERSE_REQUEST_SET,
  REVERSE_RECEIVE_SET, REVERSE_ERROR_SET,
} from './types';
import fieldReducer from '../../factories/reducerFactory';

const subdomains = (state = [], action) => {
  switch (action.type) {
    case ADD_SUBDOMAIN: {
      return [...state, {
        label: action.label,
        owner: '...',
        viewEdit: false,
        editing: false,
      }];
    }
    case RECEIVE_SUBDOMAIN_OWNER: {
      return state.map(subdomain => (subdomain.label === action.label
        ? {
          ...subdomain,
          owner: action.owner,
        } : subdomain));
    }
    case VIEW_EDIT_SUBDOMAIN_OWNER: {
      return state.map(subdomain => (subdomain.label === action.label
        ? {
          ...subdomain,
          viewEdit: !subdomain.viewEdit,
        } : subdomain));
    }
    case REQUEST_SET_SUBDOMAIN_OWNER: {
      return state.map(subdomain => (subdomain.label === action.label
        ? {
          ...subdomain,
          editing: true,
        } : subdomain));
    }
    case RECEIVE_SET_SUBDOMAIN_OWNER: {
      return state.map(subdomain => (subdomain.label === action.label
        ? {
          ...subdomain,
          editing: false,
        } : subdomain));
    }
    case CLEAR_SUBDOMAINS: return [];
    default: return state;
  }
};

const defaultReverse = {
  hasReverse: false,
  getting: false,
  setting: false,
};

const reverse = (state = defaultReverse, action) => {
  switch (action.type) {
    case (REVERSE_REQUEST_GET): {
      return {
        ...state,
        getting: true,
      };
    }
    case (REVERSE_RECEIVE_GET): {
      return {
        ...state,
        getting: false,
        hasReverse: action.reverseResolution ? true : false,
      };
    }
    case (REVERSE_REQUEST_SET): {
      return {
        ...state,
        setting: true,
        hasReverse: false,
      };
    }
    case (REVERSE_RECEIVE_SET): {
      return {
        ...state,
        setting: false,
        hasReverse: true,
      };
    }
    case (REVERSE_ERROR_SET): {
      return {
        ...state,
        setting: false,
        hasReverse: false,
      };
    }
    default: return state;
  }
};

export default combineReducers({
  owner: fieldReducer(OWNER),
  resolver: fieldReducer(RESOLVER),
  ttl: fieldReducer(TTL),
  subdomains,
  reverse,
});
