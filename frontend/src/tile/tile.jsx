import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectTile } from './action';

import './tile.scss';

const Tile = (props) => {
  const marginTop = `${500 + 210 * (props.y + props.x * 0.5)}px`;
  const marginLeft = `${700 + 210 * (props.x * 0.85)}px`;
  let color;
  if (props.selected) {
    color = 'red';
  } else {
    color = props.color;
  }
  return (
    <div className="hexagon" style={{ marginTop, marginLeft }} onClick={() => props.selectTile(props.x, props.y)}>
      <div className="hexagon-in1">
        <div className="hexagon-in2" style={{ background: color }}>
          <div className="hexagon-content">
            {/* <Fleet /> */}
            <div className="fleet">
              {props.x}, {props.y}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Tile.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  selectTile: PropTypes.func.isRequired,
};

export default connect((state, ownProps) => ({
  selected: ownProps.x === state.tileReducer.selectedTile.x && ownProps.y === state.tileReducer.selectedTile.y,
}), {
  selectTile,
})(Tile);
