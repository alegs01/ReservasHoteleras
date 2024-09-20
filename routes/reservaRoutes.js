const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El identificador único de la reserva
 *         hotel:
 *           type: string
 *           description: El nombre del hotel
 *         fechaEntrada:
 *           type: string
 *           format: date
 *           description: La fecha de entrada
 *         fechaSalida:
 *           type: string
 *           format: date
 *           description: La fecha de salida
 *         tipoHabitacion:
 *           type: string
 *           description: El tipo de habitación
 *         numHuespedes:
 *           type: integer
 *           description: El número de huéspedes
 *         estado:
 *           type: string
 *           description: El estado de la reserva
 *         nombreHuesped:
 *           type: string
 *           description: El nombre del huésped
 *         emailHuesped:
 *           type: string
 *           format: email
 *           description: El correo electrónico del huésped
 *         telefonoHuesped:
 *           type: string
 *           description: El teléfono del huésped
 *       required:
 *         - id
 *         - hotel
 *         - fechaEntrada
 *         - fechaSalida
 *         - tipoHabitacion
 *         - numHuespedes
 *         - estado
 *         - nombreHuesped
 *         - emailHuesped
 *         - telefonoHuesped
 *       example:
 *         id: 1
 *         hotel: "Hotel Paraíso"
 *         fechaEntrada: "2024-05-15"
 *         fechaSalida: "2024-05-18"
 *         tipoHabitacion: "Doble"
 *         numHuespedes: 3
 *         estado: "Confirmada"
 *         nombreHuesped: "Alejandro Gómez"
 *         emailHuesped: "alejandro@example.com"
 *         telefonoHuesped: "555-1234"
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     tags:
 *       - Reservas
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       description: Datos de la nueva reserva
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Reserva'
 *       400:
 *         description: Datos inválidos
 */
router.post("/", reservaController.crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     tags:
 *       - Reservas
 *     summary: Obtener todas las reservas
 *     responses:
 *       200:
 *         description: Lista de todas las reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get("/", reservaController.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     tags:
 *       - Reservas
 *     summary: Actualizar una reserva
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos de la reserva a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.put("/:id", reservaController.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     tags:
 *       - Reservas
 *     summary: Eliminar una reserva
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       404:
 *         description: Reserva no encontrada
 */
router.delete("/:id", reservaController.eliminarReserva);

/**
 * @swagger
 * /api/reservas/search:
 *  get:
 *    summary: Buscar reservas con filtros
 *    tags: [Reservas]
 *    parameters:
 *      - in: query
 *        name: hotel
 *        schema:
 *          type: string
 *        description: El nombre del hotel
 *      - in: query
 *        name: fechaEntrada
 *        schema:
 *          type: string
 *          format: date
 *        description: La fecha de entrada de la reserva
 *      - in: query
 *        name: fechaSalida
 *        schema:
 *          type: string
 *          format: date
 *        description: La fecha de salida de la reserva
 *      - in: query
 *        name: estado
 *        schema:
 *          type: string
 *        description: El estado de la reserva
 *      - in: query
 *        name: tipoHabitacion
 *        schema:
 *          type: string
 *        description: El tipo de habitación
 *    responses:
 *      200:
 *        description: Lista de reservas que coinciden con los filtros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reserva'
 */
router.get("/search", reservaController.filter);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     tags:
 *       - Reservas
 *     summary: Obtener una reserva por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.get("/:id", reservaController.obtenerReservaPorId);

module.exports = router;
