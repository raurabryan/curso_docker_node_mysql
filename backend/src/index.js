require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtSecrecet=process.env.JWT_SECRET;

app.use(express.json());

console.log("clave sercreta ", jwtSecrecet);
console.log("port ", port);
app.get('/', (req, res) => {
res.send('API backend funcioanando');
});


app.listen(port, () =>{
	console.log('Servidor escuchando en el puerto: ',port);
});