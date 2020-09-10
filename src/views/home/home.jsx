import React from 'react';
import Tracks from '../tracks/tracks';
import FrontImages from './components/frontImages';
import { Card } from 'antd';
import Zoom from 'react-reveal/Zoom';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    className: 'center',
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <FrontImages />
      <Tracks />
      <Card bordered={false} style={{ backgroundColor: '#282828' }}>
        <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 1000 }}>
          <strong>
            <Zoom>Artists You May Like</Zoom>
          </strong>
        </h1>
        <h4 style={{ textAlign: 'center', color: '#FF1493' }}>
          “I’ve had great success being a total idiot.” – Jerry Lewis
        </h4>
        {/* <Card bordered={false} style={{ backgroundColor: '#282828' }}>
          <Slider {...settings}>
           <Artists />
          </Slider>
        </Card> */}
        <Card>
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ width: 150, height: 150, borderRadius: '50%' }}
          />
        </Card>
      </Card>
    </div>
  );
};

export default Home;
