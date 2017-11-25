import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  const marginTop = `${500 + 210 * (props.y + props.x * 0.5)}px`;
  const marginLeft = `${700 + 210 * (props.x * 0.85)}px`;
  const color = props.color;
  return (
    <div className="hexagon" style={{ marginTop, marginLeft }}>
      <div className="hexagon-in1">
        <div className="hexagon-in2" style={{ background: color }}>
          <div className="hexagon-content">
            {/*<Fleet />*/}
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
};

const Fleet = () => <div className="fleet">fleet</div>;

export default Tile;
