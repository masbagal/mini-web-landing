import React from "react";
import { useSpring, animated } from "react-spring";
import TrayButton from "./TrayButton";

const showSpringConst = [
  { opacity: 0, y: 100, zIndex: 100 },
  { opacity: 1, y: 0, zIndex: 100 },
];

const hideSpringConst = [
  { opacity: 0, y: 100, zIndex: 100 },
  { opacity: 0, y: 100, zIndex: -1 },
];

type Props = {
  isShow: boolean;
  handleClose: () => void;
  title: string;
  subtitle: string;
  content: React.ReactElement | any;
};

export default function TrayModal(props: Props) {
  const { isShow, handleClose, title, subtitle, content } = props;
  // @ts-ignore
  const { opacity, y, zIndex } = useSpring({
    to: isShow ? showSpringConst : hideSpringConst,
    from: { opacity: 0, y: 100, zIndex: -1 },
    config: {
      duration: 120,
    },
  });

  function handleCloseTray() {
    handleClose && handleClose();
  }

  return (
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
          <div className="text-xl font-bold">{title}</div>
          <div className="text-sm">{subtitle}</div>
        </div>
        <div className="py-2 px-6 bg-gray-200 pb-12 shadow-inner">
          {content}
        </div>
      </animated.div>
    </animated.div>
  );
}
