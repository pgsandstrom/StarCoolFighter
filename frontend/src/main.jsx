import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './tile/tile';
import HistoryView from './history/historyView';
import { createBoard } from './tile/action';

import './main.scss';

class Main extends React.Component {
  componentDidMount() {
    this.props.createBoard(3);
  }

  render() {
    return (
      <div className="grid-container">
        <div className="left-stuff">hej</div>
        <div className="hexagon-holder">
          {this.props.tiles.map(tile => <Tile key={tile.id} tile={tile} color="blue" />)}
        </div>
        <div className="menu">menu</div>
        <div className="right-stuff"><HistoryView /></div>
      </div>
    );
  }
}
Main.propTypes = {
  tiles: PropTypes.array.isRequired,
  createBoard: PropTypes.func.isRequired,
};

export default connect(state => ({ tiles: state.tileReducer.tiles }), { createBoard })(Main);
