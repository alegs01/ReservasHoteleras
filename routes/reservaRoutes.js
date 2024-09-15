const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaControllerTEMP");

/**
 * @openapi
 * tags:
 *   - name: Reservas
 *     description: Operaciones relacionadas con reservas de hotel
 */

/**
 * @openapi
 * /reservas:
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
 *             type: object
 *             properties:
 *               fechaEntrada:
 *                 type: string
 *                 format: date
 *               fechaSalida:
 *                 type: string
 *                 format: date
 *               tipoHabitacion:
 *                 type: string
 *               nombreHuesped:
 *                 type: string
 *               emailHuesped:
 *                 type: string
 *               telefonoHuesped:
 *                 type: string
 *             required:
 *               - fechaEntrada
 *               - fechaSalida
 *               - tipoHabitacion
 *               - nombreHuesped
 *               - emailHuesped
 *               - telefonoHuesped
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 reserva:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     fechaEntrada:
 *                       type: string
 *                       format: date
 *                     fechaSalida:
 *                       type: string
 *                       format: date
 *                     tipoHabitacion:
 *                       type: string
 *                     nombreHuesped:
 *                       type: string
 *                     emailHuesped:
 *                       type: string
 *                     telefonoHuesped:
 *                       type: string
 *       400:
 *         description: Datos inválidos
 */
router.post("/reservas", reservaController.crearReserva);

/**
 * @openapi
 * /reservas:
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
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 reservas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       fechaEntrada:
 *                         type: string
 *                         format: date
 *                       fechaSalida:
 *                         type: string
 *                         format: date
 *                       tipoHabitacion:
 *                         type: string
 *                       nombreHuesped:
 *                         type: string
 *                       emailHuesped:
 *                         type: string
 *                       telefonoHuesped:
 *                         type: string
 */
router.get("/reservas", reservaController.obtenerReservas);

/**
 * @openapi
 * /reservas/{id}:
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
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 reserva:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     fechaEntrada:
 *                       type: string
 *                       format: date
 *                     fechaSalida:
 *                       type: string
 *                       format: date
 *                     tipoHabitacion:
 *                       type: string
 *                     nombreHuesped:
 *                       type: string
 *                     emailHuesped:
 *                       type: string
 *                     telefonoHuesped:
 *                       type: string
 *       404:
 *         description: Reserva no encontrada
 */
router.get("/reservas/:id", reservaController.obtenerReservaPorId);

/**
 * @openapi
 * /reservas/{id}:
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
 *             type: object
 *             properties:
 *               fechaEntrada:
 *                 type: string
 *                 format: date
 *               fechaSalida:
 *                 type: string
 *                 format: date
 *               tipoHabitacion:
 *                 type: string
 *               nombreHuesped:
 *                 type: string
 *               emailHuesped:
 *                 type: string
 *               telefonoHuesped:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 reserva:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     fechaEntrada:
 *                       type: string
 *                       format: date
 *                     fechaSalida:
 *                       type: string
 *                       format: date
 *                     tipoHabitacion:
 *                       type: string
 *                     nombreHuesped:
 *                       type: string
 *                     emailHuesped:
 *                       type: string
 *                     telefonoHuesped:
 *                       type: string
 *       404:
 *         description: Reserva no encontrada
 */
router.put("/reservas/:id", reservaController.actualizarReserva);

/**
 * @openapi
 * /reservas/{id}:
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
 *                 message:
 *                   type: string
 *       404:
 *         description: Reserva no encontrada
 */
router.delete("/reservas/:id", reservaController.eliminarReserva);

module.exports = router;
