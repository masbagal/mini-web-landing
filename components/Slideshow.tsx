import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useDrag } from "react-use-gesture";
import { animated, useSpring } from "react-spring";

import { SlideItem } from "../types";

type Props = {
  items: Array<SlideItem>;
};

export default function Slideshow({ items }: Props) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWindowResize = debounce(() => {
    setWindowWidth(document.documentElement.clientWidth);
  });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    setWindowWidth(document.documentElement.clientWidth);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [{ x }, set] = useSpring(() => ({ x: 0, config: { friction: 20 } }));
  const translateAmount = windowWidth * 1;
  const distanceNeeded = translateAmount / 4;

  const bind = useDrag(
    ({
      down,
      movement: [mx],
      vxvy: [vx],
      distance,
      direction: [directionX],
    }) => {
      const distanceFulfilled = Math.abs(distance) >= distanceNeeded;

      if (down) {
        set({ x: mx });
      } else if (vx > 2 || distanceFulfilled) {
        // if touch event finished and distance/velocity is fulfilled
        const translationDelta = directionX * translateAmount;
        const nextTranslation = currentX + translationDelta;
        setCurrentX(nextTranslation);
        setActiveIndex(activeIndex - directionX);
        set({ x: nextTranslation });
      } else {
        set({ x: currentX });
      }
    },
    {
      axis: "x",
      initial: [currentX, 0],
      bounds: { left: -translateAmount * (items.length - 1), right: 0 },
    }
  );

  return (
    <div>
      <div className="overflow-hidden" {...bind()}>
        <animated.div
          style={{
            transform: x.interpolate(
              (iX) => `translateX(${iX * (80 / 100)}px)`
            ),
          }}
          className="flex flex-row flex-no-wrap items-stretch pl-12 translated-slide"
        >
          {items.map((item: SlideItem, idx: number) => {
            const isActive = idx === activeIndex;
            const activeClass = isActive ? "active" : "";
            return (
              <div className={`slideImageContainer ${activeClass}`} key={idx}>
                <div className="galleryContainer shadow-xl">
                  <img
                    src={item.image}
                    className="object-cover object-center min-h-full"
                  />
                </div>
              </div>
            );
          })}
        </animated.div>
        <animated.div
          style={{ transform: x.interpolate((iX) => `translateX(${iX}px)`) }}
          className="flex flex-row flex-no-wrap items-stretch translated-slide"
        >
          {items.map((item: SlideItem, idx: number) => {
            return (
              <div className="slideContainer" key={idx}>
                <div className="slide">
                  <div className="mt-4 text-center">
                    <div className="slideTitle">{item.title}</div>
                    <div className="text-sm">{item.content}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </animated.div>
      </div>
      <div className="mx-8 my-8 dotcontainer">
        {items.map((item: any, idx: number) => {
          const activeClass = idx === activeIndex ? "active" : "";
          return <div className={`dotpage ${activeClass}`} key={idx} />;
        })}
      </div>
    </div>
  );
}
