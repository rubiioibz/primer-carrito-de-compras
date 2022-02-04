
function filtroPrecio(num) {
    let filtro = productos.filter((e) => e.precio <= num);
    if (productos.some((e) => e.precio <= num)) {
      console.log(filtro);
      console.log("Hay " + filtro.length + " productos de €" + num + " o menos.");
    } else {
      console.log("no hay productos de €" + num + " o menos.");
    }
  }
  // filtroPrecio(Number(prompt("ingrese numero:")));
  
  function filtroNombre(letras) {
    let filtroName = productos.filter((e) => e.nombre.includes(letras));
    if (productos.some((e) => e.nombre != letras)) {
      console.log(filtroName);
    } else {
      console.log("No es una letra");
    }
  }
  // filtroNombre(prompt("ingrese letra:"))
  
  function listaNombres() {
    let lista = productos.map((e) => e.nombre);
    console.log(lista);
  }
  // listaNombres();
  
  function existe(name) {
    let existe = productos.some((e) => e.nombre == name);
    if (existe == true) {
      console.log("Si, si está");
      let mostrar = productos.find((e) => e.nombre == name);
      console.log(mostrar);
    } else {
      console.log("No se encuentra en inventario");
    }
  }
  // existe(prompt("ingrese nombre a ver si esta:"))
  
  function buscarProducto(a) {
    let buscar = productos.find((e) => e.nombre == a);
    console.log(buscar);
  }
  //buscarProducto("drubiio")