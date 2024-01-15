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
        title={"Download DiDi Rides by scanning the QR code"}
        desc={"Get safe, fast and affordable rides"}>
      </QrCode>
    </>
  );
};

export default Store;
