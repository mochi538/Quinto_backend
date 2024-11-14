async function getAllMuni() {
  try {
    console.log("Este es el método getAllMuni");
  } catch (e) {
    console.log("Error desde getAllMuni en el model");
  }
}


async function postAllMuni() {
  try {
    console.log("Este es el método postAllMuni");
  } catch (e) {
    console.log("Error desde postAllMuni en el model");
  }
}

async function deleteAllMuni() {
  try {
    console.log("Este es el método deleteAllMuni");
  } catch (e) {
    console.log("Error desde deleteAllMuni en el model");
  }
}

module.exports = { getAllMuni, postAllMuni, deleteAllMuni };
