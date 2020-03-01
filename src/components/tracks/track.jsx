import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';

const Track = props => {
  const { track } = props;
  return (
    <Col span={11}>
      <Card.Grid style={{ width: '100%' }}>
        <h5>{track.artist_name}</h5>
        <p>
          <strong>Track</strong>:{track.track_name}
          <br />
          <strong>Album</strong>: {track.album_name}
        </p>
        <Link
          to={`lyrics/track/${track.track_id}`}
          className="btn btn-dark btn-block"
        >
          View Lyrics
        </Link>
      </Card.Grid>
    </Col>
  );
};

export default Track;
