import { StaticImageData } from "next/image";

export type CardProps = {
  title: string;
  text: string;
  img: StaticImageData;
  href: string;
};

export type CarruselProps = {
  desktopImg1?: StaticImageData;
  desktopImg2?: StaticImageData;
  desktopImg3?: StaticImageData;
  mobileImg1: StaticImageData;
  mobileImg2: StaticImageData;
  mobileImg3: StaticImageData;
};

export type ContactCardProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

export type HorariosProps = {
  curso: string;
  horarios: StaticImageData;
};

export type ActividadesCardProps = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: StaticImageData;
  images: StaticImageData[];
};
