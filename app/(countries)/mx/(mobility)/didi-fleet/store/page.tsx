"use client";
import React from "react";
import QrCode from "@/components/Qr";
import QrCodeFleet from "@/components/Qr-fleet";

//? builder will return the array of components fetch by db by pathname

// export const metadata: Metadata = {
//   title: "Regístrate como Socio Conductor",
//   description: "Elmejor",
// };

const Store = () => {
  return (
    <>
      <QrCodeFleet
        title={"Escaneá el QR con tu celular"}
        desc={"Descargá DiDi Pasajero escaneando el código con tu celular."}
      />
    </>
  );
};

export default Store;
