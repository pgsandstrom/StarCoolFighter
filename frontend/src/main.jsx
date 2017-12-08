import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TileContainer from './tile/tileContainer';
import { startGame } from './tile/action';
import { addPlayer } from './player/action';

import './main.scss';
import { startPositions } from './tile/selector';

class Main extends React.Component {
  componentDidMount() {
    if (this.props.tiles.length === 0) {
      this.props.startGame();
      startPositions.forEach((startPosition) => {
        this.props.addPlayer(startPosition.x, startPosition.y, 'X1Y1');
      });
    }
  }

  render() {
    return (
      <TileContainer />
    );
  }
}

Main.propTypes = {
  tiles: PropTypes.array.isRequired,
  startGame: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default connect(state => ({
  tiles: state.tileReducer.tiles,
}), {
 startGame,
  addPlayer,
})(Main);
