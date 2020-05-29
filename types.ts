export type SlideItem = {
  title: string;
  content: string;
  image: string;
};

export type ButtonLink = {
  text: string;
  link: string;
};

export type TrayButtons = {
  trayTriggerText: string;
  trayTitle: string;
  traySubtitle: string;
  buttons: Array<ButtonsInsideTray>;
};

export type ButtonsInsideTray = {
  icon: string;
  text: string;
  link: string;
};
