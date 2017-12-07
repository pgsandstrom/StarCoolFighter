import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Fleet from './fleet';

import { selectTile } from './action';
import { isTileReachable, getRelevantFleetsForTile } from './selector';

import './tile.scss';

const Tile = (props) => {
  const { tile, reachable, selected, fleets } = props;
  const marginTop = `${630 + 210 * (tile.y + tile.x * 0.5)}px`;
  const marginLeft = `${560 + 210 * (tile.x * 0.85)}px`;
  let color;
  if (reachable) {
    color = 'purple';
  } else if (selected) {
    color = 'red';
  } else {
    color = props.color;
  }
  return (
    <div className="hexagon" style={{ marginTop, marginLeft }} onClick={() => props.selectTile(tile.id)}>
      <div className="hexagon-in1">
        <div className="hexagon-in2" style={{ background: color }}>
          <div className="hexagon-content">
            {fleets.map(fleet => <Fleet key={fleet.id} id={fleet.id} />)}
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
  tile: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  fleets: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  reachable: PropTypes.bool.isRequired,
  selectTile: PropTypes.func.isRequired,
};

export default connect((state, ownProps) => ({
  selected: ownProps.tile.id === state.tileReducer.selectedTileId,
  reachable: isTileReachable(state, ownProps.tile.id),
  fleets: getRelevantFleetsForTile(state, ownProps.tile),
}), {
  selectTile,
})(Tile);
