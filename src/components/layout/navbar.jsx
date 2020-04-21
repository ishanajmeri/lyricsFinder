import React from 'react';
import { Layout, Row, Typography } from 'antd';
const { Header } = Layout;
const { Text } = Typography;
const Navbar = () => {
  return (
    <Header>
      <Row justify="center">
          <Text strong style={{ fontSize: '19px' }}>
            LyricsFinder
          </Text>
      </Row>
    </Header>
  );
};

export default Navbar;
