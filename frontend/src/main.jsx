import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TileContainer from './tile/tileContainer';
import { quickStartGame } from './game/action';

import './main.scss';

class Main extends React.Component {
  componentDidMount() {
    if (this.props.tiles.length === 0) {
      this.props.quickStartGame();
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
  quickStartGame: PropTypes.func.isRequired,
};

export default connect(state => ({
  tiles: state.tileReducer.tiles,
}), {
  quickStartGame,
})(Main);
