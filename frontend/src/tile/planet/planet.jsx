import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { selectPlanet } from '../../player/action';

import './planet.scss';

const planetRightClick = (e) => {

};

const Planet = (props) => {
  const classes = classNames({
    fleet: true,
    selected: props.selected,
  });
  return (
    <span className={classes} onClick={() => props.selectPlanet(props.planet.id)} onContextMenu={() => planetRightClick()}>
      <img src="/img/planet1.png" />
    </span>
  );
};
Planet.propTypes = {
  planet: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  selectPlanet: PropTypes.func.isRequired,
};

export default connect((state, ownProps) => ({
  selected: state.playerReducer.selectedPlanetId === ownProps.planet.id,
}), {
  selectPlanet,
})(Planet);
