import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { selectFleet, unselectFleet } from '../../personal/action';

import './fleet.scss';
import { DREADNAUGHT, CRUISER, SOLDIER, TRANSPORTER } from './fleetTypes';

const onClick = (props, e) => {
  e.stopPropagation();
  if (props.selected) {
    props.unselectFleet(props.fleet.id);
  } else {
    props.selectFleet(props.fleet.id);
  }
};

const getImg = (fleet) => {
  switch (fleet.type) {
    case SOLDIER: {
      return '/img/soldier.png';
    }
    case TRANSPORTER: {
      return '/img/transporter.png';
    }
    case CRUISER: {
      return '/img/destroyer.png';
    }
    case DREADNAUGHT: {
      return '/img/dreadnaught.png';
    }
    default: {
      throw new Error('unknown ship type');
    }
  }
};

const Fleet = (props) => {
  const classes = classNames({
    fleet: true,
    selected: props.selected,
  });
  return (
    <span className={classes} onClick={e => onClick(props, e)}>
      <img src={getImg(props.fleet)} />
    </span>);
};
Fleet.propTypes = {
  fleet: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  selected: PropTypes.bool.isRequired,
  selectFleet: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  unselectFleet: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};


export default connect((state, ownProps) => ({
  selected: state.personalReducer.selectedFleetsId[ownProps.fleet.id] === true,
}), {
  selectFleet,
  unselectFleet,
})(Fleet);
