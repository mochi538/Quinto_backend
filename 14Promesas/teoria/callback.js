const request = require('request');

function obtenerDatos(callback) {
  request('https://api.example.com/data', (error, response, body) => {
    if (error) {
      return callback(error);
    }
    try {
      const datos = JSON.parse(body);
      callback(null, datos);
    } catch (e) {
      callback(e);
    }
  });
}

obtenerDatos((error, datos) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Datos:', datos);
  }
});
