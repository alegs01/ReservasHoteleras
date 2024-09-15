const express = require("express");
const dotenv = require("dotenv");
const reservaRoutes = require("./routes/reservaRoutes");
const swaggerDocs = require("./swagger");
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(express.json());

app.use("/api", reservaRoutes);

swaggerDocs(app);

app.get("/", (req, res) => {
  res.send("Servidor de Reservas Hoteleras funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
