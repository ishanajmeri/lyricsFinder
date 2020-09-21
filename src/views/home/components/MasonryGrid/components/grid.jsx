import React, { useState, useEffect } from 'react';
import { useTransition, a } from 'react-spring';
import { Card, Col, Row } from 'antd';
import Zoom from 'react-reveal/Zoom';
import shuffle from 'lodash/shuffle';

import './styles.css';
import useMeasure from './useMeasure.js';
import useMedia from './useMedia.js';

function Grid(props) {
  const [items, set] = useState([]);

  useEffect(() => {
    set(props.data);
  }, [props.data]);
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
      style={{ backgroundColor: '#282828', padding: '40px 60px' }}
    >
      <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 1000 }}>
        <strong>
          <Zoom>Featured Playlists...</Zoom>
        </strong>
      </h1>
      <Row>
        <Col span={6} offset={1}>
          <img
            src="./new-landing-4.jpg"
            alt="cf"
            style={{ height: '100%', width: 'auto', borderRadius: '20px' }}
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
export default Grid;
