const mysql = require("mysql2")
const userdb = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database: "paginaweb"
})

userdb.connect((e)=>{
    if(e){
        console.log("Está mal UnU")
    }
    else{
        console.log("Bien bien :)")
    }
})

module.exports = userdb;