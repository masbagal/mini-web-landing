import React from "react";

type Props = {
  href?: string;
  text: string;
};

export default function MainLinkButton(props: Props) {
  const { href, text } = props;
  return (
    <a href={href} target="_blank">
      <button>{text}</button>
    </a>
  );
}
