import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { selectFleet, unselectFleet } from './action';

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
  id: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  selectFleet: PropTypes.func.isRequired,
  unselectFleet: PropTypes.func.isRequired,
};


export default connect((state, ownProps) => ({
  selected: state.tileReducer.selectedFleetsId[ownProps.id] === true,
}), {
  selectFleet,
  unselectFleet,
})(Fleet);
