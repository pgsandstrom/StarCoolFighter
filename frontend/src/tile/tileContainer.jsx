import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './tile';
import HistoryView from '../history/historyView';
import { } from './action';

import './tileContainer.scss';
import { getRelevantTiles } from './selector';

const TileContainer = (props) => {
  return (
    <div className="grid-container">
      <div className="left-stuff">hej</div>
      <div className="hexagon-holder">
        {props.tiles.map(tile => <Tile key={tile.id} tile={tile} color="blue" />)}
      </div>
      <div className="menu">menu</div>
      <div className="right-stuff"><HistoryView /></div>
    </div>
  );
};
TileContainer.propTypes = {
  tiles: PropTypes.array.isRequired,
};

export default connect(state => ({ tiles: getRelevantTiles(state) }), { })(TileContainer);
