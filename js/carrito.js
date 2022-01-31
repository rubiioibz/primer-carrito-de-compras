/* TIENDA ******************************************************************************/
//CLASES
class Producto {
  constructor(id, nombre, tipo, descripcion, medidas, stock, precio) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.medidas = medidas;
    this.stock = stock;
    this.precio = parseFloat(precio);
    this.vendido = false;
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
    console.log("El precio de " + this.nombre + " con IVA incluido es de: € " + this.precio);
  }

  vender(cantidad) {
    if (this.stock > cantidad) {
      this.stock = this.stock - cantidad;
      console.log("Quedan " + this.stock + " unidades");
    } else {
      console.log("No quedan mas unidades de " + this.nombre + " en stock");
      this.vendido = true;
    }
  }

  mostrar() {
    console.log("ID: " + this.id);
    console.log("Nombre: " + this.nombre);
    console.log("Tipo: " + this.tipo);
    console.log("Descripcion: " + this.descripcion);
    console.log("Medidas: " + this.medidas);
    console.log("Stock: " + this.stock);
    console.log("Precio: € " + this.precio);
    console.log("vendido: " + this.vendido);
  }
}




const Productos = [
  {
    id: 1,
    nombre: "rubiio posca",
    tipo: "cuadro",
    descripcion: "Cuadro realizado en enteramente en rotuladores Posca",
    medidas: "60cm x 30cm",
    stock: 1,
    precio: 100,
  },
  {
    id: 2,
    nombre: "drubiio",
    tipo: "cuadro",
    descripcion: "Cuadrito hecho en madera fina, con rotuladores y lapices",
    medidas: "20cm x 25cm",
    stock: 1,
    precio: 15,
  },
  {
    id: 3,
    nombre: "mache",
    tipo: "cuadro",
    descripcion: "Cuadro realizado en rotuladores Posca y pintura en aerosol",
    medidas: "25cm x 20cm",
    stock: 1,
    precio: 25,
  },
  {
    id: 4,
    nombre: "bartfall",
    tipo: "cuadro",
    descripcion: "Cuadro hecho en madera con pintura acrilica",
    medidas: "25cm x 20cm",
    stock: 1,
    precio: 25,
  },
  {
    id: 5,
    nombre: "regular Show",
    tipo: "cuadro",
    descripcion: "Cuadro hecho en madera con pintura acrilica",
    medidas: "30cm x 25cm",
    stock: 1,
    precio: 30,
  },
  {
    id: 6,
    nombre: "setario",
    tipo: "cuadro",
    descripcion: "Cuadro realizado en madera con pintura acrilica.",
    medidas: "40cm x 30cm",
    stock: 1,
    precio: 60,
  },
  {
    id: 7,
    nombre: "capucha",
    tipo: "cuadro",
    descripcion: "Cuadro reallizaco con pintura en aerosol y rotuladores Posca",
    medidas: "30cm x 25cm",
    stock: 1,
    precio: 50,
  },
  {
    id: 8,
    nombre: "verano verde",
    tipo: "cuado",
    descripcion: "Cuadro reallizaco con pintura en aerosol y rotuladores Posca",
    medidas: "25cm x 20cm",
    stock: 2,
    precio: 35,
  },
  {
    id: 9,
    nombre: "letra r",
    tipo: "cuadro",
    descripcion: "Cuadro realizado enteramente con pintura en aerosol",
    medidas: "80cm x 50cm",
    stock: 1,
    precio: 200,
  },
];

function nuevoProducto() {
  Productos.push ( new Producto (
    Number(prompt("Ingrese ID de nuevo producto: ")),
    prompt("Ingrese nombre de nuevo producto: "),
    prompt("Ingrese que tipo de producto es: "),
    prompt("Ingrese descripcion del nuevo producto: "),
    prompt("Ingrese medidas del nuevo producto: "),
    Number(prompt("Ingrese cantidad de Stock disponible de nuevo producto: ")),
    prompt("ingrese precio del nuevo cuadro"),
    this.vendido = false
  ))
}



const carritoDeCompras = [];


//AGREGAR PRODUCTOS AL CARRITO
function agregarAlCarrito() {
  let elijoProducto = parseInt(prompt("ingrese el ID de su producto:"));

  let productoAgregar = Productos.find((e) => e.id == elijoProducto);
  carritoDeCompras.push(productoAgregar);
  console.log(carritoDeCompras);
  console.log("Has agregado " + productoAgregar.nombre + " al carrito.");
  actualizarCarrito();
}
// agregarAlCarrito();

function actualizarCarrito() {
  console.log(
    "cantidad de productos agregados al carrito: " + carritoDeCompras.length
  );
  let suma = carritoDeCompras.reduce((acc, e) => acc + e.precio, 0);

  console.log("la suma total de su Carrito es $" + suma);
}



function filtroPrecio(num) {
  let filtro = Productos.filter((e) => e.precio <= num);
  if (Productos.some((e) => e.precio <= num)) {
    console.log(filtro);
    console.log("Hay " + filtro.length + " productos de €" + num + " o menos.");
  } else {
    console.log("no hay productos de €" + num + " o menos.");
  }
}
// filtroPrecio(Number(prompt("ingrese numero:")));

function filtroNombre(letras) {
  let filtroName = Productos.filter((e) => e.nombre.includes(letras));
  if (Productos.some((e) => e.nombre != letras)) {
    console.log(filtroName);
  } else {
    console.log("No es una letra");
  }
}
// filtroNombre(prompt("ingrese letra:"))

function listaNombres() {
  let lista = Productos.map((e) => e.nombre);
  console.log(lista);
}
// listaNombres();

function existe(name) {
  let existe = Productos.some((e) => e.nombre == name);
  if (existe == true) {
    console.log("Si, si está");
    let mostrar = Productos.find((e) => e.nombre == name);
    console.log(mostrar);
  } else {
    console.log("No se encuentra en inventario");
  }
}
// existe(prompt("ingrese nombre a ver si esta:"))

function buscarProducto(a) {
  let buscar = Productos.find((e) => e.nombre == a);
  console.log(buscar);
}
// buscarProducto("drubiio")
