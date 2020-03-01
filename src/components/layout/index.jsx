import React from 'react';
import Tracks from '../tracks/tracks';
import Search from '../tracks/search';
import { Layout } from 'antd';
const { Content } = Layout;
const Index = () => {
  return (
    <React.Fragment>
      <Layout>
        <Content>
          <Search />
          <Tracks />
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default Index;
