const express = require("express");
const {TraerEmpleados, EmpleadosA}= require("../Proyecto2/models/empleadosModel")

const app = express();
const port = 4500;


//Tabla uruaios con id contraesña nombre usuario


app.get("/empleado/lista", (req, res) => {
  TraerEmpleados((results)=>{
    res.json(results);
  })
});
app.get("/empleado/nombreA", (req, res) => {
  EmpleadosA((results)=>{
    res.json(results);
  })
});


app.post("/empleado", (req, res) => {
  res.send("Este es el método post para empleado");
});
app.put("/empleado/:id", (req, res) => {
  let empleadoId = req.params.id;
  res.json(empleadoId);
});
app.delete("/empleado/:id", (req, res) => {
  let empleadoId = req.params.id;
  res.json({id: empleadoId});
});

app.listen(port, () => {
  console.log("Servidor del empleado corriendo :b ");
});

