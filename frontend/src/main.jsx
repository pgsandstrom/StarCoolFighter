import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TileContainer from './tile/tileContainer';
import { createBoard } from './tile/action';

import './main.scss';

class Main extends React.Component {
  componentDidMount() {
    this.props.createBoard(3);
  }

  render() {
    return (
      <TileContainer />
    );
  }
}
Main.propTypes = {
  createBoard: PropTypes.func.isRequired,
};

export default connect(null, { createBoard })(Main);
