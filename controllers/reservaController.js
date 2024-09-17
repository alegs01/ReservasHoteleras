let reservas = [
  {
    id: 1,
    hotel: "Hotel Paraíso",
    fechaEntrada: "2024-05-15",
    fechaSalida: "2024-05-18",
    tipoHabitacion: "Doble",
    numHuespedes: 3,
    estado: "Confirmada", // Pendiente, Confirmada, Cancelada
    nombreHuesped: "Alejandro Gómez",
    emailHuesped: "alejandro@example.com",
    telefonoHuesped: "555-1234",
  },
  {
    id: 2,
    hotel: "Hotel Riviera",
    fechaEntrada: "2024-06-10",
    fechaSalida: "2024-06-12",
    tipoHabitacion: "Suite Familiar",
    numHuespedes: 4,
    estado: "Pendiente",
    nombreHuesped: "Maria Pérez",
    emailHuesped: "maria@example.com",
    telefonoHuesped: "555-5678",
  },
  {
    id: 3,
    hotel: "Central",
    fechaEntrada: "2024-07-01",
    fechaSalida: "2024-07-05",
    tipoHabitacion: "Simple",
    numHuespedes: 1,
    estado: "Confirmada",
    nombreHuesped: "Luis García",
    emailHuesped: "luis@example.com",
    telefonoHuesped: "555-9876",
  },
  // Añade más reservas aquí...
];

// Crear una reserva
exports.crearReserva = async (req, res) => {
  const nuevaReserva = req.body;
  nuevaReserva.id = reservas.length + 1;
  reservas.push(nuevaReserva);

  res.status(201).json({
    msg: "Reserva creada con éxito.",
    data: nuevaReserva,
  });
};

// Obtener todas las reservas
exports.obtenerReservas = async (req, res) => {
  res.json({
    msg: "Reservas obtenidas con éxito.",
    data: reservas,
  });
};

// Obtener una reserva por su ID
exports.obtenerReservaPorId = (req, res) => {
  const resId = parseInt(req.params.id);
  const reserva = reservas.find((r) => r.id === resId);

  if (!reserva) {
    return res.status(404).json({ msg: "Reserva no encontrada." });
  }

  res.json({
    msg: "Reserva obtenida con éxito.",
    data: reserva,
  });
};

// Actualizar una reserva
exports.actualizarReserva = async (req, res) => {
  const resId = parseInt(req.params.id);
  const resIndex = reservas.findIndex((r) => r.id === resId);

  if (resIndex === -1) {
    return res.status(404).json({ msg: "Reserva no encontrada." });
  }

  reservas[resIndex] = { ...reservas[resIndex], ...req.body };
  res.json({
    msg: "Reserva actualizada con éxito.",
    data: reservas[resIndex],
  });
};

// Eliminar una reserva
exports.eliminarReserva = (req, res) => {
  const resId = parseInt(req.params.id);
  const resIndex = reservas.findIndex((r) => r.id === resId);

  if (resIndex === -1) {
    return res.status(404).json({ msg: "Reserva no encontrada." });
  }

  reservas.splice(resIndex, 1);
  res.json({ msg: "Reserva eliminada con éxito." });
};

// Filtrar reservas
exports.filter = async (req, res) => {
  const { hotel, fechaEntrada, numHuespedes, estado, nombreHuesped } =
    req.query;

  const filteredReservas = reservas.filter((reserva) => {
    if (hotel && reserva.hotel !== hotel) {
      return false;
    }
    if (fechaEntrada && reserva.fechaEntrada !== fechaEntrada) {
      return false;
    }
    if (numHuespedes && reserva.numHuespedes !== parseInt(numHuespedes, 10)) {
      return false;
    }
    if (estado && reserva.estado !== estado) {
      return false;
    }
    if (nombreHuesped && reserva.nombreHuesped !== nombreHuesped) {
      return false;
    }
    return true;
  });

  if (filteredReservas.length === 0) {
    return res
      .status(404)
      .json({ msg: "No se encontraron reservas con los filtros aplicados." });
  }

  res.json({
    msg: "Reservas filtradas con éxito.",
    data: filteredReservas,
  });
};
