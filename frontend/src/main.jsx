import React from 'react';
import PropTypes from 'prop-types';

import './main.scss';

const Main = () =>
  (<div>
    <div className="hexagon-holder">
      <Hexagon x={0} y={0} color="blue" />
      <Hexagon x={0} y={1} color="blue" />
      <Hexagon x={0} y={2} color="blue" />
      <Hexagon x={0} y={3} color="blue" />
      <Hexagon x={1} y={0} color="green" />
      <Hexagon x={2} y={0} color="green" />
      <Hexagon x={3} y={0} color="green" />
      <Hexagon x={1} y={1} color="red" />
      <Hexagon x={-1} y={1} color="red" />
      <Hexagon x={-2} y={1} color="red" />
    </div>
  </div>);

const Hexagon = (props) => {
  const marginTop = `${500 + (210 * (props.y + (props.x * 0.5)))}px`;
  const marginLeft = `${500 + (210 * (props.x * 0.85))}px`;
  const color = props.color;
  return (
    <div className="container" style={{ marginTop, marginLeft }}>
      <div className="hexagon">
        <div className="hexagon-in1">
          <div className="hexagon-in2" style={{ background: color }} >
            <Fleet />
          </div>
        </div>
      </div>
    </div>);
};
Hexagon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const Fleet = () => <div>fleet</div>


export default Main;
