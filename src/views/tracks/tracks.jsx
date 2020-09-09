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
      <Card bordered={false} style={{ backgroundColor: '#7b7b7b' }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          <strong>
            <Zoom>Recent Release</Zoom>
          </strong>
        </h1>
        <Consumer>
          {(value) => {
            const { track_list } = value;
            // console.log(track_list);
            if (track_list === undefined || track_list.length === 0) {
              return <Loading />;
            } else {
              return (
                <React.Fragment>
                  <Card bordered={false} style={{ backgroundColor: '#7b7b7b' }}>
                    {/* <Row> */}
                    {/* {track_list.map((item) => (
                        <Track key={item.track.track_id} track={item.track} />
                      ))} */}
                    <Track />
                    {/* </Row> */}
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
