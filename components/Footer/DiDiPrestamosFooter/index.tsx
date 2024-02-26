import React from "react";
import { getFooterPrestamosLinks } from "@/config/footer/footer-prestamos-config";
import FooterItem from "../DiDiPrestamosFooter/FooterItem";
import FooterColumn from "./FooterColumn";
import Image from "next/image";

interface DiDiCreditFooterProps { }

const DiDiCreditFooter: React.FC<DiDiCreditFooterProps> = ({ }) => {
  const countryCode = "mx";
  const { contactanos, regulacion, blog, siguenos } =
    getFooterPrestamosLinks(countryCode);

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
              DiDi Pay, S.A. de C.V. es una entidad supervisada por la Procuraduría Federal del Consumidor (PROFECO) y obligada a cumplir
              conforme a lo discpuesto en la Ley de Transparencia y Ordenamiento de los Servicios Financieros.
            </p>
            <p>
              Cuide su capacidad de pago, generalmente sus pagos por créditos no debe de exceder en conjunto del 35% de sus ingresos periódicos, los
              costos por mora son muy elevados.
            </p>
            <p>
              Incumplir con sus obligaciones te puede generar comisiones e intereses moratorios
            </p>
            <p>
              ¹ CAT promedio informativo 315% sin IVA
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

export default DiDiCreditFooter;
