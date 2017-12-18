import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Fleet from './fleet/fleet';
import Planet from './planet/planet';

import { moveFleet } from './action';
import { getRelevantFleetsForTile, getTileColor } from './selector';
import { selectTile } from '../personal/action';
import { isTileReachable } from '../personal/selector';
import { getPlanetsOnLocation } from './planet/selector';

import './tile.scss';

const Tile = (props) => {
  const { tile, reachable, selected, fleets, planets } = props;
  const marginTop = `${630 + 210 * (tile.y + tile.x * 0.5)}px`;
  const marginLeft = `${560 + 210 * (tile.x * 0.85)}px`;
  let color;
  if (reachable) {
    color = 'purple';
  } else if (selected) {
    color = 'red';
  } else if(props.color) {
    color = props.color;
  } else {
    color = 'blue';
  }
  return (
    <div
      className="hexagon"
      style={{ marginTop, marginLeft }}
      onClick={(e) => { e.stopPropagation(); props.selectTile(tile.id); }}
      onContextMenu={(e) => { e.preventDefault(); props.moveFleet(tile.id); }}
    >
      <div className="hexagon-in1">
        <div className="hexagon-in2" style={{ background: color }}>
          <div className="hexagon-content">
            <div className="real-content">
              <div>
                {planets.map(planet => <Planet key={planet.id} planet={planet} />)}
              </div>
              {fleets.map(fleet => <Fleet key={fleet.id} fleet={fleet} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Tile.propTypes = {
  tile: PropTypes.object.isRequired,
  color: PropTypes.string,
  fleets: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  reachable: PropTypes.bool.isRequired,
  selectTile: PropTypes.func.isRequired,
  moveFleet: PropTypes.func.isRequired,
};

export default connect((state, ownProps) => ({
  color: getTileColor(state, ownProps.tile),
  selected: ownProps.tile.id === state.personalReducer.selectedTileId,
  reachable: isTileReachable(state, ownProps.tile.id),
  fleets: getRelevantFleetsForTile(state, ownProps.tile),
  planets: getPlanetsOnLocation(state, ownProps.tile.x, ownProps.tile.y),
}), {
  selectTile,
  moveFleet,
})(Tile);
