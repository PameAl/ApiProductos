import express from 'express'
import config from './config' //aqui importamos todo el modulo config

import productsRoutes from './routers/products.routes.js'
import cors from 'cors'

const app = express()

// Configuración de CORS para permitir peticiones desde la URL específica 
//cambiar la url por la qque sea que vaya a hacer peticiones a la api
//por ejemplo http://127.0.0.1:5500 que es donde se ejjecuta live server

const corsOptions = {
	origin: 'https://snp0h1z7-5500.brs.devtunnels.ms/',
	credentials: true
};

app.use(cors(corsOptions));

//settings(configuramos el puerto)
app.set('port', config.port)


//middlewares
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use(productsRoutes);


export default app;