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
        title={"قم بتنزيل تطبيقنا عن طريق مسح رمز الاستجابة السريعة "}
        desc={"احصل على رحلات آمنة وسريعة وبأسعار معقولة"}>
      </QrCode>
    </>
  );
};

export default Store;
