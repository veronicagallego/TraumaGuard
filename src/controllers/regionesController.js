import catalogo from '../models/Catalogo.js';

// Devuelve todas las regiones agrupadas por categoría.
export async function listarRegiones(req, res, next) {
  try {
    const regiones = await catalogo.obtenerRegiones();

    return res.status(200).json(regiones);
  } catch (error) {
    return next(error);
  }
}