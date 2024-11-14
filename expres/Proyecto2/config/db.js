const mysql = require("mysql2");
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database: "empleados_db",

})
db.connect((e)=>{
    if (e){
        console.log("error en la coneccion")
    }
    else{
        console.log("concetado a Mysql")
    }
})

module.exports=db;