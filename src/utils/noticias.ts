import { StaticImageData } from "next/image";

type Noticias = {
    title: string;
    date: string;
    text: string;
    img: StaticImageData;
}


import escudo from "/public/escudo.png";

export const NOTICIAS_INFO: Noticias[] = [
    {
        title: "Nueva pagina web",
        date: "Noviembre 18, 2024",
        text: "Estrenamos nuestra nueva página web, brindando información actualizada y recursos educativos para estudiantes, familias y docentes.",
        img: escudo,
    },
    
    
]