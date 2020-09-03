import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';
import './styles.css';

const images = [
  ({ style }) => (
    <animated.img
      src="https://neobeat.qodeinteractive.com/wp-content/uploads/2020/04/new-landing-1.jpg"
      alt="Mountains"
      style={style}
    />
  ),
  ({ style }) => (
    <animated.img
      src="https://neobeat.qodeinteractive.com/wp-content/uploads/2020/04/landing-rev-first-2.jpg"
      alt="Beach"
      style={style}
    />
  ),
  ({ style }) => (
    <animated.img
      src="https://neobeat.qodeinteractive.com/wp-content/uploads/2020/04/new-landing-2.jpg"
      alt="Desert"
      style={style}
    />
  ),
];

const FrontImages = () => {
  const [index, setIndex] = useState(0);
  React.useEffect(
    () => void setInterval(() => setIndex((state) => (state + 1) % 3), 3500),
    []
  );
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <div className="gallery">
      {transitions.map(({ item, props, key }) => {
        const Image = images[item];
        return <Image key={key} style={props} />;
      })}
    </div>
  );
};

export default FrontImages;
