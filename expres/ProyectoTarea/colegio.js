const express = require("express");
const colegio = express();
const port = 3010;
colegio.use(express.json())

const{mostrarAlumnos,contarAlumnos, agregarAlumno,actualizarAlumno, eliminarAlumno } = require("./models/alumnoModule")
const{mostrarCurso, agregarCurso,actualizarCurso,eliminarCurso, contarCurso } = require("./models/cursoModule")
const{mostrarTablas} = require("./models/todo")

/* Alumno CRUD */
colegio.get("/alumno", (req, res) => {
    mostrarAlumnos((respuesta) => {
      res.json(respuesta);
    })
})

colegio.get("/conteoAlumno", (req, res) => {
  contarAlumnos((respuesta) => {
    res.json(respuesta);
  })
});

colegio.post("/alumno/:id",(req, res)=>{
  let nuevoAlumno = req.body;
  if(!nuevoAlumno.nombre || !nuevoAlumno.correo || !nuevoAlumno.edad || !nuevoAlumno.idCurso){
    return ("Datos incompletos")
  }else{
    agregarAlumno(nuevoAlumno,(results)=>{
      res.json(results)
    })
  }
});
colegio.put("/alumno/:id", (req, res)=>{
  let idAlumno = req.params.id;
  let modificarAlumno = req.body;
  if(!modificarAlumno.nombre || !modificarAlumno.correo || !modificarAlumno.edad || !modificarAlumno.idCurso){
    return res.send("Datos incompletos")
  }else{
    actualizarAlumno( idAlumno, modificarAlumno, (err, result)=>{
      return res.json(result)

    })
  }
});
colegio.delete("/alumno/:id", (req, res)=>{
  let id = req.params.id
  eliminarAlumno(id, (err, result)=>{
    if(!err){
      return res.send("Error X_X")
    }else{
        return res.json({mensaje: "Alumno eliminado correctamente"})
      }
  })
});


/* Curso CRUD */
colegio.get("/curso", (req, res) => {
  mostrarCurso((respuesta) => {
    res.json(respuesta);
  })
})

colegio.get("/conteoCurso", (req, res) => {
  contarCurso((respuesta) => {
  res.json(respuesta);
})
});

colegio.post("/curso/:id",(req, res)=>{
let nuevoCurso = req.body;
if(!nuevoCurso.codigoCurso || !nuevoCurso.nombreCurso || !nuevoCurso.fechaEnd){
  return ("Datos incompletos")
}else{
  agregarCurso(nuevoCurso,(results)=>{
    res.json(results)
  })
}
});
colegio.put("/curso/:id", (req, res)=>{
let idCurso = req.params.id;
let modificarCurso = req.body;
if(!modificarCurso.codigoCurso || !modificarCurso.nombreCurso || !modificarCurso.fechaEnd ){
  return res.send("Datos incompletos")
}else{
  actualizarCurso( idCurso, modificarCurso, (err, result)=>{
    return res.json(result)

  })
}
});
colegio.delete("/curso/:id", (req, res)=>{
let id = req.params.id
eliminarCurso(id, (err, result)=>{
  if(!err){
    return res.send("Error desde curso X_X")
  }else{
      return res.json({mensaje: "Curso eliminado correctamente"})
    }
})
});


/* Alumnos y curso */

colegio.get("/todo", (req, res)=>{
  mostrarTablas((results)=>{
    return res.send(results)
  })
})
  


  
 

colegio.listen(port, ()=>{
    console.log("Revisa el postman bro ;)")
})

/* {
    "codigoCurso": "12345",
    "nombreCurso": "Once-B",
    "fechaEnd": "20240-02-30"
} */
/* {
        "nombre": "Eduardo",
        "correo": "edu@gmail.com",
        "edad": 19,
        "idCurso": 1
    } */