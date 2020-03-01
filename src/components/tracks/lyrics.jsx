import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=ca6d2aabe958e410ddeb0ce3935f076d `
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=ca6d2aabe958e410ddeb0ce3935f076d `
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err), 'catch');
  }
  render() {
    // console.log(this.props, 'lyrics');
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <h1>nothing</h1>;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <Card>
            <h5>
              {track.track_name} by <span>{track.artist_name}</span>
            </h5>
            <p className="card-text">{lyrics.lyrics_body}</p>
            <strong>Album ID</strong>: {track.album_id}
            <br />
            <strong>Song Genre </strong>:
            {
              track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </Card>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
