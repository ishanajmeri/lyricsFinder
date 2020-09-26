import React, { Component } from 'react';
import axios from 'axios';
import request from 'request';
import Grid from './components/grid';
import { ClientID, ClientSecret } from '../../../../content.js';

const Imgheight = [350, 320, 360, 300, 400];
const Imgwidth = [150, 175, 170, 165];
class Main extends Component {
  state = { data: [] };

  componentDidMount() {
    const handlealbums = (data) => {
      var Allartist = [];
      for (var i = 0; i < 9; i++) {
        Allartist.push({
          css: data[i].images[0].url,
          height: Imgheight[Math.floor(Math.random() * Imgheight.length)],
          width: Imgwidth[Math.floor(Math.random() * Imgwidth.length)],
        });
      }
      // console.log(Allartist);
      this.setState({ data: Allartist });
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
            'https://api.spotify.com/v1/browse/featured-playlists?limit=10',
            {
              headers: {
                Accept: 'applications/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${response.body.access_token}`,
              },
            }
          )
          .then((res) => {
            // console.log(res.data.playlists.items);
            handlealbums(res.data.playlists.items);
          });
      }
    });
  }
  render() {
    return <Grid data={this.state.data} />;
  }
}

export default Main;
