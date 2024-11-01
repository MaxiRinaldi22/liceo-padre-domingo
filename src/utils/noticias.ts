import { StaticImageData } from "next/image";

type Noticias = {
    title: string;
    date: string;
    text: string;
    img: StaticImageData;
}


import felizAno from "/public/noticias/felizAno.jpg";

export const NOTICIAS_INFO: Noticias[] = [
    {
        title: "Lorem ipsum dolor sit",
        date: "Octubre 25, 2024",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui veritatis vel, molestias quasi velit perferendis obcaecati quaerat nobis corporis.",
        img: felizAno,
    },
    {
        title: "Lorem ipsum dolor sit",
        date: "Octubre 25, 2024",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui veritatis vel, molestias quasi velit perferendis obcaecati quaerat nobis corporis.",
        img: felizAno,
    },
    {
        title: "Lorem ipsum dolor sit",
        date: "Octubre 25, 2024",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui veritatis vel, molestias quasi velit perferendis obcaecati quaerat nobis corporis.",
        img: felizAno,
    },
    {
        title: "Lorem ipsum dolor sit",
        date: "Octubre 25, 2024",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui veritatis vel, molestias quasi velit perferendis obcaecati quaerat nobis corporis.",
        img: felizAno,
    }

]