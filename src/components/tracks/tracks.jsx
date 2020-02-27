import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './track';

class Tracks extends Component {
  state = {};
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            const { track_list, heading } = value;
            if (track_list === undefined || track_list.length === 0) {
              return;
            } else {
              return (
                <React.Fragment>
                  <h3 className="text-center mb-4">{heading}</h3>
                  <div className="row">
                    {track_list.map(item => (
                      <Track key={item.track.track_id} track={item.track} />
                    ))}
                  </div>
                </React.Fragment>
              );
            }
          }}
        </Consumer>
      </div>
    );
  }
}

export default Tracks;
