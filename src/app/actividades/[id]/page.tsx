"use client";

import { MainTitle } from "@/components/MainTitle";
import { Margin } from "@/components/Margin";
import { ACTIVIDADES_DATA } from "@/utils/consts";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ActividadesPage() {
  const [currentImg, setCurrentImg] = useState(0);

  const params = useParams();
  const id = params.id;

  const actividad = ACTIVIDADES_DATA.filter((item) => item.id === id);

  return (
    <section className="bg-white pt-[8vh]">
      <div className="hidden h-[10vh] w-full items-center justify-start p-5 md:flex">
        <Link href="/actividades">
          <button className="transition duration-300 hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="#B66756"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </button>
        </Link>
      </div>
      <Margin>
        <div className="flex flex-col px-7 py-10 pb-20 lg:py-0 lg:pb-20">
          {actividad.map((item) => (
            <div key={item.id} className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <MainTitle text={item.title} />
              </div>

              <p>{item.description}</p>

              <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
                <div className="flex lg:h-[700px] flex-col gap-1">
                  {item.images.length > 1 &&
                    item.images.map((image, id) => (
                      <Image
                        src={image}
                        alt="Actividad"
                        key={id}
                        width={300}
                        height={300}
                        onClick={() => setCurrentImg(id)}
                        className={`cursor-pointer object-cover object-[top_center] ${id === currentImg ? "lg:border-4 lg:border-primary-color" : ""} h-1/3 w-full`}
                      />
                    ))}
                </div>
                {item.images.length > 1 ? (
                  <div className="hidden h-full w-full items-center justify-center lg:flex">
                    <Image
                      src={item.images[currentImg]}
                      width={400}
                      height={400}
                      alt="Actividad"
                      className="h-[700px] w-full object-cover object-[top_center]"
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={item.images[currentImg]}
                      width={400}
                      height={400}
                      alt="Actividad"
                      className="h-[300px] w-[800px] lg:h-[500px]"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Margin>
    </section>
  );
}
