const coledb = require("../config/db");


function mostrarCurso(callback){
    let consulta = "select * from curso"
    coledb.query(consulta, (error, resultado)=>{
        if(error){
            console.log("Error del método Mostrar")
        }else{
            callback(resultado)
        }
    })

};
function agregarCurso(agregar, callback){
    let insert = "insert into curso (codigoCurso, nombreCurso, fechaEnd) values (?,?,?)"
    coledb.query(insert,[agregar.codigoCurso, agregar.nombreCurso, agregar.fechaEnd], (err, result)=>{
        if(err){
            console.log("Error del método Agregar")
        }else{
            coledb.query("select * from curso where id = ?", [result.insertId],(err, result)=>{
                if(err){
                    console.log("No se pudo actializar el estudiantes")
                }else{
                    callback(result[0])
                }
            })
        }
    })
};



function actualizarCurso(idCurso, actualizar, callback){
    let update = "UPDATE curso SET codigoCurso=?, nombreCurso=?, fechaEnd=?"
    coledb.query(update, [actualizar.codigoCurso, actualizar.nombreCurso, actualizar.fechaEnd, idCurso],(err,result)=>{
        if(err){
            console.log("Error del método Actualizar")
        }else{
            coledb.query("select * from curso where id = ?", [idCurso],(err, result)=>{
                if(err){
                    console.log("No se pudo actializar el curso")
                }else{
                    callback(null, result[0])
                }
            })
        }

    }
    )
};

function eliminarCurso(id, callback){
    let eliminar = "delete from curso where id=?"
    coledb.query(eliminar, [id],(err, result)=>{
        if(err){
            console.log("Error del método Eliminar desde Curso")
        }else{
            callback( result)
        }
    })
}

function contarCurso(callback){
    let consulta="select count(id) from curso"
    coledb.query(consulta,(err, result)=>{
        if(err){
            console.log("Error del metodo Actualizar desde Curso");
        }else{
            callback(result);
        }
    })
}


module.exports = {mostrarCurso,agregarCurso, actualizarCurso,eliminarCurso, contarCurso}