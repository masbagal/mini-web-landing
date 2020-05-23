import React from "react";

type Props = {
  href?: string;
  text: string;
  themeColor?: string;
};

export default function MainLinkButton(props: Props) {
  const { href, text, themeColor } = props;
  const ssrStyle = themeColor ? { backgroundColor: themeColor } : {};
  return (
    <a href={href} target="_blank">
      <button style={ssrStyle}>{text}</button>
    </a>
  );
}
