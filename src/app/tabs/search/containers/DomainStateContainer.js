import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { parse } from 'query-string';
import { DomainStateComponent } from '../components';
import getDomainState from '../operations';

const mapStateToProps = state => ({
  domain: parse(state.router.location.search).domain || '',
  domainStateLoading: state.search.domainStateLoading,
  owned: state.search.owned,
  owner: state.search.owner,
  blocked: state.search.blocked,
  requestingOwner: state.search.requestingOwner,
  requestingCost: state.search.requestingCost,
  rifCost: state.search.rifCost,
});

const mapDispatchToProps = dispatch => ({
  getState: domain => dispatch(getDomainState(domain)),
  search: domain => dispatch(push(`/search?domain=${domain}`)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DomainStateComponent);
