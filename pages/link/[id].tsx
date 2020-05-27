import React, { useState, useEffect } from "react";
import Head from "next/head";
import isDarkColor from "is-dark-color";
import TrayModal from "../../components/TrayModal";
import Slideshow from "../../components/Slideshow";
import MainLinkButton from "../../components/MainLinkButton";
import TrayButton from "../../components/TrayButton";

import { getAllLinksSlug, getSinglePost } from "../../services/getLinks";
import { SlideItem, ButtonLink } from "../../types";

type Props = {
  id: string;
  logo?: string;
  backgroundColor: string;
  accentColor: string;
  textColor: string;
  buttonTextColor: string;
  title: string;
  gallery: Array<SlideItem>;
  buttons: Array<ButtonLink>;
};

export default function LinkPage(props: Props) {
  const [showTray, toggleTray] = useState(false);

  useEffect(() => {
    const { backgroundColor, textColor, accentColor, buttonTextColor } = props;
    const root = document.documentElement;

    root.style.setProperty("--bg-color", backgroundColor);
    root.style.setProperty("--text-color", textColor);
    root.style.setProperty("--accent-color", accentColor);
    root.style.setProperty("--btn-text-color", buttonTextColor);
  });

  const TrayContent = [
    <TrayButton
      key={1}
      icon="/gofood.svg"
      href="https://gofood.link/u/POQ7YA"
      text="Pesan lewat Mamang GoFood"
    />,
    <TrayButton
      key={2}
      icon="/grab.png"
      href="https://food.grab.com/id/id/restaurant/nasi-kulit-syuurga-caturtunggal-delivery/IDGFSTI00003anh"
      text="Pesan lewat Abang GrabFood"
    />,
  ];

  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        {props.logo && <meta property="og:image" content={props.logo} />}
      </Head>

      <header className="header">
        {props.logo && <img src={props.logo} className="logo" />}
        <h1 className="logoTitle">{props.title}</h1>
      </header>

      <Slideshow items={props.gallery} />
      <div className="slideshow-border" />
      <div className="flex flex-col px-8 mb-12 buttonContainer">
        <button onClick={() => toggleTray(true)}>Pesan Sekarang!</button>
        {props.buttons.map((button: ButtonLink) => (
          <MainLinkButton
            key={button.link}
            href={button.link}
            text={button.text}
            themeColor={"props.themeColor"}
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
