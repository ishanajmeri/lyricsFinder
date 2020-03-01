import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './track';
import { SyncOutlined } from '@ant-design/icons';
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
              return (
                <SyncOutlined
                  style={{
                    padding: '160px',
                    fontSize: '50px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              );
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
