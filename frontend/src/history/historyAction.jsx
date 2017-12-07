import React from 'react';
import PropTypes from 'prop-types';
import { MOVE_FLEET } from '../tile/reducer';

const HistoryAction = (props) => {
  if (props.action.type === MOVE_FLEET) {
    return <div>omg le move</div>;
  } else {
    return <div>unknown action</div>;
  }
};
HistoryAction.propTypes = {
  action: PropTypes.object.isRequired,
};

export default HistoryAction;
