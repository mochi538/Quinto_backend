const userdb = require("../config/Userdb.js");

function TraerUser(callback) {
  const consulta = "select * from usuarios";
  userdb.query(consulta, (error, respuesta) => {
    if (error) {
      console.log("No hice la consulta X_X");
    } else {
      callback(respuesta);
    }
  });
}

function agregarUsuario(nuevoUser, callback) {
  let IUsuario = "INSERT INTO usuarios (nombreUser, contraseña) VALUES(?,?)";
  userdb.query(
    IUsuario,
    [nuevoUser.nombreUser, nuevoUser.contraseña],
    (err, results) => {
      if (err) {
        console.log("insertó :b");
      } else {
        callback(results);
      }
    }
  );
}
function actualizarUser(id, newUser, callback) {
  let ubdate = "update usuarios set nombreUser=?, contraseña=? where id=?";
  userdb.query(
    ubdate,
    [newUser.nombreUser, newUser.contraseña, id],
    (err, result) => {
      if (err) {
        console.log("No se actualizó >:b");
      } else {
        callback(result);
      }
    }
  );    
}

function eliminarUsuario(id, callback) {
  let consultaDrop = "delete from usuarios where id=?";
  userdb.query(consultaDrop, [id], (err, resultados) => {
    if (err) {
      console.log("No funciona la funcion xd");
    } else {
      callback(resultados);
    }
  });
}

module.exports = { TraerUser, agregarUsuario, eliminarUsuario, actualizarUser };
