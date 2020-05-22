import React, { useState } from 'react';
import TrayModal from '../components/TrayModal'
import Slideshow from '../components/Slideshow';

export default function IndexPage() {
  const [showTray, toggleTray] = useState(false);

  function handleButton() {
    alert('Belum dibuat hehe')
  }

  const items = [
    {
      title: 'Pioneer Nasi Kulit',
      content: 'Nasi Kulit Syuurga merupakan pioneer nasi kulit ayam dengan paru di Indonesia yang berdiri sejak 2018, kami berupaya menjaga dan memajukan makanan tradisional Indonesia.',
      img: '/001.jpg'
    },
    {
      title: 'Lokasi Nasi Kulit Syuurga',
      content: 'Persebaran nasi kulit syuurga di Indonesia ada hingga 30 titik di seluruh Indonesia',
      img: '/002.jpg'
    },
    {
      title: 'Bermitra dengan Kami',
      content: 'Kenali kami dulu dari produk kami, agar kita memiliki visi yang sama membangun bersama.',
      img: '/003.jpg'
    },
    {
      title: 'Pioneer Nasi Kulit',
      content: 'Nasi Kulit Syuurga merupakan pioneer nasi kulit ayam dengan paru di Indonesia yang berdiri sejak 2018, kami berupaya menjaga dan memajukan makanan tradisional Indonesia.',
      img: '/001.jpg'
    },
    {
      title: 'Bermitra dengan Kami',
      content: 'Kenali kami dulu dari produk kami, agar kita memiliki visi yang sama membangun bersama.',
      img: '/003.jpg'
    },
  ]

  return (
    <div>
      <header className='header'>
        <img src='/logo.png' className='logo'/>
        <h1 className='logoTitle'>Nasi Kulit Syuurga</h1>
      </header>
      
      <Slideshow items={items} />
      <div className='mx-8 my-8 border-b-gray-300 border-b' />

      <div className='flex flex-col px-8 mb-12'>
        <button onClick={() => toggleTray(true)}>Pesan Sekarang!</button>
        <a href='https://drive.google.com/file/d/1UWj_jNVD-5IRAn44UqWPVMgtWUQI-tQg/view' target='_blank'>
          <button onClick={handleButton}>Download Proposal Kemitraan</button>
        </a>
        <a href='https://api.whatsapp.com/send?phone=6287781742506&text=Saya%20tertarik%20untuk%20Franchise%20' target='_blank'>
          <button onClick={handleButton}>Hubungi Kami</button>
        </a>
      </div>
      <TrayModal isShow={showTray} handleClose={() => toggleTray(false)} />
    </div>
    
  )
}
