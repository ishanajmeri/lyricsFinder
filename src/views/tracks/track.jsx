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
  return (
    <animated.div
      style={{ transform: radians.interpolate(interp(props.index)) }}
    >
      {props.children}
    </animated.div>
  );
}

const Track = (props) => {
  // const { track } = props;
  return (
    <Row justify="center">
      <Col span={6}>
        <ColMotion index={1}>
          <Card
            bordered={false}
            hoverable
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
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Card>
          <h3 style={{ color: 'white' }}>song name</h3>
        </ColMotion>
      </Col>

      <Col span={6} offset={2} style={{ paddingTop: 45 }}>
        <ColMotion index={2}>
          <Card
            bordered={false}
            hoverable
            style={{ width: 300, padding: '0', borderRadius: 15 }}
            bodyStyle={{ padding: 0 }}
          >
            <img
              alt="example"
              style={{ height: 300, width: 300, borderRadius: 15 }}
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Card>
          <h3 style={{ color: 'white' }}>song name</h3>
          <h6 style={{ color: 'white' }}>song artist</h6>
        </ColMotion>
      </Col>
      <Col span={6} offset={2}>
        <ColMotion index={3}>
          <Card
            bordered={false}
            hoverable
            style={{ width: 300, padding: '0', borderRadius: 15 }}
            bodyStyle={{ padding: 0 }}
          >
            <img
              alt="example"
              style={{ height: 300, width: 300, borderRadius: 15 }}
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Card>
          <h3 style={{ color: 'white' }}>song name</h3>
        </ColMotion>
      </Col>
    </Row>
  );
};

export default Track;
