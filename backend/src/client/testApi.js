const axios = require("axios");

async function testGetTareas (){

    try {
        const response = await axios.get('http://localhost:3000/api/tareas');
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {   

        console.error('Error al hacer la solicitud:', error.message);
    
    }
}
testGetTareas();