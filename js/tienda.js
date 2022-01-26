/*TIENDA */

//CLASES
class Producto {
  constructor(nombre, precio, descripcion, medidas, stock) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.descripcion = descripcion;
    this.medidas = medidas;
    this.stock = stock;
    this.vendido = false;
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
    console.log("El precio con IVA incluido es de: € " + this.precio);
  }

  vender(cantidad) {
    if (this.stock > cantidad) {
      this.stock = this.stock - cantidad;
      console.log("Quedan " + this.stock + " unidades");
    } else {
      console.log("No quedan mas unidades de " + this.nombre + " en stock");
    }
  }

  mostrar() {
    console.log("Nombre: " + this.nombre);
    console.log("Precio: € " + this.precio);
    console.log("Descripcion: " + this.descripcion);
    console.log("Medidas: " + this.medidas);
  }
}

//PRODUCTOS
const cuadros = [];

cuadros.push(
  new Producto(
    "Rubiio Posca",
    100,
    "Cuadro realizado en enteramente en rotuladores Posca",
    "60cm x 30cm",
    1
  )
);

cuadros.push(
  new Producto(
    "Drubiio",
    15,
    "Cuadrito hecho en madera fina, con rotuladores y lapices",
    "20cm x 25cm",
    1
  )
);

cuadros.push(
  new Producto(
    "Mache",
    25,
    "Cuadro realizado en rotuladores Posca y pintura en aerosol",
    "25cm x 20cm",
    1
  )
);

cuadros.push(
  new Producto(
    "BartFall",
    25,
    "Cuadro hecho en madera con pintura acrilica",
    "25cm x 20cm",
    1
  )
);

cuadros.push(
  new Producto(
    "Regular Show",
    "30",
    "Cuadro hecho en madera con pintura acrilica",
    "30cm x 25cm",
    1
  )
);

cuadros.push(
  new Producto(
    "Setario",
    60,
    "Cuadro realizado en madera con pintura acrilica.",
    "40cm x 30cm",
    1
  )
);

for (const cuadro of cuadros) {
  console.log(cuadro);
}
