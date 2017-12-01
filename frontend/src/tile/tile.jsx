import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Fleet from './fleet';

import { selectTile } from './action';
import { isTileReachable } from './selector';

import './tile.scss';

const Tile = (props) => {
  const marginTop = `${500 + 210 * (props.y + props.x * 0.5)}px`;
  const marginLeft = `${700 + 210 * (props.x * 0.85)}px`;
  let color;
  if (props.reachable) {
    color = 'purple';
  } else if (props.selected) {
    color = 'red';
  } else {
    color = props.color;
  }
  return (
    <div className="hexagon" style={{ marginTop, marginLeft }} onClick={() => props.selectTile(props.id)}>
      <div className="hexagon-in1">
        <div className="hexagon-in2" style={{ background: color }}>
          <div className="hexagon-content">
            {props.fleets.map(fleet => <Fleet key={fleet.id} id={fleet.id} />)}
            {/* <div className="fleet"> */}
            {/* {props.x}.{props.y} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
Tile.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  fleets: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  reachable: PropTypes.bool.isRequired,
  selectTile: PropTypes.func.isRequired,
};

export default connect((state, ownProps) => ({
  selected: ownProps.id === state.tileReducer.selectedTileId,
  reachable: isTileReachable(state, ownProps.id),
}), {
  selectTile,
})(Tile);
