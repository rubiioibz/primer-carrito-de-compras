/* TIENDA ******************************************************************************/

const carritoDeCompras = [];



//AGREGAR PRODUCTOS AL CARRITO
function agregarAlCarrito() {
  let elijoProducto = parseInt(prompt("ingrese el ID de su producto:"));

  let productoAgregar = productos.find((e) => e.id == elijoProducto);
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
// buscarProducto("drubiio")








const contenedorProducto = document.getElementById("contenedorProducto");
const selector = document.getElementById("selector")

selector.addEventListener("change", () => {

  if (selector.value == "todos") {
    mostrarProductos(productos)

  }else if (selector.value == "menorPrecio") {
    mostrarProductos(productos.sort((a,b) => {
      if (a.precio > b.precio) {
        return 1;
    } else if (a.precio < b.precio) {
        return -1
    }else{
        return 0;
    }
    }));
  }else if (selector.value == "mayorPrecio") {
    mostrarProductos(productos.sort((a,b) => {
      if (b.precio > a.precio) {
        return 1;
    } else if (b.precio < a.precio) {
        return -1;
    }else{
        return 0;
    }
    }));
  }else if (selector.value == "cuadrosChicos"){
    mostrarProductos(productos.filter(e=> e.medidas == "small"));
}else if (selector.value == "cuadrosMedianos") {
    mostrarProductos(productos.filter(e=> e.medidas == "medium"))
}else{
    mostrarProductos(productos.filter(e=> e.medidas == "big"));
  }
})

mostrarProductos(productos)


function mostrarProductos(x) {
  contenedorProducto.innerHTML = "";
  x.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = `
                    <div class="producto">
                    <p class="producto__nombre">${producto.nombre}</p>
                      <a class="producto__link" href="producto.html">
                        <img class="producto__imagen" src="../../img/cuadros/${producto.id}.jpg" alt="${producto.nombre}">
                      </a>
                        <div class="producto__informacion">
                          
                          <p class="producto__descripcion">${producto.descripcion}</p>
                          <p class="producto__precio">€${producto.precio}</p>
                          <input class="producto__carrito--btn" type="button" value="Agregar al carrito">
                        </div>
    
                    </div>
    `
    contenedorProducto.appendChild(div);
  })
}
