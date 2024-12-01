//Estructura de los datos de Array
/*{
        id: '',
        nombre: '',
        src: '',
        descripcion: '',
        ubicacion: '',
        habitaciones: '',
        banos: '',
        costo: ,
        smoke: ,
        pets: ,

    },*/

//Array con Datos de Venta
const propiedades_venta = [
  {
    id: "1",
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    id: "2",
    nombre: "Apartamento acojedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    id: "3",
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    id: "4",
    nombre: "Apartamento de lujo frente al mar",
    src: "https://www.arluxuryliving.com//imagenes/editor/agencia_58/f15cd5f85fd6fdb0d62179971381610d.JPG",
    descripcion:
      "Apartamento exclusivo con vista directa al mar y acabados de lujo en cada rincón.",
    ubicacion: "321 Ocean Drive, Coral Beach, FL 78901",
    habitaciones: 4,
    banos: 3,
    costo: "5.800",
    smoke: false,
    pets: false,
  },
  {
    id: "5",
    nombre: "Apartamento moderno con vista al mar",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/259564521.jpg?k=cf715259a47f40ebb21670ce2503c56be84627b717593067ae9dab95dcfe9628&o=&hp=1",
    descripcion:
      "Disfruta de un apartamento moderno con vista panorámica al océano y acceso a la playa.",
    ubicacion: "456 Ocean Breeze Avenue, Coastline City, FL 12345",
    habitaciones: 2,
    banos: 2,
    costo: "3.200",
    smoke: true,
    pets: true,
  },
  {
    id: "6",
    nombre: "Casa rústica en el campo",
    src: "https://cl.habcdn.com/photos/business/medium/3459d93c7a09e985694c6c4d69f80a34-296190.jpg",
    descripcion:
      "Acogedora casa rústica rodeada de naturaleza, ideal para desconectar del bullicio de la ciudad.",
    ubicacion: "789 Country Lane, Rustic Valley, TX 56789",
    habitaciones: 4,
    banos: 3,
    costo: "2.800",
    smoke: false,
    pets: true,
  },
  {
    id: "7",
    nombre: "Loft industrial en el centro de la ciudad",
    src: "https://preview.redd.it/hbne3bemeiq31.jpg?width=640&crop=smart&auto=webp&s=cb28b3dd9b7a136a6cecd72e455815717d98b1c3",
    descripcion:
      "Espacioso loft con diseño industrial y excelente ubicación cerca de restaurantes y museos.",
    ubicacion: "321 City Center Plaza, Downtown City, NY 12345",
    habitaciones: 1,
    banos: 1,
    costo: "2.000",
    smoke: true,
    pets: false,
  },
  {
    id: "8",
    nombre: "Villa de lujo con piscina privada",
    src: "https://media.vrbo.com/lodging/34000000/33330000/33321300/33321220/eb7a7a35.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    descripcion:
      "Exclusiva villa de lujo con piscina privada, amplios jardines y servicios premium.",
    ubicacion: "123 Paradise Road, Elite Villas, CA 90210",
    habitaciones: 5,
    banos: 4,
    costo: "7.800",
    smoke: false,
    pets: false,
  },
];

//Array con datos de Arriendo
const propiedades_arriendo = [
  {
    id: "1",
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    id: "2",
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    id: "3",
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    id: "4",
    nombre: "Apartamento moderno en el centro de la ciudad",
    src: "https://apartamento-moderno-con-vista-a-la-ciudad.sansalvador-city-hotels.com/data/Pictures/OriginalPhoto/13175/1317532/1317532609/picture-san-salvador-1.JPEG",
    descripcion:
      "Este apartamento está ubicado en el corazón de la ciudad, cerca de tiendas y restaurantes.",
    ubicacion: "456 Downtown Street, City Center, CA 78901",
    habitaciones: 3,
    banos: 2,
    costo: "3.000",
    smoke: false,
    pets: true,
  },
  {
    id: "5",
    nombre: "Loft en la azotea con vistas panorámicas",
    src: "https://hostaldelcentrotalca.com/images/loft-smart-panoramico-santiago.jpg",
    descripcion:
      "Impresionante loft en la azotea con vistas panorámicas de la ciudad y acabados de lujo.",
    ubicacion: "789 Skyline Boulevard, Highrise District, NY 34567",
    habitaciones: 2,
    banos: 1,
    costo: "3.500",
    smoke: true,
    pets: true,
  },
  {
    id: "6",
    nombre: "Casa unifamiliar con jardín privado",
    src: "https://content.arquitecturaydiseno.es/medio/2023/04/05/el-patio-central-de-esta-casa-nos-ha-provocado-una-nueva-necesidad-vital_4d8a9c33_230405104911_2000x1336.jpg",
    descripcion:
      "Hermosa casa unifamiliar con un jardín privado, ideal para una familia.",
    ubicacion: "234 Greenway Drive, Suburbia, TX 67890",
    habitaciones: 4,
    banos: 3,
    costo: "4.000",
    smoke: false,
    pets: false,
  },
  {
    id: "7",
    nombre: "Departamento con terraza privada en zona exclusiva",
    src: "https://elremansodelascondes.cl/wp-content/uploads/2021/01/departamento-en-venta-terraza-mirador-portada-home.jpg",
    descripcion:
      "Este departamento exclusivo tiene una terraza privada con vistas a la ciudad.",
    ubicacion: "101 Elite Avenue, Luxury District, CA 12345",
    habitaciones: 2,
    banos: 2,
    costo: "3.800",
    smoke: false,
    pets: true,
  },
  {
    id: "8",
    nombre: "Penthouse con jacuzzi y vistas panorámicas",
    src: "https://dynamic-media.tacdn.com/media/vr-splice-j/0a/0b/32/2a.jpg?w=800&h=-1",
    descripcion:
      "Penthouse con jacuzzi en la terraza y vistas panorámicas de la ciudad y el mar.",
    ubicacion: "987 Luxury Street, Skyview Heights, FL 23456",
    habitaciones: 3,
    banos: 3,
    costo: "6.200",
    smoke: true,
    pets: false,
  },
];

//Mostrar 3 Propiedades en Venta

//Definimos la let que apunta al elemento del DOM
let cardsVenta = document.querySelectorAll("#venta .card"); //Se apunta a los elementos con la clase ".card" dentro del ID "#venta"

if (cardsVenta.length > 0) {
  //Con este if aseguramos que solo modifique los elementos del DOM si existen
  for (let i = 0; i < 3; i++) {
    //Usamos for para mostrar los elementos en el DOM, indicando que solo queremos mostrar 3 elementos
    let carta = cardsVenta[i];
    let propiedad = propiedades_venta[i];

    //Acá indicamos el código html que se insertará en el DOM donde especificamos, llamamos los elementos del array dentro de la interpolación con ${propiedad.datoSolicitadoDelArray}
    if (propiedad) {
      carta.innerHTML = ` 
  <img
  src="${propiedad.src}"
  class="card-img-top"
  alt="Imagen del departamento"
  />
  <div class="card-body">
  <h5 class="card-title">
  ${propiedad.nombre}
  </h5>
  <p class="card-text">
  ${propiedad.descripcion}
  </p>
  <p>
  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
  </p>
  <p>
  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
  </p>
  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
  <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
          <i class="${
            propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
          }"></i> 
          ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}
        </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i> 
          ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
  </div>
  `;
    } //Acá arriba creamos la condicional que dependiendo si el array mostraba true o false mostrara una u otra opcion, para si está permitido fumar o tener mascotas
  }
}
//Mostrar 3 Propiedades en Renta
let cardsRenta = document.querySelectorAll("#alquiler .card");

if (cardsRenta.length > 0) {
  for (let i = 0; i < 3; i++) {
    let carta = cardsRenta[i];
    let propiedad = propiedades_arriendo[i];

    if (propiedad) {
      carta.innerHTML = `
  <img
  src="${propiedad.src}"
  class="card-img-top"
  alt="Imagen del departamento"
  />
  <div class="card-body">
  <h5 class="card-title">
  ${propiedad.nombre}
  </h5>
  <p class="card-text">
  ${propiedad.descripcion}
  </p>
  <p>
  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
  </p>
  <p>
  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
  </p>
  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
  <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
          <i class="${
            propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
          }"></i> 
          ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}
        </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i> 
          ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
  </div>
  `;
    }
  }
}

//Mostrar todas las propiedades en Venta

let cardsVentaCompleta = document.querySelectorAll("#ventaCompleta .card");

if (cardsVentaCompleta.length > 0) {
  for (let i = 0; i < propiedades_venta.length; i++) {
    //Acá utilizamos el mismo for, solo que le indicamos que muestre todos los elementos con el "propiedades_venta.length"
    let cartaVenta = cardsVentaCompleta[i];
    let propiedad = propiedades_venta[i];

    if (propiedad) {
      cartaVenta.innerHTML = `
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedad.nombre}
        </h5>
        <p class="card-text">
          ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
          <i class="${
            propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
          }"></i>
          ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}
        </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i>
          ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
      </div>
    `;
    }
  }
}

//Mostrar todas las propiedades en Renta

let cardsRentaCompleta = document.querySelectorAll("#alquilerCompleta .card");

if (cardsRentaCompleta.length > 0) {
  for (let i = 0; i < propiedades_venta.length; i++) {
    //Acá utilizamos el mismo for, solo que le indicamos que muestre todos los elementos con el "propiedades_arriendo.length"
    let cartaRenta = cardsRentaCompleta[i];
    let propiedad = propiedades_arriendo[i];

    if (propiedad) {
      cartaRenta.innerHTML = `
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedad.nombre}
        </h5>
        <p class="card-text">
          ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
          <i class="${
            propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
          }"></i>
          ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}
        </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i>
          ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
      </div>
    `;
    }
  }
}
