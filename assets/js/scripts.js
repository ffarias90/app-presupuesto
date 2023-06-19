// arreglo para guardar los gastos
var gastos = [];

// funcion de agregar presupuesto
function enviarPresupuesto() {
  let valorPresupuesto = document.getElementById("presupuesto").value;
  let parrafoPresupuesto = document.getElementById("nuevoPresupuesto");
  parrafoPresupuesto.innerText = valorPresupuesto;

  return valorPresupuesto;
}

// funcion para agregar nombre de gastos y valor
function agregarGasto() {
  // obtener valores
  var nombreGasto = document.getElementById("nombreGasto").value;
  var cantidadGasto = parseInt(document.getElementById("cantidadGasto").value);
  // añade la cantidad del gasto al arreglo
  if (!isNaN(cantidadGasto)) {
    gastos.push(cantidadGasto);
    // crear nueva fila
    var tabla = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0];
    var nuevaFila = tabla.insertRow();
    // Insertar celdas en la fila
    var celdaNombre = nuevaFila.insertCell(0);
    var celdaEdad = nuevaFila.insertCell(1);
    var celdaAccion = nuevaFila.insertCell(2);
    //   asignar los valores a las celdas
    celdaNombre.innerHTML = nombreGasto;
    celdaEdad.innerHTML = cantidadGasto;
    celdaAccion.innerHTML =
      '<button onclick="borrarEntrada(this)">Borrar</button>';

    actualizarSuma();
  }
}

// borrar gasto del listado
function borrarEntrada(boton) {
  var fila = boton.parentNode.parentNode; // Obtener la fila que contiene el botón
  var tabla = document.getElementById("table").getElementsByTagName("tbody")[0];
  // Obtener el índice de la fila a eliminar
  var indice = Array.prototype.indexOf.call(tabla.rows, fila);
  // Eliminar la fila del arreglo y de la tabla
  var indice = indice - 1;
  gastos.splice(indice, 1);
  tabla.removeChild(fila); // Eliminar la fila de la tabla

  actualizarSuma();
}

// operaciones aritméticas
const actualizarSuma = () => {
  let suma = 0;
  // recorre el arreglo de cantidad Gastos y suma su contenido
  for (let i = 0; i < gastos.length; i++) {
    suma = suma + gastos[i];
  }

  document.getElementById("suma").innerHTML = "$" + suma;

  var resta = enviarPresupuesto() - suma;
  document.getElementById("resta").innerHTML = "$" + resta;
};

// llamado de funciones
let elBotonCalcular = document.getElementById("btnCalcular");
elBotonCalcular.addEventListener("click", enviarPresupuesto);

// Detiene la acción predeterminada del formulario
function enviarFormulario(event) {
  event.preventDefault();
}
