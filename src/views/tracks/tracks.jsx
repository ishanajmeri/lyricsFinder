import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './track';
import _ from 'lodash';
import { Card, Typography, Row } from 'antd';
import Loading from './components/loading';
import Zoom from 'react-reveal/Zoom';

const { Title } = Typography;
class Tracks extends Component {
  state = {};
  render() {
    return (
      <Card bordered={false} style={{ backgroundColor: '#282828' }}>
        <h1 style={{ textAlign: 'center', color: 'white',fontWeight:1000 }}>
          <strong>
            <Zoom>Recent Release</Zoom>
          </strong>
        </h1>
        <Consumer>
          {(value) => {
            const { track_list } = value;
            // console.log(track_list);
            const data = _.chunk(track_list, 3);
            // console.log(data);
            if (track_list === undefined || track_list.length === 0) {
              return <Loading />;
            } else {
              return (
                <React.Fragment>
                  <Card bordered={false} style={{ backgroundColor: '#282828' }}>
                    {/* <Row> */}
                    {data.map((item, index) => (
                      <Track key={index} track={item} />
                    ))}
                    {/* <Track /> */}
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
