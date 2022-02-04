/* TIENDA ******************************************************************************/

const carritoDeCompras = [];

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
    div.innerHTML += `
                    <div class="producto">
                      <h2 class="producto__nombre">${producto.nombre}</h2>
                      <a class="producto__link" href="producto.html">
                        <img class="producto__imagen" src="../../img/cuadros/${producto.id}.jpg" alt="${producto.nombre}">
                      </a>
                        <div class="producto__informacion">
                          
                          <p class="producto__descripcion">${producto.descripcion}</p>
                          <p class="producto__precio">€${producto.precio}</p>
                          <button id="${producto.id}" class="producto__carrito--btn" type="button">Agregar al carrito</button>
                        </div>
    
                    </div>
    `
    contenedorProducto.appendChild(div);
  })
}



const botonesAgregarAlCarrito = document.getElementsByClassName("producto__carrito--btn");
const carrito = document.querySelector(".elCarrito");

for(botonAgregar of botonesAgregarAlCarrito){
  botonAgregar.addEventListener("click", agregarAlCarritoClicked);
};

function agregarAlCarritoClicked(event){
  const boton = event.target
  const producto = boton.closest(".producto");

  const tituloProducto = producto.querySelector(".producto__nombre").textContent;
  const precioProducto = producto.querySelector(".producto__precio").textContent;
  const imgProducto = producto.querySelector(".producto__imagen").src;
  const descripcionProducto = producto.querySelector(".producto__descripcion").textContent;
  
  agregarAlCarrito (tituloProducto, precioProducto, imgProducto, descripcionProducto)
}

function agregarAlCarrito (tituloProducto, precioProducto, imgProducto, descripcionProducto) {
  const carritoFlotante = document.createElement("div");
  const carritoFlotanteContenido = `
  <div class="card rounded-3 mb-4 productoCarrito">
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src="${imgProducto}"
                      class="img-fluid rounded-3" alt="#">
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">${tituloProducto}</p>
                    <p><span class="">${descripcionProducto}</span></p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>
    
                    <input id="form1" min="0" name="quantity" value="1" type="number"
                      class="form-control form-control-sm" />
    
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1 precioCarrito">
                    <h5 class="mb-0">${precioProducto}</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `

  carritoFlotante.innerHTML += carritoFlotanteContenido
  carrito.append(carritoFlotante)
  
  //actualizarCarrito()
}

function sumaCarrito(){
  let suma = carritoDeCompras.reduce((acc, e) => acc + e.precio, 0);
  return suma;
}


 /*
function actualizarCarrito() {
  let total = 0;
  const totalCarrito = document.getElementById("total").textContent;
  const itemsCarrito = document.getElementsByClassName("productoCarrito");
 
  //DEJE ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, NOSE SI VA FOR OF, .FOREACH O QUE MIERDA, HAY QUE HACER ITERAR SOBRE ITEMSCARRITO 

}
*/
