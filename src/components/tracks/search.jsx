import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import { Card, Row } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

class Search extends Component {
  state = { trackTitle: '' };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=ca6d2aabe958e410ddeb0ce3935f076d `
      )
      .then(res => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list
        });
        // console.log(res.data.message.body.track_list);
        this.setState({ trackTitle: '' });
      })
      .catch(err => console.log(err));
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Card borderd="{false}">
        <Consumer>
          {value => {
            const { dispatch } = value;
            return (
              <div>
                <Row justify="center">
                  <SoundOutlined style={{ fontSize: '40px', padding: '5px' }} />
                  <h1> Search For A Song</h1>
                </Row>
                <Row justify="center">
                  <p>Get the lyrics for any song...</p>
                </Row>
                <form onSubmit={this.findTrack.bind(this, dispatch)}>
                  <div>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="song title.."
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.onChange}
                    />
                  </div>
                  <button type="submit">Get Track Lyrics</button>
                </form>
              </div>
            );
          }}
        </Consumer>
      </Card>
    );
  }
}

export default Search;
