type FooterTitles = "contactanos" | "regulacion" | "blog" | "siguenos";
type iconsType = "facebook" | "instagram" | "tiktok" | "twitter";

export type FooterLinks = {
  [key in FooterTitles]: {
    title?: string;
    items?: {
      text?: string;
      link?: string;
      icon?: iconsType;
    }[];
  };
};

type FooterContent = {
  footerLogo: {
    src: string;
    alt: string;
  },
  description: string;
};

interface AllFooterInterface {
  [countryCode: string]: FooterLinks & FooterContent;
}

const footerLinks: AllFooterInterface = {
  mx: {
    contactanos: {
      items: [
        {
          text: "Llámanos al: {800 953 3300}",
        },
        {
          text: "PROFECO",
          link: "https://www.gob.mx/profeco"
        },
        {
          text: "Soporte DiDi",
          link: "/mx/tarjeta-de-credito/preguntas-frecuentes/",
        },
      ],
      title: "Contáctanos",
    },
    regulacion: {
      items: [
        {
          text: "Despachos de Cobranza",
          link: "/mx/legal/despachos-de-cobranza-didi-prestamos",
        },
        { text: "Documentos Legales", link: "/mx/prestamos/contrato-y-caratula-v12-26-02-24.pdf" },
        {
          text: "Aviso de Privacidad",
          link: "https://privacycenter.didiglobal.com/MX/privacy-notice/9f268073ac1fa831f0d00b7c0e013971/Mexico",
        },
      ],
      title: "Regulación",
    },
    blog: {
      items: [],
    },
    siguenos: {
      items: [],
    },
    footerLogo: {
      src: "/images/logos/prestamos-logo.png",
      alt: "DiDi Prestamos Logo"
    },
    description: `DiDi Pay, S.A. de C.V. es una entidad supervisada por la Procuraduría Federal del Consumidor (PROFECO) y obligada a cumplir conforme a lo discpuesto en la Ley de Transparencia y Ordenamiento de los Servicios Financieros. \n

    Cuide su capacidad de pago, generalmente sus pagos por créditos no debe de exceder en conjunto del 35% de sus ingresos periódicos, los costos por mora son muy elevados. \n
    
    Incumplir con sus obligaciones te puede generar comisiones e intereses moratorios \n
    
    ¹ CAT promedio informativo 315% sin IVA`,
  },
};

const getFooterLoanLinks = (countryCode: string): FooterLinks & FooterContent => {
  return footerLinks[countryCode];
};

export { getFooterLoanLinks, type FooterContent };
