import React from "react";

type Props = {
  href?: string;
  text: string;
  themeColor?: string;
};

export default function MainLinkButton(props: Props) {
  const { href, text, themeColor } = props;
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <button>{text}</button>
    </a>
  );
}
