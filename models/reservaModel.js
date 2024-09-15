let reservas = []; // Almacenará todas las reservas

// Ejemplo de función para generar reservas iniciales
const generarReservasIniciales = () => {
  reservas = [
    {
      id: 1,
      fechaEntrada: "2024-05-15",
      fechaSalida: "2024-05-18",
      tipoHabitacion: "Doble",
      nombreHuesped: "Alejandro Gómez",
      emailHuesped: "alejandro@example.com",
      telefonoHuesped: "555-1234",
    },
    {
      id: 2,
      fechaEntrada: "2024-06-10",
      fechaSalida: "2024-06-12",
      tipoHabitacion: "Suite Familiar",
      nombreHuesped: "Maria Pérez",
      emailHuesped: "maria@example.com",
      telefonoHuesped: "555-5678",
    },
    {
      id: 3,
      fechaEntrada: "2024-07-01",
      fechaSalida: "2024-07-05",
      tipoHabitacion: "Sencilla",
      nombreHuesped: "Luis García",
      emailHuesped: "luis@example.com",
      telefonoHuesped: "555-9876",
    },
    // Añade más reservas aquí si es necesario...
  ];
};

// Función para mostrar las reservas actuales
const mostrarReservas = () => {
  console.log("Lista de reservas actuales:");
  reservas.forEach((reserva) => {
    console.log(reserva);
  });
};

// Crear una reserva
const crearReserva = (reserva) => {
  reserva.id = reservas.length + 1;
  reservas.push(reserva);
  return reserva;
};

// Obtener todas las reservas
const obtenerReservas = () => {
  return reservas;
};

// Obtener una reserva por ID
const obtenerReservaPorId = (id) => {
  return reservas.find((res) => res.id === id);
};

// Actualizar una reserva
const actualizarReserva = (id, nuevaReserva) => {
  const indice = reservas.findIndex((res) => res.id === id);
  if (indice !== -1) {
    reservas[indice] = { ...reservas[indice], ...nuevaReserva };
    return reservas[indice];
  }
  return null;
};

// Eliminar una reserva
const eliminarReserva = (id) => {
  const indice = reservas.findIndex((res) => res.id === id);
  if (indice !== -1) {
    reservas.splice(indice, 1);
    return true;
  }
  return false;
};

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
};

// Llamar la función para generar y mostrar las reservas
generarReservasIniciales();
mostrarReservas();
