import {
  REQUEST_DOMAIN_STATE, RECEIVE_DOMAIN_STATE,
  BLOCKED_DOMAIN, REQUEST_DOMAIN_OWNER, RECEIVE_DOMAIN_OWNER,
} from './types';

export const requestDomainState = () => ({
  type: REQUEST_DOMAIN_STATE,
});

export const receiveDomainState = available => ({
  type: RECEIVE_DOMAIN_STATE,
  owned: !available,
});

export const requestDomainOwner = () => ({
  type: REQUEST_DOMAIN_OWNER,
});

export const receiveDomainOwner = owner => ({
  type: RECEIVE_DOMAIN_OWNER,
  owner,
});

export const blockedDomain = () => ({
  type: BLOCKED_DOMAIN,
});
