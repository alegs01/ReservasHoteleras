const reservaModel = require("../models/reservaModel");

// Crear una reserva
exports.crearReserva = (req, res) => {
  const nuevaReserva = req.body;
  const reservaCreada = reservaModel.crearReserva(nuevaReserva);
  res.status(201).json(reservaCreada);
};

// Obtener todas las reservas
exports.obtenerReservas = (req, res) => {
  const reservas = reservaModel.obtenerReservas();
  res.status(200).json(reservas);
};

// Obtener una reserva por su ID
exports.obtenerReservaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const reserva = reservaModel.obtenerReservaPorId(id);
  if (reserva) {
    res.status(200).json(reserva);
  } else {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};

// Actualizar una reserva
exports.actualizarReserva = (req, res) => {
  const id = parseInt(req.params.id);
  const reservaActualizada = reservaModel.actualizarReserva(id, req.body);
  if (reservaActualizada) {
    res.status(200).json(reservaActualizada);
  } else {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};

// Eliminar una reserva
exports.eliminarReserva = (req, res) => {
  const id = parseInt(req.params.id);
  const eliminada = reservaModel.eliminarReserva(id);
  if (eliminada) {
    res.status(204).send();
  } else {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};
