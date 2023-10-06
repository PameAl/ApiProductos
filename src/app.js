import express from 'express'
import config from './config'//aqui importamos todo el modulo config

import productsRoutes from './routers/products.routes'
import cors from 'cors'

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Configuración de CORS para permitir peticiones desde la URL específica
const corsOptions = {
    origin: 'https://snp0h1z7-3000.brs.devtunnels.ms/',
    credentials: true
  };
  
app.use(cors(corsOptions));

//settings(configuramos el puerto)
app.set('port', config.port)


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(productsRoutes);

  
export default app;