import express from 'express';
import categoriasTrauma from './data/categoriasTrauma.js';
import regionesPorCategoria from './data/regionesPorCategoria.js';

const app = express();

app.use(express.json());

// Estado del servidor
app.get('/api/estado', (req, res) => {
  res.status(200).json({
    aplicacion: 'TraumaGuard',
    estado: 'Servidor funcionando'
  });
});

// Listado de categorías
app.get('/api/categorias', (req, res) => {
  res.status(200).json(categoriasTrauma);
});

// Todas las regiones, agrupadas por categoría
app.get('/api/regiones', (req, res) => {
  res.status(200).json(regionesPorCategoria);
});

// Regiones pertenecientes a una categoría
app.get('/api/categorias/:categoria/regiones', (req, res) => {
  const { categoria } = req.params;
  const regiones = regionesPorCategoria[categoria];

  if (!regiones) {
    return res.status(404).json({
      error: 'Categoría no encontrada'
    });
  }

  return res.status(200).json(regiones);
});

export default app;
