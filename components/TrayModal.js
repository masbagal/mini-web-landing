import React from 'react';
import { useSpring, animated } from 'react-spring';

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
      duration: 100
    }
  })


  function handleCloseTray() {
    handleClose && handleClose();
  }

  return (
    <animated.div className='fixed inset-0' style={{ opacity, zIndex }}>
      <div className='bg-black opacity-75 w-screen h-screen' onClick={handleCloseTray} />
      <animated.div className='bg-white w-full absolute bottom-0 rounded-lg' style={{ transform: y.interpolate((iY) => `translateY(${iY}%)`) }}>
        <div className='p-4 border-b text-center'>
          <div className='text-xl font-black'>
            Pesan Sekarang!
          </div>
          <div className='text-sm'>Nikmatnya Makanan Tradisional Indonesia</div>
        </div>
        <div className='py-4 px-8'>
          <a href='https://gofood.link/u/POQ7YA' target='_blank'>
            <div className='orderButton'>
                <img src='/gofood.svg' width='50%' />
            </div>
          </a>
          <a href='https://food.grab.com/id/id/restaurant/nasi-kulit-syuurga-caturtunggal-delivery/IDGFSTI00003anh' target='_blank'>
            <div className='orderButton grab'>
            <img src='/grabfood.svg'  width='50%' />
            </div>
          </a>
        </div>
      </animated.div>
    </animated.div>
  );

}