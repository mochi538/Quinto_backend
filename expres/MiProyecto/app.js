const express = require("express"); /* sustituto de import */

const app = express();
const PORT = 3000;
//Cuando se utilizan las rutas, se deben usar dos parametro: 1.Parámetro de la ruta 2. Req(datos), Res(datos Entregados a la db)

app.get("/empleado", (req, res) => {
  res.send("Este es el método empleado");
});
app.post("/", (req, res) => {
  res.send("Este es el método post");
});
app.put("/", (req, res) => {
  res.send("Este es el método put");
});
app.delete("/", (req, res) => {
  res.send("Este es el método delete");
});


app.listen(PORT, () => {
  console.log("Servidor corriendo ");
});
