const express = require("express");
const {
  TraerUser,
  agregarUsuario,
  eliminarUsuario,
  actualizarUser,
} = require("./models/userModulo.js");

const user = express();
const post = 3008;
user.use(express.json());

user.get("/", (req, res) => {
  TraerUser((respuesta) => {
    res.json(respuesta);
  });
});
user.post("/", (req, res) => {
  let nuevoUser = req.body;
  if (!nuevoUser.nombreUser || !nuevoUser.contraseña) {
    return res.send("No hay datos UnU");
  } else {
    agregarUsuario(nuevoUser, (results) => {
      res.json({ mensage: "empleado agregado" });
    });
  }
});

user.delete("/user/:id", (req, res) => {
  let userid = req.params.id;
  eliminarUsuario(userid, (err, resultado) => {
    if (!err) {
      return res.send("No se eliminó >:b");
    } else {
      return res.json({ mensage: "Se eliminó :b" });
    }
  });
});

user.put("/user/:id", (req, res) => {
  let userid = req.params.id;
  const newUser = req.body;

  if (!newUser.nombreUser || !newUser.contraseña) {
    return res.send("No actualizó");
  } else {
    actualizarUser(userid, newUser, (err, result) => {
      if (!err) {
        return res.send("No se actializó");
      } else {
        return res.json({ mensage: "Actualizado y listo patrón ;)" });
      }
    });
  }
});

user.listen(post, () => {
  console.log("Revisa el Postman B) ");
});
