const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"pais"

})

function conexion(){
    db.connect((e)=>{
        if (e){
            console.log("Error al conectar la base de datos")
        }
        else{
            console.log("Base de datos conectada ;)")
        }
    })
}


module.exports ={conexion}

