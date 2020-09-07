import React, { Component } from 'react';
import axios from 'axios';
import request from 'request';
import { API_KEY, OAuth, ClientID, ClientSecret } from './content';
const Context = React.createContext();

const reducer = (state, action) => {
  // console.log(state);
  // console.log(action, 'action');
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'search Results',
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks',
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
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
        // const result = response.json({ token: body.access_token });
        console.log(response.body.access_token, 'reuslt');
      }
    });
    // axios
    //   // .get(
    //   //   `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${API_KEY} `
    //   // )
    //   .get(`https://api.spotify.com/v1/browse/new-releases?limit=10`, {
    //     headers: {
    //       Authorization: `Bearer ${OAuth}`,
    //     },
    //   })
    //   .then((res) => {
    //     // console.log(res.data);
    //     this.setState({ track_list: res.data.albums.items });
    //   })
    //   .catch((err) => console.log(err, 'error'));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
