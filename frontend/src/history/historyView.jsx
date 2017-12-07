import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectHistory } from '../tile/action';

const HistoryView = props => (
  <div>
    <button onClick={() => props.selectHistory()}>Clear history meck</button>
    {props.history.map(item => <HistoryItem key={item.id} item={item} selectHistory={props.selectHistory} />)}
  </div>);
HistoryView.propTypes = {
  history: PropTypes.array.isRequired,
  selectHistory: PropTypes.func.isRequired,
};

const HistoryItem = (props) => {
  const button = props.item.selected ? <span>SHOWING</span> : <button onClick={() => props.selectHistory(props.item.id)}>Show</button>;
  return <div>{button}{props.item.type}</div>;
};
HistoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectHistory: PropTypes.func.isRequired,
};

export default connect(state => ({
  history: state.tileReducer.history,
}), {
  selectHistory,
})(HistoryView);
