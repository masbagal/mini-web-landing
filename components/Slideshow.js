import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring';

export default function Slideshow({ items }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWindowResize = debounce(() => {
    setWindowWidth(document.documentElement.clientWidth)
  });

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setWindowWidth(document.documentElement.clientWidth)
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const [{ x }, set] = useSpring(() => ({ x: 0, config: { friction: 20 } }));
  const translateAmount = windowWidth * 1;
  const distanceNeeded = translateAmount / 4;

  const bind = useDrag(({ down, movement: [mx], vxvy: [vx], distance, direction: [directionX] }) => {
    const distanceFulfilled = Math.abs(distance) >= distanceNeeded;
    
    if (down) {
      set({ x: mx })
    } else if (vx > 2 || distanceFulfilled) {
      // if touch event finished and distance/velocity is fulfilled
      const translationDelta = directionX * translateAmount
      const nextTranslation = currentX + translationDelta;
      setCurrentX(nextTranslation);
      setActiveIndex(activeIndex - directionX)
      set({ x: nextTranslation });
    } else {
      set({ x: currentX })
    }
  }, { axis: 'x', initial: [currentX, 0], bounds: { left: -translateAmount * (items.length - 1), right: 0 }})

  return (
    <div>
      <animated.div className='overflow-hidden' {...bind()} >
        <animated.div style={{ transform: x.interpolate((iX) => `translate3d(${iX}px, 0, 0)`) }} className='flex flex-row flex-no-wrap items-stretch'>
          {
            items.map((item, idx) => {
              const isActive = idx === activeIndex;
              return <Slide {...item} isActive={isActive} />
            })
          }
        </animated.div>
      </animated.div>
      <div className='mx-8 my-8 dotcontainer'>
        {
          items.map((item, idx) => {
            const activeClass = idx === activeIndex ? 'active' : '';
            return <div className={`dotpage ${activeClass}`} />
          })
        }
      </div>
    </div>
  )
};


function Slide(props) {
  const activeClass = props.isActive ? 'active' : '';
  return (
      <div className={`slide ${activeClass}`}>
        <div className='galleryContainer'>
          <img src={props.img} className='object-cover object-center' />
        </div>
        <div className='mt-2'>
          <div className='slideTitle'>{props.title}</div>
          <div className='text-sm'>{props.content}</div>
        </div>
      </div>
  )
}