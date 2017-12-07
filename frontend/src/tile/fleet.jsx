import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { selectFleet, unselectFleet } from '../player/action';

import './fleet.scss';

const onClick = (props, e) => {
  e.stopPropagation();
  if (props.selected) {
    props.unselectFleet(props.id);
  } else {
    props.selectFleet(props.id);
  }
};

const Fleet = (props) => {
  const classes = classNames({
    fleet: true,
    selected: props.selected,
  });
  return <div className={classes} onClick={e => onClick(props, e)}><img src="/img/ship.png" /></div>;
};
Fleet.propTypes = {
  selected: PropTypes.bool.isRequired,
  selectFleet: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  unselectFleet: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};


export default connect((state, ownProps) => ({
  selected: state.playerReducer.selectedFleetsId[ownProps.id] === true,
}), {
  selectFleet,
  unselectFleet,
})(Fleet);
