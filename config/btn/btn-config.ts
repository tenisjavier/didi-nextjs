// @desc: utility library for ctaButtons and oneLinks
import { CountryCode } from "@/typings";

interface SingleBtnInterface {
  drvLink: string;
  drvLinkQB?: string;
  motoLink?: string;
  motoText?: string;
  motoLinkQB?: string;
  paxLink: string;
  drvText: string;
  drvWhatsappLink?: string;
  drvWhatsappText?: string;
  paxText: string;
  fleetLink?: string;
  fleetText?: string;
  payLink?: string;
  payText?: string;
  payBusinessLink?: string;
  payBusinessText?: string;
  foodDeliveryLink?: string;
  foodDeliveryText?: string;
  foodBusinessLink?: string;
  foodBusinessText?: string;
  foodEaterLink?: string;
  foodEaterText?: string;
  foodEaterOnlineLink?: string;
  foodEaterOnlineText?: string;
  prestamosLink?: string;
  prestamosText?: string;
  entregaLink?: string;
  entregaText?: string;
  entregaBusinessLink?: string;
  entregaBusinessText?: string;
  creditText?: string;
  creditLink?: string;
}

interface AllBtnInterface {
  [countryCode: string]: SingleBtnInterface;
}

const btnLinks: AllBtnInterface = {
  en: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Download",
    paxText: "Download",
  },
  cl: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-cl",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
    entregaText: "Usa DiDi Entrega",
    entregaLink:
      "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
  },
  pe: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/pedriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-pe",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Regístrate como Repartidor",
    foodBusinessLink: "https://www.didi-food.com/es-PE/store",
    foodBusinessText: "Registra tu Restaurante",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Descarga DiDi Food",
  },
  ar: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-ar",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Registrate como Conductor",
    motoText: "Registrate en DiDi Moto",
    motoLink: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
    motoLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-moto-ar",
    paxText: "Descargá DiDi Pasajero",
    fleetText: "Descargá DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
  },
  co: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/codriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-co",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    motoText: "Regístrate en DiDi Moto",
    motoLink: "https://ssa-rides-driver.onelink.me/mbwy/codriverhero",
    motoLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-moto-co",
    paxText: "Descarga DiDi Pasajero",
    fleetText: "Descarga DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Regístrate como Repartidor",
    foodBusinessLink: "https://www.didi-food.com/es-CO/store",
    foodBusinessText: "Registra tu Restaurante",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Pide Comida, Descarga la App",
    entregaText: "Usa DiDi Entrega",
    entregaLink:
      "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
  },
  au: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/ukdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Drive with DiDi",
    paxText: "Ride with DiDi",
  },
  eg: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/egdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "انضم لكباتن دي دي",
    paxText: "احجز مشوارك مع دي دي",
  },
  do: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/dodriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-do",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    paxText: "Descarga DiDi Pasajero",
  },
  ec: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/ecdriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-ec",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate como Conductor",
    paxText: "Descarga DiDi Pasajero",
  },
  cr: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/crdriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-cr",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Registrate en DiDi Conductor",
    paxText: "Descargá DiDi Pasajero",
    fleetText: "Descargá DiDi Fleet",
    fleetLink: "http://fleet.onelink.me/tLtr/fleetmacregion",
    foodDeliveryLink: "https://global-food-courier.onelink.me/zzaY/delivery", //  https://www.didi-food.com/es-419/mobile-delivery/guide
    foodDeliveryText: "Regístrate como Repartidor",
    foodBusinessLink: "https://www.didi-food.com/es-CR/store",
    foodBusinessText: "Registrá tu Restaurante",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterText: "Descarga DiDi Food",
    foodEaterOnlineText: "Pide Comida sin App",
    foodEaterOnlineLink: "https://www.didi-food.com/es-CR/food/address/",
  },
  pa: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/padriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-pa",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    paxText: "Descarga DiDi Pasajero",
  },
  mx: {
    drvLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    drvLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-dvr-mx",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Regístrate en DiDi Conductor",
    motoText: "Regístrate en DiDi Moto",
    motoLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    motoLinkQB:
      "https://page.didiglobal.com/global/silver-bullet-online/didi-moto-mx",
    drvWhatsappLink: "https://ssa-rides-driver.onelink.me/mbwy/mxdriverhero",
    drvWhatsappText: "Regístrate con Whatsapp",
    paxText: "Descarga DiDi Pasajero",
    foodEaterText: "Descarga DiDi Food",
    foodEaterLink: "https://global-food-eater.onelink.me/4B2F/homepage",
    foodEaterOnlineText: "Pide Comida sin la App",
    foodEaterOnlineLink: "https://www.didi-food.com/es-MX/food/feed/",
    foodDeliveryLink:
      "https://page.didiglobal.com/global/silver-bullet-online/socio-repartidos-mx",
    foodDeliveryText: "Regístrate como Repartidor",
    foodBusinessLink: "https://www.didi-food.com/es-MX/store",
    foodBusinessText: "Registra tu Restaurante",
    fleetText: "Descarga DiDi Fleet",
    fleetLink: "https://fleet.onelink.me/jjQA/okks91lv",
    payText: "Descarga DiDi",
    payLink: "https://didi.onelink.me/Zkxc/didipaymx/",
    payBusinessLink:
      "https://page.didiglobal.com/public-biz/pc-login/3.0.7/index.html?lang=es-MX&role=5001&source=70001&appid=200026&redirectUrl=https%3A%2F%2Fdidipay.didiglobal.com%2Fmerchant%2Fapi%2Fouter%2Fuser%2Flogin%3FredirectUrl%3Dhttps%3A%2F%2Fdidipay.didiglobal.com#/",
    payBusinessText: "Iniciar Sesión",
    prestamosText: "Descarga DiDi Préstamos",
    prestamosLink: "https://global-cash.onelink.me/k8Zv/yf4oglpn",
    entregaText: "Usa DiDi Entrega",
    entregaLink:
      "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    creditText: "Solicitar en DiDi App",
    creditLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
  },
  nz: {
    drvLink: "https://anz-rides-driver.onelink.me/ixFb/nzdriverhero",
    paxLink: "https://global-rides-passenger.onelink.me/xNlo/globalhomepage",
    drvText: "Drive with DiDi",
    paxText: "Ride with DiDi",
  },
};

const getBtnLinks = (countryCode: CountryCode): SingleBtnInterface => {
  let links = btnLinks[countryCode];
  return links;
};

export { getBtnLinks };
