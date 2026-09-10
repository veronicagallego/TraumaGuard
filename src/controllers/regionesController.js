import regionesPorCategoria from '../data/regionesPorCategoria.js';

// Devuelve todas las regiones agrupadas por categoría.
export function listarRegiones(req, res) {
  return res.status(200).json(regionesPorCategoria);
}