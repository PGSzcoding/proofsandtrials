import { Clock, Eye, Mail, MapPin, Phone, RefreshCcw, Target } from "lucide-react";
import misionImage from "../assets/historia.webp";
import visionImage from "../assets/vision.webp";

export const menuItems = [
      { label: "Inicio", to: "/#inicio", section: "inicio" },
      { label: "Nosotros", to: "/#nosotros", section: "nosotros" },
      { label: "Servicios", to: "/servicios#top", section: "servicios" },
      { label: "Contacto", to: "/#contacto", section: "contacto" },
    ];

export const contactInfo = [
  {
    label: "Telefonos",
    icon: Phone,
    array: [
     {val: "+57 313 323 81 46",href:'https://wa.me/+573133238146'},
     {val:  "+57 313 487 99 83", href: "https://wa.me/+573134879983"},
     {val: "+57 315 431 48 00", href: "https://wa.me/+573154314800"}
    ]
  },
  {
    label: "Email",
    icon: Mail,
    array: [
     {val: "gerencia@proofsandtrials.com",href:'mailto:gerencia@proofsandtrials.com'},
     {val:  "comercial@proofsandtrials.com", href: "comercial@proofsandtrials.com"},
    ]
  },
  {
    label: "Direccion",
    value: "Calle 7 No 87b 53 –  Bogotá D. C  ",
    icon: MapPin,
  },
  {
    label: "Horario",
    value: "Servicio 24/7 a Nivel Nacional ",
    icon: Clock
  }
];

export const AboutInfo = [
    {
        image: misionImage,
        icon: RefreshCcw,
        title:"Nuestra Historia",
        text:"Proofs And Trials P&T SAS es una compañía colombiana con más de 7 años de experiencia, especializada en la realización de ensayos no destructivos mediante diferentes métodos de inspección, garantizando confiabilidad, seguridad y cumplimiento normativo. Nuestro compromiso es brindar soluciones técnicas de alta calidad y generar relaciones de largo plazo con nuestros clientes.",
        variant:"blue",
        i:1
    },
    {
        icon:Target,
        title:"Nuestra Misión",
        text:"Brindar servicios de ensayos no destructivos, inspecciones y certificaciones técnicas con altos estándares de calidad, seguridad y confiabilidad, garantizando el cumplimiento normativo y la satisfacción de nuestros clientes a nivel nacional.",
        variant:"dark",
        i:0
    },
    {
        image:visionImage,
        icon: Eye,
        title:"Nuestra Visión",
        text:"Consolidarnos como la empresa referente en Colombia para el año 2030 en ensayos no destructivos e inspecciones técnicas, destacándonos por la excelencia operativa, el cumplimiento normativo y la satisfacción de nuestros clientes.",
        variant:"blue",
        i:1
    }
]

/*
 array: [
     {val: "GERENCIAS@PYTCOL.COM", href:'mailto:gerenciapytsas@gmail.com'},
     {val:  "COMERCIAL@PYTCOL.COM", href: "mailto:gerenciapytsas@gmail.com"}
    ]
*/

export const KeyWords = [
    "Líquidos penetrantes",
    "Partículas magnéticas",
    "Ultrasonido",
    "Inspección visual",
    "Certificación de equipos",
    "Tabla de aforo",
    "Líneas de vida",
    "Hidrostática",
  ];

export const CertificateOptions = [
    {
      label: "Prueba hidrostática anual",
      value: "hidrostatica-anual",
    },
     {
      label: "Prueba hidrostática 5 años",
      value: "hidrostatica-5",
    },
    {
      label: "Certificación en Elementos de Izaje",
      value: "izaje",
    },
    {
      label: "Soldadura",
      value: "soldadura",
    },
    {
      label: "Partículas Magnéticas",
      value: "particula_magneticas",
    },
  ]