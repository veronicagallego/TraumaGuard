import categoriasTrauma from '../data/categoriasTrauma.js';
import regionesPorCategoria from '../data/regionesPorCategoria.js';

// Devuelve todas las categorías.
export function listarCategorias(req, res) {
  return res.status(200).json(categoriasTrauma);
}

// Devuelve las regiones de una categoría.
export function listarRegionesPorCategoria(req, res) {
  const { categoria } = req.params;

  if (!Object.hasOwn(regionesPorCategoria, categoria)) {
    return res.status(404).json({
      error: {
        codigo: 'CATEGORIA_NO_ENCONTRADA',
        mensaje: 'La categoría solicitada no existe.'
      }
    });
  }

  return res.status(200).json(regionesPorCategoria[categoria]);
}