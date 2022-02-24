
  /*/////////////////////////////////////////// CLASE /////////////////////////////////////////*/ 
class Producto {
  constructor(id, nombre, tipo, descripcion, medidas, stock, precio, img) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.medidas = medidas;
    this.stock = stock;
    this.precio = parseFloat(precio);
    this.img = img;
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