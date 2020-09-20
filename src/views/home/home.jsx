import React from 'react';
import Tracks from '../tracks/tracks';
import Artists from './components/artists';
import TopImages from './components/topimages/TopImages';
import MasonryGrid from './components/MasonryGrid/MasonryGrid';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <TopImages />
        <Tracks />
        <Artists />
        <MasonryGrid />
      </div>
    );
  }
}

export default Home;
