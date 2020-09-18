import React from 'react';
// import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Card, Col, Row } from 'antd';

const interp = (i) => (r) =>
  `translate3d(0, ${5 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
function ColMotion(props) {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  const index = Math.floor(Math.random() * 10);
  return (
    <animated.div style={{ transform: radians.interpolate(interp(index)) }}>
      {props.children}
    </animated.div>
  );
}

const Track = (props) => {
  const { track } = props;
  // console.log(track[0]);
  return (
    <Row justify="center">
      <Col span={6}>
        <ColMotion index={1}>
          <Card
            bordered={false}
            style={{
              width: 300,
              padding: '0',
              borderRadius: 15,
            }}
            bodyStyle={{ padding: 0 }}
          >
            <img
              alt="example"
              style={{ height: 300, width: 300, borderRadius: 15 }}
              src={track[0].images[1].url}
            />
          </Card>
          <h3 style={{ color: '#FF1493', fontFamily: 'Alata' }}>
            <strong>{track[0].name}</strong>
          </h3>
          <h5
            style={{
              color: 'white',
              fontFamily: 'Alata',
            }}
          >
            {track[0].artists[0].name}
          </h5>
        </ColMotion>
      </Col>

      <Col span={6} offset={1} style={{ paddingTop: 45 }}>
        <ColMotion index={2}>
          <Card
            bordered={false}
            style={{ width: 300, padding: '0', borderRadius: 15 }}
            bodyStyle={{ padding: 0 }}
          >
            <img
              alt="example"
              style={{ height: 300, width: 300, borderRadius: 15 }}
              src={track[1].images[1].url}
            />
          </Card>
          <h3
            style={{
              color: '#FF1493',
              fontFamily: 'Alata',
            }}
          >
            <strong>{track[1].name}</strong>
          </h3>
          <h5
            style={{
              color: 'white',
              fontFamily: 'Alata',
            }}
          >
            {track[1].artists[0].name}
          </h5>
        </ColMotion>
      </Col>
      <Col span={6} offset={1}>
        <ColMotion index={3}>
          <Card
            bordered={false}
            style={{ width: 300, padding: '0', borderRadius: 15 }}
            bodyStyle={{ padding: 0 }}
          >
            <img
              alt="example"
              style={{ height: 300, width: 300, borderRadius: 15 }}
              src={track[2].images[1].url}
            />
          </Card>
          <h3
            style={{
              color: '#FF1493',
              fontFamily: 'Alata',
            }}
          >
            <strong>{track[2].name}</strong>
          </h3>
          <h5
            style={{
              color: 'white',
              fontFamily: 'Alata',
            }}
          >
            {track[2].artists[0].name}
          </h5>
        </ColMotion>
      </Col>
    </Row>
  );
};

export default Track;
