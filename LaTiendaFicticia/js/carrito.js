// Recuperar los datos del sessionStorage
let productos = JSON.parse(sessionStorage.getItem('productos')) || [];
let total = sessionStorage.getItem('total') || 0;

// Mostrar el resumen de la compra
const resumen = document.getElementById("detalle");
const precioFinal = document.querySelector(".precioFinal")
let totalfinal = "";


// Usar un bucle for tradicional para los productos
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    let productoItem = document.createElement("span");
    productoItem.textContent += `${producto.nombre}: ______________________________ $${producto.precio}`;
    resumen.appendChild(productoItem);
}

totalfinal += `Total a pagar: $${total}`;
console.log(totalfinal);
precioFinal.textContent = totalfinal;

// Función envío del Formulario
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

//     // Obtiene datos de contacto
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('contactoEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !email || !telefono) {
        alert("Por favor, completa todos los campos de contacto.");
        return; // detiene la ejecucuión de la función hasta que pase el if
    }

    // Crea el listado del carrito
    let carritoContenido = '';
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        carritoContenido += `${producto.nombre} - $${producto.precio}\n`;
    }

    // Agrega al valor total el signo de pesos $
    const totalConPesos = `$${total}`;

    // Asigna los datos a los campos ocultos del formulario
    document.getElementById('carritoData').value = carritoContenido;
    document.getElementById('totalCarrito').value = totalConPesos;

    // Envía el formulario a Formspree
    document.getElementById('formulario').submit();
}

// Asociamos el evento al botón de enviar
document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);

function limpiarCarrito() {
    if (confirm("¿Esta seguro que quiere eliminar los productos agregados a su carrito de compras?")) {

        // Limpia los datos del sessionStorage
        sessionStorage.removeItem('productos');
        sessionStorage.removeItem('total');
    }
}