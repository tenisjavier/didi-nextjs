"use client";
import React from "react";
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
        QRUrl="https://global-rides-passenger.onelink.me/xNlo"
        title={"Escaneá el QR con tu celular"}
        desc={"Descargá DiDi Food escaneando el código con tu celular"}
      />
    </>
  );
};

export default Store;
