import { Card, Col, Row } from 'antd';
import React, { useState, useEffect, Component } from 'react';
import { useTransition, a } from 'react-spring';
import shuffle from 'lodash/shuffle';
import useMeasure from './components/useMeasure.js';
import useMedia from './components/useMedia.js';
import axios from 'axios';
import request from 'request';
import './components/styles.css';
import { ClientID, ClientSecret } from '../../../../content.js';

const Imgheight = [350, 320, 360, 300, 400];
const Imgwidth = [150, 180, 170, 180];

function MasonryGrid() {
  const [items, set] = useState([]);

  React.useEffect(() => {
    const handlealbums = (data) => {
      var Allartist = [];
      for (var i = 0; i < 9; i++) {
        Allartist.push({
          css: data[i].images[0].url,
          height: Imgheight[Math.floor(Math.random() * Imgheight.length)],
          width: Imgwidth[Math.floor(Math.random() * Imgwidth.length)],
        });
      }
      console.log(Allartist);
      // this.setState({ data: Allartist });
      set(Allartist);
      // set(alldata);
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
          .get('https://api.spotify.com/v1/browse/featured-playlists?limit=9', {
            headers: {
              Accept: 'applications/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${response.body.access_token}`,
            },
          })
          .then((res) => {
            // console.log(res.data.playlists.items);
            handlealbums(res.data.playlists.items);
          });
      }
    });
  }, []);
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [5, 3, 6],
    2
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 2000), []);
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return {
      ...child,
      xy,
      height: child.height / 2,
      width: child.width,
    };
  });
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  return (
    <Card
      bordered={false}
      style={{ backgroundColor: '#282828', padding: '0 60px' }}
    >
      <Row>
        <Col span={6} offset={1}>
          <img
            src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="cf"
            style={{ height: '100%', width: '100%', borderRadius: '20px' }}
          />
        </Col>
        <Col span={12} offset={1}>
          <div
            {...bind}
            className="list"
            style={{ height: Math.max(...heights) }}
          >
            {transitions.map(({ item, props: { xy, ...rest }, key }) => (
              <a.div
                key={key}
                className="images"
                style={{
                  transform: xy.interpolate(
                    (x, y) => `translate3d(${x}px,${y}px,0)`
                  ),
                  padding: '15px',
                  ...rest,
                }}
              >
                <img
                  src={item.css}
                  alt="ex"
                  style={{ height: item.height, width: item.width }}
                />
              </a.div>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
}
export default MasonryGrid;
