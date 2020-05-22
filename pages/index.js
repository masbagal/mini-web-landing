import React, { useState } from "react";
import TrayModal from "../components/TrayModal";
import Slideshow from "../components/Slideshow";
import MainLinkButton from "../components/MainLinkButton";
import TrayButton from "../components/TrayButton";

export default function IndexPage() {
  const [showTray, toggleTray] = useState(false);

  const items = [
    {
      title: "Pioneer Nasi Kulit",
      content:
        "Nasi Kulit Syuurga merupakan pioneer nasi kulit ayam dengan paru di Indonesia yang berdiri sejak 2018, kami berupaya menjaga dan memajukan makanan tradisional Indonesia.",
      image: "/001.jpg",
    },
    {
      title: "Lokasi Nasi Kulit Syuurga",
      content:
        "Persebaran nasi kulit syuurga di Indonesia ada hingga 30 titik di seluruh Indonesia",
      image: "/002.jpg",
    },
    {
      title: "Bermitra dengan Kami",
      content:
        "Kenali kami dulu dari produk kami, agar kita memiliki visi yang sama membangun bersama.",
      image: "/003.jpg",
    },
    {
      title: "Pioneer Nasi Kulit",
      content:
        "Nasi Kulit Syuurga merupakan pioneer nasi kulit ayam dengan paru di Indonesia yang berdiri sejak 2018, kami berupaya menjaga dan memajukan makanan tradisional Indonesia.",
      image: "/001.jpg",
    },
    {
      title: "Bermitra dengan Kami",
      content:
        "Kenali kami dulu dari produk kami, agar kita memiliki visi yang sama membangun bersama.",
      image: "/003.jpg",
    },
  ];

  const TrayContent = [
    <TrayButton
      icon="/gofood.svg"
      href="https://gofood.link/u/POQ7YA"
      text="Pesan lewat Mamang GoFood"
    />,
    <TrayButton
      icon="/grab.png"
      href="https://food.grab.com/id/id/restaurant/nasi-kulit-syuurga-caturtunggal-delivery/IDGFSTI00003anh"
      text="Pesan lewat Abang GrabFood"
    />,
  ];

  return (
    <div>
      <header className="header">
        <img src="/logo.png" className="logo" />
        <h1 className="logoTitle">Nasi Kulit Syuurga</h1>
      </header>

      <Slideshow items={items} />
      <div className="mx-8 my-8 border-b-gray-300 border-b" />

      <div className="flex flex-col px-8 mb-12 buttonContainer">
        <button onClick={() => toggleTray(true)}>Pesan Sekarang!</button>
        <MainLinkButton
          href="https://drive.google.com/file/d/1UWj_jNVD-5IRAn44UqWPVMgtWUQI-tQg/view"
          text="Download Proposal Kemitraan"
        />
        <MainLinkButton
          href="https://api.whatsapp.com/send?phone=6287781742506&text=Saya%20tertarik%20untuk%20Franchise%20"
          text="Hubungi Kami"
        />
      </div>

      <TrayModal
        isShow={showTray}
        handleClose={() => toggleTray(false)}
        title="Pesan Sekarang!"
        subtitle="Rasakan nikmatnya cita rasa Indonesia"
        content={TrayContent}
      />
    </div>
  );
}
