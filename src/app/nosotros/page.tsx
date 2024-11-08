import { Margin } from "@/components/Margin";
import { INFRAESTRUCTURA_INFO, LIST_INFO } from "@/utils/consts";
import { CarruselComponent } from "@/components/CarouselComponent";
import { MainTitle } from "@/components/MainTitle";

// IMAGENES
import aniversario from "/public/aniversario.png";
import Image from "next/image";
import deportes from "@/public/deportes.jpg";

export default function NosotrosPage() {
  const [img1, img2, img3] = INFRAESTRUCTURA_INFO.slice(0, 3).map(
    ({ img }) => img,
  );

  return (
    <section className="bg-white pt-[8vh]">
      <Margin>
        <section className="flex min-h-[55vh] w-full flex-col-reverse justify-between px-5 py-10 md:flex-row-reverse md:py-10">
          <Image src={aniversario} alt="escudo" width={400} height={430} />
          <div
            id="quienes-somos"
            className="flex flex-col justify-center gap-5"
          >
            <MainTitle text="QUIENES SOMOS" />
            <p className="">
              Desde 2011, nuestra institución educativa en Maldonado se dedica a
              formar jóvenes con la preparación necesaria para enfrentar tanto
              el ámbito laboral como el universitario, manteniendo siempre un
              enfoque en la excelencia y la integridad académica. Nuestro
              compromiso es brindar una educación integral, exigente y de alta
              calidad, en un entorno que motiva a cada estudiante a desarrollar
              su máximo potencial.
              <br />
              <br /> Contamos con un equipo docente altamente capacitado y
              comprometido, quienes no solo enseñan conocimientos, sino que
              también se convierten en referentes y ejemplos de profesionalismo
              y dedicación. Creemos en la importancia de acompañar a los
              estudiantes en cada etapa de su desarrollo, fomentando un espacio
              donde puedan descubrir y disfrutar de actividades
              extracurriculares que despierten sus intereses, encontrar amigos
              que los apoyen y se conviertan en una red de compañerismo y crear
              recuerdos que enriquezcan su formación personal. <br />
              <br />
              Nuestro propósito es preparar a nuestros egresados para los
              desafíos futuros, tanto académicos como personales, asegurando que
              posean las competencias y valores necesarios para enfrentar con
              éxito su camino en el mundo laboral y universitario.
            </p>
          </div>
        </section>
      </Margin>

      <section
        className="hidden h-screen w-full md:block md:h-[30vh]"
        style={{
          backgroundImage: `url(${deportes.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex h-full w-full items-center justify-center px-[180px] text-center md:flex-row md:gap-16">
          <h3 className="flex flex-col gap-3 text-4xl font-semibold">
            <div className="flex w-full items-center justify-center gap-6">
              <span className="text-8xl text-primary-color">14</span>
              <div className="flex h-full text-2xl flex-col items-start justify-center gap-3 font-[400] text-white">
                <span>AÑOS</span>
                <span>DE EXPERIENCIA</span>
              </div>
            </div>

            <span className="text-2xl font-[300] text-light-brown">
              FORMANDO ALUMNOS PARA EL MUNDO REAL
            </span>
          </h3>
        </div>
      </section>

      <section id="infraestructura" className="bg-white">
        <Margin>
          <div className="flex flex-col gap-10 py-10">
            <div id="infraestructura" className="px-5">
              <MainTitle text="INFRAESTRUCTURA" />
            </div>
            <p className="px-5">
              Se trata de dos edificaciones independientes, entre ambas contamos
              con 23 salones, 4 baños, dos cantina, espacios abiertos de
              recreación, gimnasio cerrado, biblioteca, dos salas de proyección,
              salón de dibujo, sala de informática, dos laboratorios de física,
              química y biología, oficinas administrativas, amplia
              recepción,sala de reuniones, entre otras. Y además tiene
              instalaciones para la accesibilidad de acuerdo a la Ley de
              accesibilidad.
            </p>

            <section className="flex flex-col gap-5 px-5 md:flex-row md:gap-[104px]">
              <ul className="flex flex-col items-start justify-between gap-5">
                {LIST_INFO.slice(0, 3).map(({ title, id }) => (
                  <li
                    key={id}
                    className={`flex gap-3 font-[500] ${id === 1 ? "items-start" : "items-center"}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={32}
                      height={32}
                      fill="#65C9FB"
                    >
                      <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <p className="max-w-64">{title}</p>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col items-start justify-between gap-5 md:gap-7">
                {LIST_INFO.slice(3).map(({ title, id }) => (
                  <li key={id} className="flex items-center gap-3 font-[500]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={32}
                      height={32}
                      fill="#65C9FB"
                    >
                      <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <p>{title}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="h-fit w-full">
              <div className="hidden h-[500px] w-full flex-row items-center justify-center gap-2 md:flex">
                {INFRAESTRUCTURA_INFO.map(({ img }, id) => (
                  <div key={id}>
                    <Image
                      src={img}
                      alt={`Imagen ${id}`}
                      width={350}
                      height={500}
                      className="h-[500px] w-[400px] transform object-cover shadow-xl"
                    />
                  </div>
                ))}
              </div>

              <div className="block md:hidden">
                <CarruselComponent
                  mobileImg1={img1}
                  mobileImg2={img2}
                  mobileImg3={img3}
                />
              </div>
            </section>
          </div>
        </Margin>
      </section>

      <section className="bg-slate-100">
        <Margin>
          <div
            id="propuesta-educacional"
            className="flex flex-col gap-10 px-5 py-10"
          >
            <MainTitle text="PROPUESTA EDUCATIVA" />

            <p className="max-w-[700px] text-start">
              Nuestra institución está inspirada en la obra y el legado del
              Padre Domingo, creemos en la importancia de una educación
              integral, basada en valores como el respeto, la solidaridad y el
              compromiso social. Nuestro objetivo es no solo brindar a los
              estudiantes una formación académica sólida, sino también
              acompañarlos en su desarrollo personal, fomentando un ambiente
              enriquecedor. <br />
              <br />
              Contamos con dos edificios especialmente diseñados para cubrir las
              necesidades de cada nivel educativo: uno destinado a Ciclo Básico
              y otro a Bachillerato, ambos equipados con tecnología de
              vanguardia y recursos modernos que garantizan un entorno de
              aprendizaje cómodo, seguro y eficiente. <br />
              <br />
              Por las mañanas, los estudiantes asisten al horario curricular, y
              por las tardes tienen a su disposición una amplia variedad de
              actividades extracurriculares que van desde talleres deportivos y
              artísticos hasta competencias y encuentros académicos. Estas
              actividades están diseñadas para potenciar sus habilidades,
              fomentar el trabajo en equipo y fortalecer sus vínculos en la
              comunidad estudiantil.
              <br />
              <br />
              Además, nuestro equipo docente está formado por profesionales
              altamente capacitados, con vasta experiencia y dedicación en el
              ámbito educativo. Creemos en la importancia de aprender fuera del
              aula, por lo que ofrecemos salidas didácticas que enriquecen la
              experiencia de nuestros estudiantes y les permiten aplicar el
              conocimiento en situaciones reales. <br />
              <br />
              Elegirnos es optar por una educación comprometida, donde cada
              estudiante es valorado, alentado y apoyado en cada etapa de su
              desarrollo.
            </p>
          </div>
        </Margin>
      </section>
    </section>
  );
}
