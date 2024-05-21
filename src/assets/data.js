import p1_img from './tal_stan.png'
import p2_img from './sier_bauker.png'
import p3_img from './kanyeRobloxFace.png'
import p4_img from './kendrickson.png'

//Este data es una especie de "Base de datos", donde están los diferentes productos que usaré como ejemplo mientras se desarrolla la verdadera BD

let data_product = [
  {
    id:1,
    name:"Taladro Percutor 20v Brushless",
    brand: "Stanley",
    image:p1_img,
    new_price:37990,
    old_price:42990,
  },
  {id:2,
    name:"Sierra Circular Eléctrica 7 1/4 1800w Bauker",
    image:p2_img,
    new_price:63990,
    old_price:79990,
  },
  {id:3,
    name:"Cabezota roblox de Kaniwes",
    image:p3_img,
    new_price:1000000,
    old_price:1500000,
  },
  {id:4,
    name:"Hijo de Kendrick Lamar",
    image:p4_img,
    new_price:2000,
    old_price:2009,
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
