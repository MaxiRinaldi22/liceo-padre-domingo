"use client";

import { useEffect, useState } from "react";
import { CarruselComponent } from "@/components/CarouselComponent";
import { Margin } from "@/components/Margin";
import { Card } from "@/components/Card";
import { Galleria } from "@/components/Galleria";
import { MainTitle } from "@/components/MainTitle";
import Image from "next/image";

// DATOS
import { CARDS_INFO } from "@/utils/consts";

// IMAGENES
import catedral from "../public/catedral.jpg";
import padreDomingo from "/public/padreDomingo.png";

// GALERIA
import misa from "/public/galeria/misa.jpg";
import grupal from "/public/galeria/grupal2017.jpg";

// CARRUSEL
import inscripcionesPc from "/public/carrusel/InscripcionesPC.png";
import inscripcionesMOBILE from "/public/carrusel/inscripcionesMOBILE.png";

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-full w-full bg-white pt-[8vh]">
      <CarruselComponent
        desktopImg1={inscripcionesPc}
        desktopImg2={inscripcionesPc}
        desktopImg3={inscripcionesPc}
        mobileImg1={inscripcionesMOBILE}
        mobileImg2={inscripcionesMOBILE}
        mobileImg3={inscripcionesMOBILE}
      />
      <Margin>
        <section
          className={`flex min-h-[45vh] flex-col justify-center p-5 py-10 md:gap-10 md:pb-0 lg:flex-row ${!isTop ? "md:mb-[50px]" : ""}`}
        >
          <div className="flex flex-col justify-center gap-5">
            <h1 className="border-l-2 border-dark-brown px-2 text-lg font-semibold text-black md:text-xl">
              BIENVENIDOS A EL <br />
              <span className="text-2xl md:text-4xl"> LICEO PADRE DOMINGO</span>
            </h1>
            <p className="text-lg text-black">
              Somos un espacio dedicado a la formación integral de nuestros
              estudiantes, inspirado en los valores y la enseñanza del Padre
              Domingo.
            </p>
            <p className="text-lg text-black">
              Desde nuestra fundación, hemos trabajado con el propósito de
              ofrecer una educación de calidad que no solo prepare a nuestros
              alumnos académicamente, sino que también les forme como individuos
              íntegros y comprometidos con su comunidad.
            </p>
          </div>

          <div className="hidden h-full min-w-60 lg:block">
            <Image
              src={padreDomingo}
              alt="Padre Domingo"
              width={400}
              height={530}
              className="maskImage"
            />
          </div>
        </section>

        <div
          className={`will-change: opacity hidden w-full items-start justify-center pb-4 text-dark-brown opacity-100 transition duration-700 md:flex ${isTop ? "" : "md:hidden md:opacity-0"}`}
        >
          <a href="#inicio" scroll-behavior="smooth">
            <svg
              className="cursor-pointer transition duration-300 hover:translate-y-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={45}
              height={45}
              fill="currentColor"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </a>
        </div>
      </Margin>

      <section id="inicio" className="bg-slate-50 p-5 md:px-7">
        <Margin>
          <div className="grid w-full grid-cols-1 gap-16 py-10 md:grid-cols-2 md:justify-around md:gap-5 md:py-28 xl:grid-cols-4">
            {CARDS_INFO.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </Margin>
      </section>

      <section className="bottom-animation w-full items-center justify-center py-10 md:py-16">
        <Margin>
          <div className="flex items-center justify-start px-5 pb-5">
            <MainTitle text="IMAGENES" />
          </div>
          <Galleria img1={catedral} img2={misa} img3={grupal} img4={catedral} />
        </Margin>
      </section>
    </section>
  );
}
