// import React from 'react';
// import { useSpring, animated } from '@react-spring/web';

// function HeatwaveIndicator({ heatwaveIndex }) {
//   const getColor = () => {
//     const red = Math.min(255, Math.round((heatwaveIndex / 100) * 255));
//     const green = Math.min(255, Math.round((1 - heatwaveIndex / 100) * 255));
//     return `rgb(${red}, ${green}, 0)`;
//   };

//   const animationProps = useSpring({
//     width: `${heatwaveIndex}%`,
//     backgroundColor: getColor(),
//     config: { duration: 10000 }, // Adjust the duration to control the speed of the animation
//   });

//   return (
//     <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
//       <animated.div style={animationProps} className="h-full rounded-full"></animated.div>
//     </div>
//   );
// }

// export default HeatwaveIndicator;
// import React from 'react';
// import { useSpring, animated } from '@react-spring/web';

// function HeatwaveIndicator({ heatwaveIndex }) {
//   const getColor = () => {
//     const red = Math.min(255, Math.round((heatwaveIndex / 100) * 255));
//     const green = Math.min(255, Math.round((1 - heatwaveIndex / 100) * 255));
//     return `rgb(${red}, ${green}, 0)`;
//   };

//   const animationProps = useSpring({
//     from: { width: '0%', backgroundColor: 'rgb(0, 255, 0)' },
//     to: { width: `${heatwaveIndex}%`, backgroundColor: getColor() },
//     config: { duration: 1000 }, // Adjust the duration for the animation speed
//     reset: true,
//     onRest: () => {
//       // Ensures the bar stops at the correct color and width based on heatwaveIndex
//     },
//   });

//   return (
//     <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
//       <animated.div style={animationProps} className="h-full rounded-full"></animated.div>
//     </div>
//   );
// }

// export default HeatwaveIndicator;

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function HeatwaveIndicator({ heatwaveIndex }) {
  const [prevIndex, setPrevIndex] = useState(heatwaveIndex);
  
  console.log("fhuuhv"+heatwaveIndex)

  useEffect(() => {
    if (heatwaveIndex !== prevIndex) {
      setPrevIndex(heatwaveIndex);
    }
  }, [heatwaveIndex, prevIndex]);

  const getColor = () => {
    const red = Math.min(255, Math.round((heatwaveIndex / 100) * 255));
    const green = Math.min(255, Math.round((1 - heatwaveIndex / 100) * 255));
    return `rgb(${red}, ${green}, 0)`;
  };

  const animationProps = useSpring({
    width: `${heatwaveIndex}%`,
    backgroundColor: getColor(),
    config: { duration: 1000 },
    immediate: heatwaveIndex === prevIndex, // Skip animation if the index hasn't changed
  });

  return (
    <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
      <animated.div style={animationProps} className="h-full rounded-full"></animated.div>
     
    </div>
  );
}

export default HeatwaveIndicator;
