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
      console.log(
        "El precio de " +
          this.nombre +
          " con IVA incluido es de: € " +
          this.precio
      );
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
  
  const productos = [
    {
      id: 1,
      nombre: "rubiio posca",
      tipo: "cuadro",
      descripcion: "Cuadro realizado en enteramente en rotuladores Posca",
      medidas: "big",
      stock: 1,
      precio: 100,
    },
    {
      id: 2,
      nombre: "drubiio",
      tipo: "cuadro",
      descripcion: "Cuadrito hecho en madera fina, con rotuladores y lapices",
      medidas: "small",
      stock: 1,
      precio: 15,
    },
    {
      id: 3,
      nombre: "mache",
      tipo: "cuadro",
      descripcion: "Cuadro realizado en rotuladores Posca y pintura en aerosol",
      medidas: "small",
      stock: 1,
      precio: 25,
    },
    {
      id: 4,
      nombre: "bartfall",
      tipo: "cuadro",
      descripcion: "Cuadro hecho en madera con pintura acrilica",
      medidas: "small",
      stock: 1,
      precio: 25,
    },
    {
      id: 5,
      nombre: "regular Show",
      tipo: "cuadro",
      descripcion: "Cuadro hecho en madera con pintura acrilica",
      medidas: "medium",
      stock: 1,
      precio: 30,
    },
    {
      id: 6,
      nombre: "setario",
      tipo: "cuadro",
      descripcion: "Cuadro realizado en madera con pintura acrilica.",
      medidas: "medium",
      stock: 1,
      precio: 60,
    },
    {
      id: 7,
      nombre: "capucha",
      tipo: "cuadro",
      descripcion: "Cuadro realizado con pintura en aerosol y rotuladores Posca",
      medidas: "medium",
      stock: 1,
      precio: 50,
    },
    {
      id: 8,
      nombre: "verano verde",
      tipo: "cuado",
      descripcion: "Cuadro realizado con pintura en aerosol y rotuladores Posca",
      medidas: "small",
      stock: 2,
      precio: 35,
    },
    {
      id: 9,
      nombre: "letra r",
      tipo: "cuadro",
      descripcion: "Cuadro realizado enteramente con pintura en aerosol",
      medidas: "big",
      stock: 1,
      precio: 200,
    },
    {
        id: 10,
        nombre: "rubiio Green",
        tipo: "cuadro",
        descripcion: "Cuadro realizado con pintura en aerosol y rotuladores Posca",
        medidas: "small",
        stock: 1,
        precio: 15,
      },
      {
        id: 11,
        nombre: "pastel",
        tipo: "cuadro",
        descripcion: "Cuadro realizado en madera con pintura acrilica y rotuladores Posca.",
        medidas: "small",
        stock: 1,
        precio: 10,
      },
  ];
  
  function nuevoProducto() {
    productos.push(
      new Producto(
        Number(prompt("Ingrese ID de nuevo producto: ")),
        prompt("Ingrese nombre de nuevo producto: "),
        prompt("Ingrese que tipo de producto es: "),
        prompt("Ingrese descripcion del nuevo producto: "),
        prompt("Ingrese medidas del nuevo producto: "),
        Number(
          prompt("Ingrese cantidad de Stock disponible de nuevo producto: ")
        ),
        prompt("ingrese precio del nuevo producto"),
        (this.vendido = false)
      )
    );
  }
