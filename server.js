const express = require("express");
const cors = require("cors");
const swaggerDocs = require("./swaggerDocs"); // Importa la configuración de Swagger

require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/reservas", require("./routes/reservaRoutes"));

app.get("/", (req, res) => {
  res.send(
    "El servidor está en funcionamiento. Puedes consultar la documentación de la API en /api-docs"
  );
});

// Configuración de Swagger
swaggerDocs(app);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
