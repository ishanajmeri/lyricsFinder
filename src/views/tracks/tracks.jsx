import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './track';
import { Card, Typography, Row } from 'antd';
import Loading from './components/loading';
import Zoom from 'react-reveal/Zoom';

const { Title } = Typography;
class Tracks extends Component {
  state = {};
  render() {
    return (
      <Card bordered={false} style={{ backgroundColor: 'black' }}>
        <Title level={3} style={{ textAlign: 'center', color: 'white' }}>
          <Zoom>Recent Release</Zoom>
        </Title>
        <Consumer>
          {(value) => {
            const { track_list } = value;
            // console.log(track_list);
            if (track_list === undefined || track_list.length === 0) {
              return <Loading />;
            } else {
              return (
                <React.Fragment>
                  <Card bordered={false}>
                    <Row>
                      {/* {track_list.map((item) => (
                        <Track key={item.track.track_id} track={item.track} />
                      ))} */}
                    </Row>
                  </Card>
                </React.Fragment>
              );
            }
          }}
        </Consumer>
      </Card>
    );
  }
}

export default Tracks;
