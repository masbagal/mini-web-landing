import React from 'react';
import { useSpring, animated } from 'react-spring';
import TrayButton from './TrayButton';

const showSpringConst = [
  { zIndex: 100 },
  { opacity: 1, y: 0 },
];

const hideSpringConst = [
  { opacity: 0, y: 100 },
  { zIndex: -1 },
];

export default function TrayModal({ isShow = false, handleClose }) {
  const { opacity, y, zIndex } = useSpring({
    to: isShow ? showSpringConst : hideSpringConst,
    from: { opacity: 0, y: 100, zIndex: -1 },
    config: {
      duration: 120
    }
  })

  function handleCloseTray() {
    handleClose && handleClose();
  }

  return (
    <animated.div className='fixed mx-auto inset-0' style={{ opacity, zIndex }}>
      <div className='bg-black opacity-75 w-screen h-screen' onClick={handleCloseTray} />
      <animated.div className='bg-white w-full absolute bottom-0 rounded-lg' style={{ transform: y.interpolate((iY) => `translateY(${iY}%)`) }}>
        <div className='p-4 border-b text-center'>
          <div className='text-xl font-bold'>
            Pesan Sekarang!
          </div>
          <div className='text-sm'>Nikmatnya Makanan Tradisional Indonesia</div>
        </div>
        <div className='py-2 px-6 bg-gray-200 pb-12'>
          <TrayButton 
            icon='/gofood.svg'
            href='https://gofood.link/u/POQ7YA'
            text='Pesan lewat Mamang GoFood'
          />
          <TrayButton 
            icon='/grab.png'
            href='https://food.grab.com/id/id/restaurant/nasi-kulit-syuurga-caturtunggal-delivery/IDGFSTI00003anh'
            text='Pesan lewat Abang GrabFood'
          />
        </div>
      </animated.div>
    </animated.div>
  );

}