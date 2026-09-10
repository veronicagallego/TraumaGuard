import express from 'express';

import categoriasTrauma from './data/categoriasTrauma.js';
import regionesPorCategoria from './data/regionesPorCategoria.js';

const app = express();

// ========================================
// 1. MIDDLEWARE GENERALES
// ========================================

// Registra el método y la ruta de cada petición.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Interpreta los cuerpos de las peticiones enviados como JSON.
app.use(express.json());

// Sirve los archivos públicos: HTML, CSS e imágenes.
app.use(express.static('public'));

// ========================================
// 2. RUTAS DE LA API
// ========================================

// Estado del servidor.
app.get('/api/estado', (req, res) => {
  res.status(200).json({
    aplicacion: 'TraumaGuard',
    estado: 'Servidor funcionando'
  });
});

// Listado de categorías.
app.get('/api/categorias', (req, res) => {
  res.status(200).json(categoriasTrauma);
});

// Todas las regiones, agrupadas por categoría.
app.get('/api/regiones', (req, res) => {
  res.status(200).json(regionesPorCategoria);
});

// Regiones pertenecientes a una categoría.
app.get('/api/categorias/:categoria/regiones', (req, res) => {
  const { categoria } = req.params;

  // Comprueba que sea una categoría propia del catálogo.
  if (!Object.hasOwn(regionesPorCategoria, categoria)) {
    return res.status(404).json({
      error: {
        codigo: 'CATEGORIA_NO_ENCONTRADA',
        mensaje: 'La categoría solicitada no existe.'
      }
    });
  }

  return res.status(200).json(regionesPorCategoria[categoria]);
});

// ========================================
// 3. RUTAS NO ENCONTRADAS
// Siempre después de las rutas disponibles.
// ========================================

app.use((req, res) => {
  res.status(404).json({
    error: {
      codigo: 'RUTA_NO_ENCONTRADA',
      mensaje: 'La ruta solicitada no existe.'
    }
  });
});

// ========================================
// 4. MANEJO CENTRALIZADO DE ERRORES
// Debe ser el último middleware.
// ========================================

app.use((err, req, res, next) => {
  console.error(
    `[ERROR] ${req.method} ${req.path}`,
    err
  );

  if (res.headersSent) {
    return next(err);
  }

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: {
        codigo: 'JSON_INVALIDO',
        mensaje: 'El cuerpo de la petición no contiene un JSON válido.'
      }
    });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      error: {
        codigo: 'CUERPO_DEMASIADO_GRANDE',
        mensaje: 'Los datos enviados superan el tamaño permitido.'
      }
    });
  }

  return res.status(500).json({
    error: {
      codigo: 'ERROR_INTERNO',
      mensaje: 'Ocurrió un error interno en el servidor.'
    }
  });
});

export default app;