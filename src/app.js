import express from 'express';

const app = express();

// Permite recibir cuerpos de peticiones en formato JSON.
app.use(express.json());

// Ruta de prueba para comprobar que la API responde.
app.get('/api/estado', (req, res) => {
  res.status(200).json({
    aplicacion: 'TraumaGuard',
    estado: 'Servidor funcionando'
  });
});

export default app;