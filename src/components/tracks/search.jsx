import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import { Card, Row, Button, Form, Input } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

class Search extends Component {
  state = { trackTitle: '' };

  findTrack = (dispatch, e) => {
    console.log('object,yes');
    // e.preventDefault();
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
                  <p>Get the lyrics for any song</p>
                </Row>
                <Form onFinish={this.findTrack.bind(this, dispatch)}>
                  <Form.Item>
                    <Input
                      type="text"
                      placeholder="song title.."
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.onChange}
                    />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    Get Track Lyrics
                  </Button>
                </Form>
              </div>
            );
          }}
        </Consumer>
      </Card>
    );
  }
}

export default Search;
