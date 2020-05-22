import React, { useState } from "react";
import TrayModal from "../../components/TrayModal";
import Slideshow from "../../components/Slideshow";
import MainLinkButton from "../../components/MainLinkButton";
import TrayButton from "../../components/TrayButton";

import { getAllLinksSlug, getSinglePost } from "../../services/getLinks";
import { SlideItem, ButtonLink } from "../../types";

type Props = {
  id: string;
  title: string;
  gallery: Array<SlideItem>;
  buttons: Array<ButtonLink>;
};

export default function IndexPage(props: Props) {
  const [showTray, toggleTray] = useState(false);

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
        <h1 className="logoTitle">{props.title}</h1>
      </header>

      <Slideshow items={props.gallery} />
      <div className="mx-8 my-8 border-b-gray-300 border-b" />
      <div className="flex flex-col px-8 mb-12 buttonContainer">
        <button onClick={() => toggleTray(true)}>Pesan Sekarang!</button>
        {props.buttons.map((button: ButtonLink) => (
          <MainLinkButton
            key={button.link}
            href={button.link}
            text={button.text}
          />
        ))}
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

export async function getStaticPaths() {
  const paths = getAllLinksSlug();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.id);
  return {
    props: {
      ...post,
    },
  };
}
