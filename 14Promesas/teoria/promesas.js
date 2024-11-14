const fetch = require('node-fetch');

function obtenerDatos() {
  return fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

obtenerDatos()
  .then(datos => {
    console.log('Datos:', datos);
  })
  .catch(error => {
    console.error('Error:', error);
  });
