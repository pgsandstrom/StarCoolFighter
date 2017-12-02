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
          {this.props.tiles.map(tile => <Tile key={tile.id} tile={tile} color="blue" />)}
        </div>
      </div>
    );
  }
}
Main.propTypes = {
  tiles: PropTypes.array.isRequired,
  createBoard: PropTypes.func.isRequired,
};

export default connect(state => ({ tiles: state.tileReducer.tiles }), { createBoard })(Main);
