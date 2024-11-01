export const PAGES_ENDPONTS = [
  {
    name: "INICIO",
    href: "/",
    path: (
      <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>
    ),
  },
  {
    name: "NOSOTROS",
    href: "/nosotros",
    path: (
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
    ),
  },
  {
    name: "ACTIVIDADES",
    href: "/actividades",
    path: (
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
    ),
  },

  {
    name: "NOTICIAS",
    href: "/noticias",
    path: (
      <path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM14 9H18V7H14V9ZM18 13H14V11H18V13ZM6 15V17L18 17V15L6 15Z"></path>
    ),
  },
  {
    name: "ALUMNOS",
    href: "/alumnos",
    path: (
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
    ),
  },
  {
    name: "CONTACTO",
    href: "/contacto",
    path: (
      <path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path>
    ),
  },
];

export const BANER_INFO = [
  {
    text: "Alumnos en 2023",
    value: 320,
  },
  {
    text: "Años",
    value: 13,
  },
  {
    text: "Egresados",
    value: 4212,
  },
];

import nosotros from "/public/icons/nosotrosIcon.png";
import educacion from "/public/icons/educacionIcon.png";
import infraestructura from "/public/icons/infraestructuraIcon.png";
import noticias from "/public/icons/noticiasIcon.png";

export const CARDS_INFO = [
  {
    title: "NOSOTROS",
    text: "Conoce en profundidad el liceo, sus valores, programas educativos y el equipo que trabaja por una experiencia educativa integral.",
    img: nosotros,
    href: "/nosotros/#quienes-somos",
  },
  {
    title: "PROPUESTA EDUCATIVA",
    text: "Explora nuestra propuesta educativa, diseñada para brindar una formación integral que potencia habilidades académicas y valores esenciales.",
    img: educacion,
    href: "/nosotros/#propuesta-educacional",
  },
  {
    title: "INFRAESTRUCTURA",
    text: "Descubre nuestra infraestructura: aulas equipadas, laboratorios modernos, espacios deportivos y todo lo necesario para una experiencia educativa completa y enriquecedora.",
    img: infraestructura,
    href: "/nosotros/#infraestructura",
  },
  {
    title: "NOTICIAS",
    text: "Mantente al tanto de las últimas noticias del liceo. Accede aquí para ver eventos, actividades, logros estudiantiles y mucho más.",
    img: noticias,
    href: "/nosotros/#infraestructura",
  },
];

export const LIST_INFO = [
  {
    id: 1,
    title: "Salones con luz natural, aire acondicionado y televisión",
  },
  {
    id: 2,
    title: "Dos laboratiorios equipados",
  },
  {
    id: 3,
    title: "Biblioteca",
  },
  {
    id: 4,
    title: "Dos cantinas",
  },
  {
    id: 5,
    title: "Dos amplios patios",
  },
  {
    id: 6,
    title: "Aria de deportes y salon de actos",
  },
];

import liceo1 from "@/public/liceo2.jpg";
import liceo2 from "@/public/liceo3.jpg";
import liceo3 from "/public/liceo4.jpg";

export const INFRAESTRUCTURA_INFO = [
  {
    img: liceo1,
  },
  {
    img: liceo2,
  },
  {
    img: liceo3,
  },
];

export const mailPath = (
  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
);
export const ubiPath = (
  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
);
export const phonePath = (
  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
);

import { ActividadesCardProps, HorariosProps } from "@/types/types";

import septimoUNO from "/public/horarios/7-1.png";
import septimoDOS from "/public/horarios/7-2.png";
import septimoTRES from "/public/horarios/7-3.png";
import octavoUNO from "/public/horarios/8-1.png";
import octavoDOS from "/public/horarios/8-2.png";
import novenoUNO from "/public/horarios/9-1.png";
import novenoDOS from "/public/horarios/9-2.png";
import cuartoUNO from "/public/horarios/4-1.png";
import cuartoDOS from "/public/horarios/4-2.png";
import quintoB from "/public/horarios/5-B.png";
import quintoC from "/public/horarios/5-C.png";
import quintoH from "/public/horarios/5-H.png";
import sextoA from "/public/horarios/6-A.png";
import sextoD from "/public/horarios/6-D.png";
import sextoI from "/public/horarios/6-I.png";
import sextoM from "/public/horarios/6-M.png";

export const HORARIOS: HorariosProps[] = [
  {
    curso: "7°1",
    horarios: septimoUNO,
  },
  {
    curso: "7°2",
    horarios: septimoDOS,
  },
  {
    curso: "7°3",
    horarios: septimoTRES,
  },
  {
    curso: "8°1",
    horarios: octavoUNO,
  },
  {
    curso: "8°2",
    horarios: octavoDOS,
  },
  {
    curso: "9°1",
    horarios: novenoUNO,
  },
  {
    curso: "9°2",
    horarios: novenoDOS,
  },
  {
    curso: "1° EMS 1 (4°1)",
    horarios: cuartoUNO,
  },
  {
    curso: "1° EMS 2 (4°2)",
    horarios: cuartoDOS,
  },
  {
    curso: "5°B",
    horarios: quintoB,
  },
  {
    curso: "5°C",
    horarios: quintoC,
  },
  {
    curso: "5°H",
    horarios: quintoH,
  },
  {
    curso: "6°A",
    horarios: sextoA,
  },
  {
    curso: "6°D",
    horarios: sextoD,
  },
  {
    curso: "6°I",
    horarios: sextoI,
  },
  {
    curso: "6°M",
    horarios: sextoM,
  },
];

// ICONS
import ingles from "/public/icons/inglesIcon.png";
import coro from "/public/icons/coroIcon.png";
import voluntariado from "/public/icons/voluntariadoIcon.png";
import handball from "/public/icons/handballIcon.png";
import futbol from "/public/icons/futbolIcon.png";
import voleibol from "/public/icons/voleibolIcon.png";
import basquet from "/public/icons/basquetIcon.png";

// AJEDREZ imgs
import ajedrezImg1 from "@/public/deportes.jpg";

export const ACTIVIDADES_DATA: ActividadesCardProps[] = [
  {
    id: "ingles",
    title: "INGLES ANGLO",
    shortDescription:
      "Preparamos a nuestros alumnos para exámenes internacionales y diplomas que exigen las Universidades",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis iure, nisi numquam laborum ea voluptate sit, quas, nobis hic nihil! Veniam vel tenetur deserunt. Nisi deserunt accusamus illo dolorum, fugiat tempore fuga, omnis saepe autem veritatis eos corporis, assumenda dolorem aut. Dolores atque distinctio nihil fugit ipsum quaerat enim?",
    icon: ingles,
    images: [ajedrezImg1, ajedrezImg1],
  },
  {
    id: "coro",
    title: "CORO Y BAILE",
    shortDescription: "Introduccion sobre la actividad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis iure, nisi numquam laborum ea voluptate sit, quas, nobis hic nihil! Veniam vel tenetur deserunt. Nisi deserunt accusamus illo dolorum, fugiat tempore fuga, omnis saepe autem veritatis eos corporis, assumenda dolorem aut. Dolores atque distinctio nihil fugit ipsum quaerat enim?",
    icon: coro,
    images: [ajedrezImg1, ajedrezImg1],
  },
  {
    id: "voluntariado",
    title: "VOLUNTARIADO",
    shortDescription: "Introduccion sobre la actividad",
    description:
      "Inspirados en el legado del Padre Domingo y su incansable labor por el bien común, en nuestro liceo fomentamos el voluntariado como un pilar fundamental de nuestra propuesta educativa. A través de estas actividades, buscamos que los estudiantes desarrollen un sentido de solidaridad y compromiso social, aprendiendo el valor de ayudar a quienes más lo necesitan. El voluntariado no solo permite a nuestros jóvenes crecer como personas, sino también construir una comunidad más justa y empática, en la que puedan marcar una diferencia y vivir los valores franciscanos en su día a día.",
    icon: voluntariado,
    images: [ajedrezImg1],
  },

  {
    id: "handball",
    title: "HANDBALL",
    shortDescription: "Introduccion sobre la actividad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis iure, nisi numquam laborum ea voluptate sit, quas, nobis hic nihil! Veniam vel tenetur deserunt. Nisi deserunt accusamus illo dolorum, fugiat tempore fuga, omnis saepe autem veritatis eos corporis, assumenda dolorem aut. Dolores atque distinctio nihil fugit ipsum quaerat enim?",
    icon: handball,
    images: [ajedrezImg1, ajedrezImg1],
  },
  {
    id: "futbol",
    title: "FUTBOL",
    shortDescription: "Introduccion sobre la actividad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis iure, nisi numquam laborum ea voluptate sit, quas, nobis hic nihil! Veniam vel tenetur deserunt. Nisi deserunt accusamus illo dolorum, fugiat tempore fuga, omnis saepe autem veritatis eos corporis, assumenda dolorem aut. Dolores atque distinctio nihil fugit ipsum quaerat enim?",
    icon: futbol,
    images: [ajedrezImg1, ajedrezImg1],
  },
  {
    id: "basquetbol",
    title: "BASQUETBOL",
    shortDescription: "Introduccion sobre la actividad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis iure, nisi numquam laborum ea voluptate sit, quas, nobis hic nihil! Veniam vel tenetur deserunt. Nisi deserunt accusamus illo dolorum, fugiat tempore fuga, omnis saepe autem veritatis eos corporis, assumenda dolorem aut. Dolores atque distinctio nihil fugit ipsum quaerat enim?",
    icon: basquet,
    images: [ajedrezImg1, ajedrezImg1],
  },
  {
    id: "voleibol",
    title: "VOLEIBOL",
    shortDescription: "Introduccion sobre la actividad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis iure, nisi numquam laborum ea voluptate sit, quas, nobis hic nihil! Veniam vel tenetur deserunt. Nisi deserunt accusamus illo dolorum, fugiat tempore fuga, omnis saepe autem veritatis eos corporis, assumenda dolorem aut. Dolores atque distinctio nihil fugit ipsum quaerat enim?",
    icon: voleibol,
    images: [ajedrezImg1, ajedrezImg1],
  },
];
