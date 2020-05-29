import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import TrayButton from "./TrayButton";

import { TrayButtons, ButtonsInsideTray } from "../types";

const showSpringConst = [
  { opacity: 0, y: 100, zIndex: 100 },
  { opacity: 1, y: 0, zIndex: 100 },
];

const hideSpringConst = [
  { opacity: 0, y: 100, zIndex: 100 },
  { opacity: 0, y: 100, zIndex: -1 },
];

type Props = {
  trayButton: TrayButtons;
};

export default function TrayModal(props: Props) {
  const { trayButton } = props;
  const [showTray, toggleTray] = useState(false);
  // @ts-ignore
  const { opacity, y, zIndex } = useSpring({
    to: showTray ? showSpringConst : hideSpringConst,
    from: { opacity: 0, y: 100, zIndex: -1 },
    config: {
      duration: 120,
    },
  });

  function handleCloseTray() {
    toggleTray(false);
  }

  const { buttons = [] } = trayButton;

  return (
    <>
      <button onClick={() => toggleTray(true)}>
        {trayButton.trayTriggerText}
      </button>
      <animated.div
        className="fixed mx-auto inset-0 tray"
        style={{ opacity, zIndex }}
      >
        <div
          className="bg-black opacity-75 w-screen h-screen"
          onClick={handleCloseTray}
        />
        <animated.div
          className="tray-header"
          style={{
            transform: y.interpolate((iY: number) => `translateY(${iY}%)`),
          }}
        >
          <div className="p-4 border-b text-center">
            <div className="text-xl font-bold">{trayButton.trayTitle}</div>
            <div className="text-sm">{trayButton.traySubtitle}</div>
          </div>
          <div className="py-2 px-6 bg-gray-200 pb-12 shadow-inner">
            {buttons.map((button: ButtonsInsideTray) => (
              <TrayButton
                key={button.text + button.link}
                icon={button.icon}
                href={button.link}
                text={button.text}
              />
            ))}
          </div>
        </animated.div>
      </animated.div>
    </>
  );
}
