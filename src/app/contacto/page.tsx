import { ContactCard } from "@/components/ContactCard";
import { MainTitle } from "@/components/MainTitle";
import { Margin } from "@/components/Margin";
import { mailPath, phonePath, ubiPath } from "@/utils/consts";
import Image from "next/image";
import mapa from "/public/Mapa.png";

export default function ContactoPage() {
  const horarioPath = (
    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
  );
  return (
    <section className="bg-white pt-[8vh]">
      <Margin>
        <div className="flex flex-col gap-10 px-5 py-10 mb-10">
          <MainTitle text="CONTACTO" />
          <div className="flex w-full flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-7 md:w-full">
              <ContactCard
                title="Dirección"
                text="Ventura Alegre calle Ventura Alegre, 20000 Maldonado,
                Departamento de Maldonado"
                icon={ubiPath}
              />
              <ContactCard
                title="Horarios"
                text="Lunes a viernes de 09:00 a 14:00 horas"
                icon={horarioPath}
              />
              <ContactCard
                title="Correo"
                text="liceopadredomingo-adm@hotmail.com"
                icon={mailPath}
              />
              <ContactCard title="Teléfono" text="(+598) 4222 3635" icon={phonePath} />
            </div>
            <div className="flex items-center justify-center">
              <a
              target="_blank"
                href="https://www.google.com/maps/place/Liceo+Padre+Domingo/@-34.9063468,-54.9574716,17z/data=!3m1!4b1!4m6!3m5!1s0x95751a84ba9fa2d9:0x536de6321e080e2d!8m2!3d-34.9063512!4d-54.9548967!16s%2Fg%2F11byczzdb7?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                className="cursor-pointer"
              >
                <Image src={mapa} alt="Mapa de la ubicacion del liceo" />
              </a>
            </div>
          </div>
        </div>
      </Margin>
    </section>
  );
}
