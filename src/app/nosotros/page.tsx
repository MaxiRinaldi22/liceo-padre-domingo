import { Margin } from "@/components/Margin";
import Counter from "@/utils/IncrementNumber";
import { BANER_INFO, INFRAESTRUCTURA_INFO, LIST_INFO } from "@/utils/consts";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              excepturi, ullam quis qui, earum adipisci, impedit nam voluptas
              consectetur laboriosam eligendi nostrum animi. Voluptas,
              dignissimos? Quidem cum in recusandae optio autem! Soluta
              quibusdam explicabo tempora laudantium minima, repudiandae
              praesentium beatae. Quisquam, rem nihil dignissimos rerum numquam
              tenetur sunt ex commodi culpa maiores nam dolorum necessitatibus
              placeat delectus officiis deleniti assumenda dolores omnis
              temporibus voluptate totam, corporis quasi consequuntur?
              Doloremque quaerat totam ab eius in atque nihil facere blanditiis
              odit rerum.
            </p>
          </div>
        </section>
      </Margin>

      <section
        className="h-screen w-full md:h-[30vh]"
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
        <div className="flex h-full w-full flex-col items-center justify-between px-[180px] md:flex-row md:gap-16">
          {BANER_INFO.map(({ text, value }) => (
            <div
              key={text}
              className="flex h-[30vh] w-full flex-col-reverse items-center justify-center gap-2"
            >
              <h2 className="text-white">{text}</h2>
              <span className="text-7xl text-light-brown">
                <Counter value={value} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="infraestructura" className="bg-white">
        <Margin>
          <div className="flex flex-col gap-10 py-10">
            <div id="infraestructura" className="px-5">
              <MainTitle text="INFRAESTRUCTURA" />
            </div>
            <p className="px-5">
              Se trata de dos edificaciones independientes, entre ambas cuentan
              con 23 salones, 15 baños, dos cantina, espacios abiertos de
              recreación, gimnasio cerrado, biblioteca, dos salas de proyección,
              salón de dibujo, sala de informática, dos laboratorios de física,
              química y biología, oficinas administrativas, amplia
              recepción,sala de reuniones, entre otras. Y además tiene
              instalaciones para la accesibilidad de acuerdo a la Ley de
              accesibilidad.
            </p>

            <section className="flex flex-col gap-5 px-5 md:flex-row md:gap-28">
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
