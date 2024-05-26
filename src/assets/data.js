import p1_img from './esmeril.png'
import p2_img from './bateria.png'
import p3_img from './soldadora.png'
import p4_img from './lampara.png'

//Este data es una especie de "Base de datos", donde están los diferentes productos que usaré como ejemplo mientras se desarrolla la verdadera BD

let data_product = [
  {
    id:1,
    name:"Esmeril Angular 7″ GWS 28-180 Bosch",
    brand: "Bosch",
    image:p1_img,
    new_price: 203990,
    old_price: 253990,
  },
  {id:2,
    name:"Soldadora arco manual 160 A",
    brand: "Bauker",
    image:p3_img,
    new_price: 99990,
    old_price:151990,
  },
  {id:3,
    name:"LÁMPARA DE MESA COBRE 1 LUZ E27 60 W",
    brand: "Home Collection",
    image:p4_img,
    new_price:16990,
    old_price:24990,
  },
  {id:4,
    name:"Kit Baterías 2ah + Cargador 20v Dewalt",
    brand: "Dewalt",
    image:p2_img,
    new_price:149390,
    old_price:179990,
  },
];

// Función para formatear precio en pesos chilenos
function formatPriceCLP(price) {
  return price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
}

// Formatear precios en la base de datos
data_product.forEach(product => {
  product.new_price = formatPriceCLP(product.new_price);
  product.old_price = formatPriceCLP(product.old_price);
});

export default data_product;
