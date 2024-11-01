"use client";

import { CarruselProps } from "@/types/types";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";

export function CarruselComponent({
  desktopImg1,
  desktopImg2,
  desktopImg3,
  mobileImg1,
  mobileImg2,
  mobileImg3,
}: CarruselProps) {
  const CustomTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };

  return (
    <>
      <div className="hidden h-56 sm:h-64 md:block xl:h-96 2xl:h-96">
        <Carousel theme={CustomTheme}>
          <Image
            src={desktopImg1}
            alt="..."
            className="h-full w-full object-cover"
            layout="responsive"
          />
          <Image
            src={desktopImg2}
            alt="..."
            className="h-full w-full object-cover"
            layout="responsive"
          />
          <Image
            src={desktopImg3}
            alt="..."
            className="h-full w-full"
            layout="responsive"
          />
        </Carousel>
      </div>
      <div className="block h-56 sm:h-64 md:hidden xl:h-96 2xl:h-96">
        <Carousel theme={CustomTheme}>
          <Image
            src={mobileImg1}
            alt="..."
            className="h-full w-full object-cover"
            layout="responsive"
          />
          <Image
            src={mobileImg2}
            alt="..."
            className="h-full w-full object-cover"
            layout="responsive"
          />
          <Image
            src={mobileImg3}
            alt="..."
            className="h-full w-full"
            layout="responsive"
          />
        </Carousel>
      </div>
    </>
  );
}
