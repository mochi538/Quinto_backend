const db = require("../config/db");

async function getAllDeptos() {
  try {
    const [results] = await db.conexion.query('select * from departamento');
    return results

    
  } catch (e) {
    console.log("Error desde getAllDeptos en el model");
  }
}
async function postAllDeptos() {
  try {
    console.log("Este es el método postAllDeptos");
  } catch (e) {
    console.log("Error desde postAllDeptos en el model");
  }
}
async function deleteAllDeptos() {
  try {
    console.log("Este es el método deleteAllDeptos");
  } catch (e) {
    console.log("Error desde deleteAllDeptos en el model");
  }
}

module.exports = { getAllDeptos, postAllDeptos, deleteAllDeptos };
