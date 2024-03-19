const redirectsPaths = [
  {
    source: "/au/cities/",
    destination: "/au/driver/cities/",
    permanent: true,
  },
  {
    source: `/au/driver/driver-:path`,
    destination: `/au/driver/cities/:path`,
    permanent: true,
  },
  {
    source: "/mx/ciudades/",
    destination: "/mx/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/co/ciudades/",
    destination: "/co/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/cr/ciudades/",
    destination: "/cr/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/do/ciudades/",
    destination: "/do/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/pa/ciudades/",
    destination: "/pa/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/ec/ciudades/",
    destination: "/ec/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/cl/ciudades/",
    destination: "/cl/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/ar/ciudades/",
    destination: "/ar/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/pe/ciudades/",
    destination: "/pe/conductor/ciudades/",
    permanent: true,
  },
  {
    source: "/mx/food/repartidores/linea-de-soporte-247/",
    destination: "/mx/food/contacto/",
    permanent: true,
  },
  {
    source: "/mx/conductor/didi-flex/",
    destination: "/mx/conductor/didi-pon-tu-precio/",
    permanent: true,
  },
  {
    source: `/mx/food/restaurantes/promociones-y-campanas/`,
    destination: `/mx/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/co/food/restaurantes/promociones-y-campanas/`,
    destination: `/co/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/cr/food/restaurantes/promociones-y-campanas/`,
    destination: `/cr/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/mx/food/restaurantes/descarga/`,
    destination: `/mx/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/mx/food/colonia/`,
    destination: `/mx/food/`,
    permanent: true,
  },
  {
    source: `/thejourney/`,
    destination: `/`,
    permanent: true,
  },
  {
    source: `/co/food/restaurantes/descarga/`,
    destination: `/co/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/cr/food/restaurantes/descarga/`,
    destination: `/cr/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/pe/food/restaurantes/descarga/`,
    destination: `/pe/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/club-repartidores/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/club-repartidores/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/cr/food/repartidores/club-repartidores/`,
    destination: `/cr/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/repartidores/club-repartidores/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/pe/food/repartidores/club-repartidores/`,
    destination: `/pe/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/rendimiento/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/cr/food/repartidores/rendimiento/`,
    destination: `/cr/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/repartidores/rendimiento/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/pe/food/repartidores/rendimiento/`,
    destination: `/pe/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/ganancias/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/cr/food/repartidores/ganancias/`,
    destination: `/cr/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/repartidores/ganancias/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/pe/food/repartidores/ganancias/`,
    destination: `/pe/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/seguridad/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/cr/food/repartidores/seguridad/`,
    destination: `/cr/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/repartidores/seguridad/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/pe/food/repartidores/seguridad/`,
    destination: `/pe/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/registro/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/cr/food/repartidores/registro/`,
    destination: `/cr/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/repartidores/registro/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/pe/food/repartidores/registro/`,
    destination: `/pe/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/restaurantes/guias-educacionales/:path*`,
    destination: `/co/food/restaurantes/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/cr/food/restaurantes/guias-educacionales/:path*`,
    destination: `/cr/food/restaurantes/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/pe/food/restaurantes/guias-educacionales/:path*`,
    destination: `/pe/food/restaurantes/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/mx/food/restaurantes/guias-educacionales/:path*`,
    destination: `/mx/food/restaurantes/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/co/food/repartidores/guias-educacionales/:path*`,
    destination: `/co/food/repartidores/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/cr/food/repartidores/guias-educacionales/:path*`,
    destination: `/cr/food/repartidores/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/pe/food/repartidores/guias-educacionales/:path*`,
    destination: `/pe/food/repartidores/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/mx/food/repartidores/guias-educacionales/:path*`,
    destination: `/mx/food/repartidores/preguntas-frecuentes/:path*`,
    permanent: true,
  },
  {
    source: `/ru/`,
    destination: `/`,
    permanent: true,
  },
  {
    source: `/ru/:path*`,
    destination: `/`,
    permanent: true,
  },
  {
    source: `/do/food/`,
    destination: `/mx/food/`,
    permanent: true,
  },
  {
    source: `/do/food/:path*`,
    destination: `/mx/food/:path*`,
    permanent: true,
  },
  {
    source: `/cr/food/restaurantes/registro/`,
    destination: `https://www.didi-food.com/es-CR/store`,
    permanent: true,
  },
  {
    source: `/co/food/restaurantes/registro/`,
    destination: `https://www.didi-food.com/es-CO/store`,
    permanent: true,
  },
  {
    source: `/mx/food/restaurantes/registro/`,
    destination: `https://page.didiglobal.com/public-biz/pc-login/2.0.0/index.html?source=70001&appid=50002&role=13&country_id=484&lang=es-MX&redirectUrl=%2F%2Fcrm.didi-food.com%2Fcrm%2FselfEntry%2Fpassport%2FsetCookie%3FjumpPage%3Dhttps%253A%252F%252Fwww.didi-food.com%252Fes-MX%252Fstore%252Fself-onboarding%252Flist#`,
    permanent: true,
  },
  {
    source: `/cl/food/`,
    destination: `/mx/food/`,
    permanent: true,
  },
  {
    source: `/cl/food/:path*`,
    destination: `/mx/food/:path*`,
    permanent: true,
  },
  {
    source: `/mx/seguridad/conductores/funciones/`,
    destination: `/mx/seguridad/conductores/`,
    permanent: true,
  },
  {
    source: `/mx/seguridad/conductores/funciones/:path*`,
    destination: `/mx/seguridad/conductores/:path*`,
    permanent: true,
  },
  {
    source: `/pa/driver/`,
    destination: `/pa/conductor/`,
    permanent: true,
  },
  {
    source: `/pa/driver/:path*`,
    destination: `/pa/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/cr/driver/`,
    destination: `/cr/conductor/`,
    permanent: true,
  },
  {
    source: `/cr/driver/:path*`,
    destination: `/cr/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/do/driver/`,
    destination: `/do/conductor/`,
    permanent: true,
  },
  {
    source: `/do/driver/:path*`,
    destination: `/do/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/ec/driver/`,
    destination: `/ec/conductor/`,
    permanent: true,
  },
  {
    source: `/ec/driver/:path*`,
    destination: `/ec/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/co/driver/`,
    destination: `/co/conductor/`,
    permanent: true,
  },
  {
    source: `/co/driver/:path*`,
    destination: `/co/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/ar/driver/`,
    destination: `/ar/conductor/`,
    permanent: true,
  },
  {
    source: `/ar/driver/:path*`,
    destination: `/ar/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/cl/driver/`,
    destination: `/cl/conductor/`,
    permanent: true,
  },
  {
    source: `/cl/driver/:path*`,
    destination: `/cl/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/pe/driver/`,
    destination: `/pe/conductor/`,
    permanent: true,
  },
  {
    source: `/pe/driver/:path*`,
    destination: `/pe/conductor/:path*`,
    permanent: true,
  },
  {
    source: `/mx/clubdidi/`,
    destination: `/mx/didimas/`,
    permanent: true,
  },
  {
    source: `/mx/clubdidi/`,
    destination: `/mx/didimas/`,
    permanent: true,
  },
  {
    source: `/mx/clubdidi/:path*`,
    destination: `/mx/didimas/:path*`,
    permanent: true,
  },
  {
    source: `/mx/didimas/privauto`,
    destination: `/mx/didimas/punto`,
    permanent: true,
  },
  {
    source: `/mx/didipay-preguntas-frecuentes/`,
    destination: `/mx/didipay/preguntas-frecuentes/`,
    permanent: true,
  },
  {
    source: `/cr/leones/`,
    destination: `/cr/`,
    permanent: true,
  },
  {
    source: `/mx/food/ciudad/ciudad-de-mexico-cmx/`,
    destination: `/mx/food/ciudad/ciudad-de-mexico-cdmx/`,
    permanent: true,
  },
  // 301 restaurantes
  {
    source: `/cl/food/store/`,
    destination: `/cl/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/cr/food/store/`,
    destination: `/cr/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/pe/food/store/`,
    destination: `/pe/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/do/food/store/`,
    destination: `/do/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/co/food/store/`,
    destination: `/co/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/mx/food/store/`,
    destination: `/mx/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/mx/food/en/store/`,
    destination: `/mx/food/restaurantes/`,
    permanent: true,
  },
  {
    source: `/mx/food/en/`,
    destination: `/mx/food/`,
    permanent: true,
  },
  // 301 repartidores
  {
    source: `/cl/food/delivery/`,
    destination: `/cl/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/cr/food/delivery/`,
    destination: `/cr/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/pe/food/delivery/`,
    destination: `/pe/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/do/food/delivery/`,
    destination: `/do/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/co/food/delivery/`,
    destination: `/co/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/delivery/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  {
    source: `/mx/food/en/delivery/`,
    destination: `/mx/food/repartidores/`,
    permanent: true,
  },
  // 301 acerca
  {
    source: `/cl/food/about/`,
    destination: `/cl/food/acerca-didi-food/`,
    permanent: true,
  },
  {
    source: `/cr/food/about/`,
    destination: `/cr/food/acerca-didi-food/`,
    permanent: true,
  },
  {
    source: `/pe/food/about/`,
    destination: `/pe/food/acerca-didi-food/`,
    permanent: true,
  },
  {
    source: `/do/food/about/`,
    destination: `/do/food/acerca-didi-food/`,
    permanent: true,
  },
  {
    source: `/co/food/about/`,
    destination: `/co/food/acerca-didi-food/`,
    permanent: true,
  },
  {
    source: `/mx/food/about/`,
    destination: `/mx/food/acerca-didi-food/`,
    permanent: true,
  },
  // 301 contacto
  {
    source: `/cl/food/contact/`,
    destination: `/cl/food/contacto/`,
    permanent: true,
  },
  {
    source: `/cr/food/contact/`,
    destination: `/cr/food/contacto/`,
    permanent: true,
  },
  {
    source: `/pe/food/contact/`,
    destination: `/pe/food/contacto/`,
    permanent: true,
  },
  {
    source: `/do/food/contact/`,
    destination: `/do/food/contacto/`,
    permanent: true,
  },
  {
    source: `/co/food/contact/`,
    destination: `/co/food/contacto/`,
    permanent: true,
  },
  {
    source: `/mx/food/contact/`,
    destination: `/mx/food/contacto/`,
    permanent: true,
  },
  {
    source: `/eg/driver/driver-help/:path*`,
    destination: `/eg/help-center/:path*`,
    permanent: true,
  },
  {
    source: `/nz/driver/help/:path*`,
    destination: `/nz/help-center/:path*`,
    permanent: true,
  },
  {
    source: `/nz/offers/`,
    destination: `/nz/`,
    permanent: true,
  },
  {
    source: `/hk/:path*`,
    destination: `https://hk.didiglobal.com/`,
    permanent: true,
  },
  {
    source: `/hk/`,
    destination: `https://hk.didiglobal.com/`,
    permanent: true,
  },
  {
    source: `/ar/lugares/`,
    destination: `/ar/`,
    permanent: true,
  },
  {
    source: `/ar/lugares/:path*`,
    destination: `/ar/`,
    permanent: true,
  },
  {
    source: `/cl/lugares/`,
    destination: `/cl/`,
    permanent: true,
  },
  {
    source: `/cl/lugares/:path*`,
    destination: `/cl/`,
    permanent: true,
  },
  {
    source: `/pe/lugares/`,
    destination: `/pe/`,
    permanent: true,
  },
  {
    source: `/pe/lugares/:path*`,
    destination: `/pe/`,
    permanent: true,
  },
  {
    source: `/co/conductor/didi-flex/`,
    destination: `/co/conductor/didi-pon-tu-precio/`,
    permanent: true,
  },
  {
    source: `/pe/conductor/didi-flex/`,
    destination: `/pe/conductor/didi-pon-tu-precio/`,
    permanent: true,
  },
  {
    source: `/mx/food/privacidad/`,
    destination: `/mx/legal/`,
    permanent: true,
  },
  {
    source: `/co/food/privacidad/`,
    destination: `/co/legal/`,
    permanent: true,
  },
  {
    source: `/pe/food/privacidad/`,
    destination: `/pe/legal/`,
    permanent: true,
  },
  {
    source: `/cr/food/privacidad/`,
    destination: `/cr/legal/`,
    permanent: true,
  },
  {
    source: `/mx/food/terminos-y-condiciones/`,
    destination: `/mx/legal/`,
    permanent: true,
  },
  {
    source: `/co/food/terminos-y-condiciones/`,
    destination: `/co/legal/`,
    permanent: true,
  },
  {
    source: `/cr/food/terminos-y-condiciones/`,
    destination: `/cr/legal/`,
    permanent: true,
  },
  {
    source: `/pe/food/terminos-y-condiciones/`,
    destination: `/pe/legal/`,
    permanent: true,
  },
];

module.exports = redirectsPaths;
