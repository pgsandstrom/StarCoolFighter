import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './tile/tile';
import { createBoard } from './tile/action';

import './main.scss';

class Main extends React.Component {
  componentDidMount() {
    this.props.createBoard(3);
  }

  render() {
    return (
      <div>
        <div className="hexagon-holder">

          {Object.keys(this.props.tiles).map((x) => {
            console.log();
            return Object.keys(this.props.tiles[x]).map((y) => {
              console.log();
              // debugger;
              const tile = this.props.tiles[x][y];
              return <Tile key={tile.id} tile={tile} color="blue" />;
            },
            );
          })}

          {/* {this.props.tiles.map((array, x) => { */}
          {/* console.log(); */}
          {/* return array.map((tile, y) => { */}
          {/* console.log(); */}
          {/* return <Tile x={x} y={y} color="blue" />; */}
          {/* }); */}
          {/* })} */}

          {/* <Tile x={0} y={0} color="blue" /> */}
          {/* <Tile x={0} y={1} color="blue" /> */}
          {/* <Tile x={0} y={2} color="blue" /> */}
          {/* <Tile x={0} y={3} color="blue" /> */}
          {/* <Tile x={1} y={0} color="green" /> */}
          {/* <Tile x={2} y={0} color="green" /> */}
          {/* <Tile x={3} y={0} color="green" /> */}
          {/* <Tile x={1} y={1} color="red" /> */}
          {/* <Tile x={-1} y={1} color="red" /> */}
          {/* <Tile x={-2} y={1} color="red" /> */}
        </div>
      </div>
    );
  }
}
Main.propTypes = {
  tiles: PropTypes.object.isRequired,
  createBoard: PropTypes.func.isRequired,
};

export default connect(state => ({ tiles: state.tileReducer.tiles }), { createBoard })(Main);
