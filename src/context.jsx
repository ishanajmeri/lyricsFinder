import React, { Component } from 'react';
import axios from 'axios';
import request from 'request';
import { ClientID, ClientSecret } from './content';
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
    token: '',
  };
  componentDidMount() {
    const handlealbums = (data) => {
      console.log(data);
      this.setState({ track_list: data });
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
        // console.log(response.body.access_token);
        axios
          .get('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
              Accept: 'applications/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${response.body.access_token}`,
            },
          })
          .then((res) => {
            // console.log(res);
            handlealbums(res.data.albums.items);
          });
      }
    });
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
