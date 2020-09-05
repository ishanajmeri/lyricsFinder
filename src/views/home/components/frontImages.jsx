import React, { useState } from 'react';
import { animated, useTransition, config, useSpring } from 'react-spring';
import './styles.css';

const images = [
  ({ style }) => (
    <animated.img src="./new-landing-1.jpg" alt="Mountains" style={style} />
  ),
  ({ style }) => (
    <animated.img src="./new-landing-3.jpg" alt="Beach" style={style} />
  ),
  ({ style }) => (
    <animated.img src="./new-landing-2.jpg" alt="Desert" style={style} />
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
      {/* <div className="gallery-directions">Music is Evrything!</div> */}
      <Line />
      {transitions.map(({ item, props, key }) => {
        const Image = images[item];
        return <Image key={key} style={props} />;
      })}
    </div>
  );
};

export default FrontImages;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Line() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.p
      className="gallery-directions"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      Music is Evrything!
    </animated.p>
  );
}
