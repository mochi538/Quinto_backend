const coledb = require("../config/db");


function mostrarTablas(callback){
  let consulta = "select * from curso left join alumno on curso.id = alumno.idCurso"
  coledb.query(consulta, (error, resultado)=>{
      if(error){
          console.log("Error del método Mostrar Tablas")
      }else{
          callback(resultado)
      }
  })

};




module.exports = { mostrarTablas};
