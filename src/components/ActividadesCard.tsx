"use client";

import { ActividadesCardProps } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ActividadesCard({
  title,
  shortDescription,
  icon,
  id,
}: ActividadesCardProps) {
  const router = useRouter();

  return (
    <div className="flex h-44 w-full items-start gap-3 bg-white pl-0 text-black">
      <div className="flex h-full items-end justify-center">
        <Image
          src={icon}
          alt="Actividad"
          width={250}
          height={250}
          className="h-full w-full min-h-[115.8px] min-w-[176px]"
        />
      </div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="border-l-2 border-dark-brown px-2 text-lg font-semibold">{title}</p>
          <p className="text-xs">{shortDescription}</p>
        </div>
        <button
          onClick={() => router.push(`/actividades/${id}`)}
          className="group flex w-full items-center justify-between rounded-md bg-primary-color p-2 px-1.5 font-extrabold text-light-brown transition-colors hover:bg-sky-500"
        >
          <div className="flex flex-col items-start">
            <p className="text-xs">MAS</p>
            <p className="text-xs">INFORMACION</p>
          </div>
          <div className="transition-transform duration-300 group-hover:-rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={25}
              height={25}
              fill="#FFFFC9"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
