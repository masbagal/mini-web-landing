import React from 'react';

type Props = {
  icon?: string;
  text: string;
  href: string;
}

export default function TrayButton(props: Props) {
  const { icon, text, href } = props;
  return (
    <a href={href} target='_blank'>
      <div className='trayButton'>
        {
          icon &&
          <img src={icon} className='logo' />
        }
        <div className='text'>{text}</div>
      </div>
    </a>
  )
}