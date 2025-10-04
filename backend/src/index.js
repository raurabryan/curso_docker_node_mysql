require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtSecrecet=process.env.JWT_SECRET;
const tareasRoutes = require('./routes/tareasRoutes');
const authRoutes = require('./routes/authRoutes');
const {autorizarRoles} = require('./middleware/rolMiddleware');	


const {apiReference} = require('./middleware/apiReferenceMiddleware');	


app.use(express.json());

console.log("clave sercreta ", jwtSecrecet);
console.log("port ", port);
app.get('/', (req, res) => {
res.send('API backend funcioanando');
});


const cors = require('cors');

const corsOptions = {	
	origin: 'http://localhost:3000'|| process.env.CORS_ORIGIN,
	optionsSuccessStatus: 200,
	credentials: true
};


app.use(cors(corsOptions));

app.use('/api', tareasRoutes);
app.use('/api', authRoutes);

app.use ('/docs', apiReference({
	theme: 'dark', // Opciones: 'light' o 'dark'
	layaout: 'sidebar', // Opciones: 'sidebar' o 'stacked'
	spect:{
		url: '/openapi.yaml',
	},
	configuration: {
		showSidebar	: true,
		hideDownloadButton: false,
		hideTryItPanel: false,
		authentications: {
			preferredSecurityScheme: 'bearerAuth', // Asegúrate de que esto coincida con el nombre en tu especificación OpenAPI
			apiKey: {
				token : 'token'
			}
		}
	},

}));


app.listen(port, () =>{
	console.log('Servidor escuchando en el puerto: ',port);
});