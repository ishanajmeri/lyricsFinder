import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
const { Header } = Layout;
const { Text } = Typography;
const Navbar = () => {
  return (
    <Header>
      <Row justify="center">
        <Col>
          <Text strong style={{ fontSize: '19px' }}>
            LyricsFinder
          </Text>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
