// Obtener referencias a elementos HTML
const cantidadTicketsInput = document.getElementById('cantidadTickets');
const botonResumen = document.getElementById('botonResumen');
const totalPagarElement = document.getElementById('totalPagar');

// Agregar un evento de escucha al botón "Resumen"
botonResumen.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
  totalPagar(200);
});

// Función para calcular el total
function totalPagar() {
    // Obtener la cantidad de tickets ingresada por el usuario
    const cantidadTickets = parseInt(cantidadTicketsInput.value);
  
    // Obtener la categoría seleccionada
    const categoria = Option.value;
  
    // Definir los precios y descuentos para cada categoría
    let precioTicket = 200; // Precio base del ticket
    let descuento = 0; // Porcentaje de descuento
  
    if (Option === 'estudiante') {
      descuento = 0.80; // 80% de descuento para estudiantes
    } else if (Option === 'trainee') {
      descuento = 0.50; // 50% de descuento para trainees
    } else if (Option === 'junior') {
      descuento = 0.15; // 15% de descuento para juniors
    }
  // Calcular el monto total con el descuento
  const totalPagar = cantidadTickets * precioTicket * (1 - descuento);
  // Actualizar el texto en el elemento "Total a Pagar"
  totalPagarElement.textContent = `Total a Pagar: $${totalPagar.toFixed(2)}`;
}


