import Nav from '../components/nav'
import Slideshow from '../components/Slideshow';

export default function IndexPage() {

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
        <button onClick={handleButton}>Pesan Sekarang!</button>
        <button onClick={handleButton}>Download Proposal Kemitraan</button>
        <button onClick={handleButton}>Hubungi Kami</button>
      </div>
        
        {/* <div className='slide'>
          <div className='galleryContainer'>
            <img src='/002.jpg' className='object-cover object-center' />
          </div>
          <div className='px-8 mt-2'>
            <div className='slideTitle'>Peta Lokasi Nasi Kulit Syuurga</div>
            <div>Persebaran nasi kulit syuurga di Indonesia , ada hingga 30 titik sementara di seluruh Indonesia</div> 
          </div>
        </div> */}
    </div>
    
  )
}
