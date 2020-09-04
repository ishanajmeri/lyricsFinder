import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';

const Track = (props) => {
  const { track } = props;
  return (
    <Col span={11}>
      <Card.Grid
        style={{
          width: '360px',
          height: '192px',
          borderRadius: '16px',
          marginRight: '24px',
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
        }}
      >
        <h5>{track.track_name}</h5>
        <p>
          <strong>Track</strong>:{track.artist_name}
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
