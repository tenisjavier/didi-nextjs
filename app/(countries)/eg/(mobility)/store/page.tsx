"use client";
import React, { useEffect, useState } from "react";
import QrCode from "@/components/Qr";

//? builder will return the array of components fetch by db by pathname

const Store = () => {
  return (
    <>
      <QrCode
        title={"قم بتنزيل تطبيقنا عن طريق مسح رمز الاستجابة السريعة "}
        desc={"احصل على رحلات آمنة وسريعة وبأسعار معقولة"}
      />
    </>
  );
};

export default Store;
