const db = require("../config/db.js");

function TraerEmpleados(callback){
    const consultaEmpleados = "select * from empleados"
    db.query(consultaEmpleados, (err, results) => {
        if (err){
            console.log("Consulta no realizada")
        }
        else{
            callback(results)
        }
    })
}

function EmpleadosA(callback){
    const consultaEmpleadosA = "select * from empleados where nombre regexp '^A'";
    db.query(consultaEmpleadosA, (err, results) =>{
        if(err){
            console.log("Consulta no realizada")
        }else{
            callback(results)
        }
    })
}

module.exports={TraerEmpleados, EmpleadosA};
