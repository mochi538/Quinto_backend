const coledb = require("../config/db");


function mostrarAlumnos(callback){
    let consulta = "select * from alumno"
    coledb.query(consulta, (error, resultado)=>{
        if(error){
            console.log("Error del método Mostrar")
        }else{
            callback(resultado)
        }
    })

};
function agregarAlumno(agregar, callback){
    let insert = "insert into alumno (nombre, correo, edad, idCurso) values (?,?,?,?)"
    coledb.query(insert,[agregar.nombre, agregar.correo, agregar.edad, agregar.idCurso], (err, result)=>{
        if(err){
            console.log("Error del método Agregar")
        }else{
            coledb.query("select * from alumno where id = ?", [result.insertId],(err, result)=>{
                if(err){
                    console.log("No se pudo actializar el estudiantes")
                }else{
                    callback(result[0])
                }
            })
        }
    })
};
/* {
    "codigoCurso": "Octavo",
    "nombreCurso": "contraseñadePedro",
    "fechaEnd": "2000-05-09"
} */



function actualizarAlumno(idAlumno, actualizar, callback){
    let update = "UPDATE alumno SET nombre=?, correo=?, edad=?, idCurso=?"
    coledb.query(update, [actualizar.nombre, actualizar.correo, actualizar.edad, actualizar.idCurso, idAlumno],(err,result)=>{
        if(err){
            console.log("Error del método Actualizar")
        }else{
            coledb.query("select * from alumno where id = ?", [idAlumno],(err, result)=>{
                if(err){
                    console.log("No se pudo actializar el estudiantes")
                }else{
                    callback(null, result[0])
                }
            })
        }

    }
    )
};

function eliminarAlumno(id, callback){
    let eliminar = "delete from alumno where id=?"
    coledb.query(eliminar, [id],(err, result)=>{
        if(err){
            console.log("Error del método Eliminar")
        }else{
            callback( result)
        }
    })
}

function contarAlumnos(callback){
    let consulta="Select count(id) from alumno"
    coledb.query(consulta,(err, result)=>{
        if(err){
            console.log("Error del metodo Actualizar");
        }else{
            callback(result);
        }
    })
}





module.exports = {mostrarAlumnos, agregarAlumno,actualizarAlumno,eliminarAlumno, contarAlumnos}