import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';

const Track = (props) => {
  const { track } = props;
  return (
    <Row justify="center">
      <Col span={6}>
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
      </Col>
      <Col span={6} offset={2} style={{ paddingTop: 45 }}>
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
      </Col>
      <Col span={6} offset={2}>
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
      </Col>
    </Row>
  );
};

export default Track;
