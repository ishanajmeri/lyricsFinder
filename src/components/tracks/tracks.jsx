import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './track';
import { Card, Typography, Row } from 'antd';

const { Title } = Typography;
class Tracks extends Component {
  state = {};
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            const { track_list, heading } = value;
            if (track_list === undefined || track_list.length === 0) {
              return;
            } else {
              return (
                <React.Fragment>
                  <Card bordered={false}>
                    <Title level={3} style={{ textAlign: 'center' }}>
                      {heading}
                    </Title>
                    <Row>
                      {track_list.map(item => (
                        <Track key={item.track.track_id} track={item.track} />
                      ))}
                    </Row>
                  </Card>
                </React.Fragment>
              );
            }
          }}
        </Consumer>
      </div>
    );
  }
}

export default Tracks;
