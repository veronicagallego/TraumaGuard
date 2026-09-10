import express from 'express';

import routerAPI from './routes/index.js';

import registroPeticiones from './middlewares/registroPeticiones.js';
import rutaNoEncontrada from './middlewares/rutaNoEncontrada.js';
import manejadorErrores from './middlewares/manejadorErrores.js';

const app = express();

// Middleware generales.
app.use(registroPeticiones);
app.use(express.json());

// Archivos estáticos.
app.use(express.static('public'));

// Rutas de la API.
routerAPI(app);

// Responde cuando ninguna ruta coincide.
app.use(rutaNoEncontrada);

// Maneja errores. Siempre debe ir al final.
app.use(manejadorErrores);

export default app;