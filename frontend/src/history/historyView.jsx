import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HistoryView = props => (
  <div>
    {props.history.map(item => <div>HISTORY</div>)}
  </div>);
HistoryView.propTypes = {
  history: PropTypes.array.isRequired,
};

export default connect(state => ({
  history: state.tileReducer.history,
}), {

})(HistoryView);
