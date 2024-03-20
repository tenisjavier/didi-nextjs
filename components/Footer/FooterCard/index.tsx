import React from "react";
import FooterColumn, { FooterColumnProps } from "./FooterColumn";
import Image from "next/image";

interface FooterCardProps {
  contactanos: FooterColumnProps
  regulacion: FooterColumnProps
  blog: FooterColumnProps
  siguenos: FooterColumnProps
}

const FooterCard: React.FC<FooterCardProps> = ({ blog, contactanos, regulacion, siguenos }) => {

  return (
    <footer className="bg-gray-median text-white flex justify-center flex-col items-center">
      <div className="lg:gap-16 lg:p-24 p-6 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start justify-between">
          <FooterColumn title={contactanos.title} items={contactanos.items} />
          <FooterColumn title={regulacion.title} items={regulacion.items} />
          <div className="flex flex-col gap-3">
            <FooterColumn title={blog.title} items={blog.items} />
            <FooterColumn
              isColumn={false}
              title={siguenos.title}
              items={siguenos.items}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-24 w-full">
          <div>
            <Image
              src="/images/logos/didi-logo-card-white.png"
              alt="DiDi Credit"
              className="max-w-[168px] h-auto"
              width={168}
              height={168}
            />
            <p>
              © 2020 Regigold, S.A. DE C.V., SOFOM, E.N.R. (DiDi Card) es una
              entidad financiera registrada y supervisada por la Comisión
              Nacional para la Protección y Defensa de los Usuarios de Servicios
              Financieros y se encuentra sujeta a la supervisión de la Comisión
              Nacional Bancaria y de Valores, únicamente para efectos de lo
              dispuesto por el artículo 56 de la Ley General de Organizaciones y
              Actividades Auxiliares del Crédito.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-primary text-center py-6 px-6">
        <p>
          Regigold, S.A. DE C.V., SOFOM, E.N.R., Av. Paseo de la Reforma No.
          509, Piso 33, Col. Cuauhtémoc, CP 06500, Cuauhtémoc, CDMX.
        </p>
      </div>
    </footer>
  );
};

export default FooterCard;
