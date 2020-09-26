import React, { Component } from 'react';
import { Card, Row } from 'antd';
import axios from 'axios';
import request from 'request';
import { ClientID, ClientSecret } from '../../../content';
import Zoom from 'react-reveal/Zoom';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

class Artists extends Component {
  state = { ArtistList: [], value: '', NameList: [] };
  componentDidMount() {
    const handlealbums = (data) => {
      var Allartist = [];
      var Allname = [];
      for (var i = 0; i < 12; i++) {
        Allartist.push(data[i].images[1].url);
        // Allname.push(data[i].name);
      }
      for (i = 2; i < 12; i++) {
        Allname.push(data[i].name);
      }
      var j = 0;
      for (i = 12; i < 14; i++) {
        Allname.push(data[j].name);
        j++;
      }
      // console.log(Allartist);
      // console.log(Allname);
      this.setState({
        ArtistList: Allartist,
        NameList: Allname,
        value: Allname[2],
      });
    };
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(ClientID + ':' + ClientSecret).toString('base64'),
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true,
    };
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        axios
          .get(
            'https://api.spotify.com/v1/artists/64KEffDW9EtZ1y2vBYgq8T/related-artists',
            {
              headers: {
                Accept: 'applications/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${response.body.access_token}`,
              },
            }
          )
          .then((res) => {
            // console.log(res);
            handlealbums(res.data.artists);
          });
      }
    });
  }
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      beforeChange: (current, next) =>
        this.setState({ value: this.state.NameList[next] }),
    };
    const { ArtistList } = this.state;
    const renderMetaData = () => {
      return (
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Alata"
            rel="stylesheet"
          />
        </Helmet>
      );
    };
    return (
      <Card
        bordered={false}
        style={{ backgroundColor: '#282828', paddingTop: '40px' }}
      >
        {renderMetaData()}
        <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 1000 }}>
          <strong>
            <Zoom>Artists You May Like</Zoom>
          </strong>
        </h1>
        <h4 style={{ textAlign: 'center', color: '#FF1493' }}>
          “I’ve had great success being a total idiot.” – Jerry Lewis
        </h4>
        <Card
          bordered={false}
          style={{ backgroundColor: '#282828', padding: '0 40px 0 80px' }}
        >
          <Slider {...settings}>
            {ArtistList.map(function (slide) {
              return (
                <div key={slide}>
                  <img
                    alt="example"
                    src={slide}
                    style={{ width: 150, height: 150, borderRadius: '50%' }}
                  />
                </div>
              );
            })}
          </Slider>
        </Card>
        <Row justify="center">
          <h3 style={{ fontFamily: 'Alata', color: 'white' }}>
            {this.state.value}
          </h3>
        </Row>
      </Card>
    );
  }
}

export default Artists;
