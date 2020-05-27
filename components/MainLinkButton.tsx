import React from "react";

type Props = {
  href?: string;
  text: string;
  themeColor?: string;
};

export default function MainLinkButton(props: Props) {
  const { href, text, themeColor } = props;
  return (
    <a href={href} target="_blank">
      <button>{text}</button>
    </a>
  );
}
