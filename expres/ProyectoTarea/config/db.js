const mysql =require("mysql2")
const coleDB = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"colegio"
})

coleDB.connect((e)=>{
    if(e){
        console.log("No se conectó la base de datos")
    }else{
        console.log("Se conectó la base de datos crack")
    }
})

module.exports = coleDB

