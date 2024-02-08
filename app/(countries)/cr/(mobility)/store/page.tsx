"use client";
import React, { useEffect, useState } from "react";
import QrCode from "@/components/Qr";

//? builder will return the array of components fetch by db by pathname

// export const metadata: Metadata = {
//   title: "Regístrate como Socio Conductor",
//   description: "Elmejor",
// };

const Store = () => {
  return (
    <>
      <QrCode
        title={"Escaneá el QR con tu celular"}
        desc={"Descargá DiDi Pasajero escaneando el código con tu celular."}
      />
    </>
  );
};

export default Store;
