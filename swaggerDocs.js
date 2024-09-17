const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

// Configuración de Swagger
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0", // Versión de OpenAPI
    info: {
      title: "API de Gestión de Reservas de Hotel",
      version: "1.0.0",
      description: "Documentación de la API para gestionar reservas de hotel",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Servidor local",
      },
    ],
  },
  // Path para los archivos de comentarios
  apis: [path.join(__dirname, "./routes/reservaRoutes.js")], // Ajusta la ruta según la ubicación de tus archivos de rutas
});

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
