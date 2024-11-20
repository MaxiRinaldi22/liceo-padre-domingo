import { ActividadesCard } from "@/components/ActividadesCard";
import { MainTitle } from "@/components/MainTitle";
import { Margin } from "@/components/Margin";
import { ACTIVIDADES_DATA } from "@/utils/consts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actividades",
}


export default function ActividadesMainPage() {
  return (
    <section className="bg-white pt-[8vh]">
      <Margin>
        <div className="mb-10 flex flex-col gap-5 px-5 py-10">
          <MainTitle text="ACTIVIDADES" />
          <p>
            En nuestro liceo, damos especial importancia a las actividades
            deportivas, que se desarrollan en el horario de la tarde. A través
            del deporte, buscamos apoyar y motivar a cada estudiante en su
            crecimiento físico y emocional, promoviendo un estilo de vida
            saludable y activo. Las actividades deportivas son también una
            oportunidad para aprender valores fundamentales como el trabajo en
            equipo, el respeto y la perseverancia. Nuestro objetivo es que cada
            alumno descubra sus talentos y habilidades mientras disfruta, se
            desarrolla y forma lazos de compañerismo.
          </p>
          <div className="mt-10 grid w-full grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3">
            {ACTIVIDADES_DATA.map((item) => (
              <ActividadesCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Margin>
    </section>
  );
}
