import { CardProps } from "@/types/types";
import Image from "next/image";

export function Card({ text, img, title, href }: CardProps) {
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center gap-5 rounded-md bg-slate-50 ">
      <Image
        src={img}
        alt="..."
        width={296}
        height={194}
        className="h-[194px] w-[296px]"
      />

      <div className="flex h-full w-full flex-col items-start justify-between gap-5 px-3 pb-3">
        <div className="flex flex-col gap-3">
          <h2 className="border-l-2 border-dark-brown pl-2 text-xl font-semibold">
            {title}
          </h2>
          <p className="max-w-64 text-sm">{text}</p>
        </div>
        <a href={href}>
          <button className="rounded-md bg-primary-color px-5 py-2 text-sm font-[500] text-light-brown transition-all duration-300 hover:bg-sky-500">
            Leer más
          </button>
        </a>
      </div>
    </div>
  );
}
