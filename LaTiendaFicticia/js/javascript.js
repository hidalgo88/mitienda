const navbar = document.querySelector("#navbar");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });

abrirMenu.addEventListener("click", () => {
    navbar.classList.add("visible");    
});
cerrarMenu.addEventListener("click", () => {
    navbar.classList.remove("visible");
});

const verCarrito = document.querySelector("#verCarrito");
const abrirCarrito = document.querySelector("#abrirCarrito");
const cerrarCarrito = document.querySelector("#cerrarCarrito");

abrirCarrito.addEventListener("click", () => {
    verCarrito.classList.add("visible");    
});
cerrarCarrito.addEventListener("click", () => {
    verCarrito.classList.remove("visible");
});



let productos = [];
let total = 0;

function agregarProducto(producto, precio) {
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("span");
    productoItem.textContent = producto + "...............  $" + precio;
    carrito.appendChild(productoItem);

    // Agrega producto al array
    productos.push({ nombre: producto, precio: precio });
    
    total += precio;
    document.getElementById("totalPrecio").textContent = `PRECIO TOTAL: $${total}`;

    sessionStorage.setItem('productos', JSON.stringify(productos));
    sessionStorage.setItem('total', total);

}

function limpiarCarrito() {
    if (confirm("¿Esta seguro que quiere eliminar los productos agregados a su carrito de compras?")) {
        productos = [];
        total = 0;
        document.getElementById("verCarrito").innerHTML = ""; // Elimina todos los productos del carrito

        // Limpia los datos del sessionStorage
        sessionStorage.removeItem('productos');
        sessionStorage.removeItem('total');
    }
}

// MODAL
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

function openModal() {
    e.preventDefault();
    modal.classList.add('modal--show');
}

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});