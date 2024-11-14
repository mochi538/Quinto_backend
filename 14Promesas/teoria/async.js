const fetch = require('node-fetch');

async function obtenerDatos() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error:', error);
  }
}

(async () => {
  const datos = await obtenerDatos();
  console.log('Datos:', datos);
})();
