import quintaRuedaImage from "../assets/servicios/quinta_rueda.png";
import kingpinImage from "../assets/servicios/king_pin.png";
import hermeticidadImage from "../assets/servicios/hermeticidad.png";
import lineasVidaImage from "../assets/servicios/lineas_vida.png";
import cadenaImage from "../assets/servicios/s_cadenas.png";
import grilletrImage from "../assets/servicios/s_2.png";
import rachesImage from "../assets/servicios/s_3.png";
import pasadoresImage from "../assets/servicios/s_4.png";
import platosImage from "../assets/servicios/s_5.png";
import ganchoImage from "../assets/servicios/s_6.png";
import poleasImage from "../assets/servicios/s_7.png";
import anillosImage from "../assets/servicios/s_8.png";
import tornamesaImage from "../assets/servicios/s_9.png";
import trenImage from "../assets/servicios/s_10.png";

import type { NormsProps, TransporteItem } from "../types/services";

export interface ServiceType {
    title: string,
    subtitle: string,
    items: TransporteItem[]
}
export const services:ServiceType[] = [
    {
       title: 'Sector Transporte',
       subtitle: "(Carga Seca y Liquida)",
       items: [
                {
                    title: "Certificación de quinta rueda",
                    description: "Verificación técnica del sistema de enganche para asegurar una operación segura entre el tractocamión y el semirremolque.",
                    image: quintaRuedaImage,
                },
                
                 
                {
                    title: "Certificación de king pin",
                    description:"Inspección del perno rey para garantizar su correcto estado y funcionamiento conforme a la normativa vigente.",
                    image: kingpinImage,
                },
                {
                    title: "Pruebas de hermeticidad e hidrostáticas",
                    description:"Ensayos especializados para verificar la estanqueidad y resistencia de sistemas y componentes, especialmente en transporte de líquidos. ",
                    image: hermeticidadImage,
                },
                {
                    title: "Certificación de líneas de vida",
                    description:"Inspección y certificación de sistemas de protección contra caídas, garantizando la seguridad del personal. ",
                    image: lineasVidaImage,
                },
                {
                    title: "Certificación de tornamesa",
                    description:"Evaluación estructural y funcional del sistema de acople para prevenir fallas operativas",
                    image: tornamesaImage
                },
                {
                    title: "Certificación de tren de apoyo",
                    description:"Inspección técnica que asegura la estabilidad y seguridad del vehículo durante carga, descarga y estacionamiento.",
                    image: trenImage
                }
       ]
    },
    {
        title: 'Inspección Elementos de Izaje',
       subtitle: "Ejecutamos inspecciones especializadas de elementos de izaje mediante criterios técnicos y normativos, verificando su condición estructural, funcional y de seguridad para operaciones industriales y de construcción.",
       items: [
            {
                title: 'Cadenas',
                description: '',
                image: cadenaImage
            },
            {
                title: 'Grilletes',description: '',
                image: grilletrImage
            },
            {
                title: 'Raches',description: '',
                image: rachesImage
            },
            {
                title: 'Pasadores',description: '',
                image: pasadoresImage
            },
            {
                title: 'Platos',description: '',
                image: platosImage
            },
            {
                title: 'Gancho',description: '',
                image:ganchoImage
            },
            {
                title: 'Poleas',description: '',
                 image:poleasImage
            },
            {
                title: 'Anillos',description: '',
                image: anillosImage
            },
            
       ]
    },
    {
        title: 'Certificación de montacarga',
       subtitle: "Realizamos la certificación técnica de montacargas con el objetivo de garantizar la seguridad operativa, el correcto funcionamiento del equipo y el cumplimiento de las normas vigentes.",
       items: [
            {
                title: "Inspección de uñas",image: null,
                description: "Evaluación del estado estructural, desgaste y alineación de las uñas del montacargas para asegurar una manipulación segura de la carga. ",
            },
            {
                title: "Inspección de espejo",image: null,
                description: "Verificación del respaldo de carga (espaldar o espejo) para garantizar su integridad y correcta sujeción durante las maniobras"
            }
        ]
    }
]

export const servicesGalery = [
    {
    ...services[0].items[0],
    size: "md:col-span-2 ",
  },
  {
    ...services[0].items[2],
    size: "md:col-span-2 ",
  },
  {
    ...services[0].items[4],
    size: "md:col-span-2",
  },
  {
    ...services[0].items[5],
    size: "md:col-span-1",
  },
]

export const normasTransporte: NormsProps = {
    description: " Los procesos se ejecutan bajo las prácticas recomendadas por ASNT SNT-TC-1A  Ed2016. Asimismo, nuestros servicios cumplen con los requisitos establecidos por las normas técnicas vigentes:",
    norms: [
        {
            title: "ASTM A255/M-08 - ASME-VIII DIV1 APEN 8",
            description: "Inspección por líquidos penetrantes a materiales metálicos y soldaduras."
        },
        {
            title: "ASTM A275/M-08",
            description: "Inspección mediante partículas magnéticas."
        },
        {
            title: "SAE J700",
            description: "Requisitos dimensionales exactos para el perno rey (kingpin)"
        }
    ]
}

export const normasIzaje: NormsProps = {
    description: " Los procesos se ejecutan bajo las prácticas recomendadas por ASNT SNT-TC-1A  Ed2016. Asimismo, nuestros servicios cumplen con los requisitos establecidos por las normas técnicas vigentes:",
    norms: [
        {
            title: "ANSI/SAlA A92.2",
            description: "Certificación de camión canasta"
        },
        {
            title: "ANSI Z359.18",
            description: "Certificación líneas de vida de acuerdo a la normatividad para trabajo en alturas 4272/2021"
        }
    ]
}