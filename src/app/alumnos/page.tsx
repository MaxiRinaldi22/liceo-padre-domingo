"use client";

import { MainTitle } from "@/components/MainTitle";
import { Margin } from "@/components/Margin";
import { HORARIOS } from "@/utils/consts";
import Image from "next/image";
import { useState } from "react";

export default function AlunosPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <section className="bg-white px-5 pt-[8vh]">
      <Margin>
        <div className="flex flex-col gap-10 py-10 px-3">
          <MainTitle text="HORARIOS" />
          <div>
            {HORARIOS.map((item, id) => (
              <div key={id}>
                <div
                style={{userSelect: 'none'}}
                  className="flex cursor-pointer items-center justify-start gap-2 p-4 px-0"
                  onClick={() => toggleItem(id)}
                >
                  <span
                    className={`transform transition-transform duration-500 ${
                      openItems.includes(id) ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={32}
                      height={32}
                      fill="currentColor"
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </span>
                  <span className="text-2xl font-semibold">{item.curso}</span>
                </div>
                <div className="groupmd:w-full md:flex md:items-center md:justify-centernp,m ">
                  {openItems.includes(id) && (
                    <div className="md:h-[700px] md:w-[700px]">
                      <Image
                        src={item.horarios}
                        alt={item.curso}
                        width={700}
                        height={700}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Margin>
    </section>
  );
}
