const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3000;

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "¡Hola desde el backend con Node.js y Express!" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Para emulador usar: http://10.0.2.2:${PORT}`);
});
