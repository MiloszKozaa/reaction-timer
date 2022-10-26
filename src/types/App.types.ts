export type LinkTypes = {
  link: string;
  linkTitle: string;
};

export type SceneTypes = {
  icon: string;
  text: string;
  boldText?: string;
  click: () => void;
  storage?: any[];
  best?: number;
}

export type StatsTypes = {
  title: string;
  icon: string;
  value?: number;
  array?: any[];
}