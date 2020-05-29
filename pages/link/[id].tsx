import React from "react";
import Head from "next/head";
import TrayModal from "../../components/TrayModal";
import Slideshow from "../../components/Slideshow";
import MainLinkButton from "../../components/MainLinkButton";

import { getAllLinksSlug, getSinglePost } from "../../services/getLinks";
import { SlideItem, ButtonLink, TrayButtons } from "../../types";

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
  trayButtons: Array<TrayButtons>;
};

export default function LinkPage(props: Props) {
  const { backgroundColor, textColor, accentColor, buttonTextColor } = props;
  const themeScript = `
    const root = document.documentElement;

    root.style.setProperty("--bg-color", "${backgroundColor}");
    root.style.setProperty("--text-color", "${textColor}");
    root.style.setProperty("--accent-color", "${accentColor}");
    root.style.setProperty("--btn-text-color", "${buttonTextColor}");
  `;

  const { trayButtons = [], buttons = [] } = props;

  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        {props.logo && <meta property="og:image" content={props.logo} />}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>

      <header className="header">
        {props.logo && <img src={props.logo} className="logo" />}
        <h1 className="logoTitle">{props.title}</h1>
      </header>

      <Slideshow items={props.gallery} />
      <div className="slideshow-border" />
      <div className="flex flex-col px-8 mb-12 buttonContainer">
        {trayButtons.map((tb: TrayButtons) => (
          <TrayModal trayButton={tb} key={tb.trayTriggerText} />
        ))}
        {buttons.map((button: ButtonLink) => (
          <MainLinkButton
            key={button.link}
            href={button.link}
            text={button.text}
            themeColor={"props.themeColor"}
          />
        ))}
      </div>
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
