import catalogo from '../models/Catalogo.js';

// Devuelve todas las categorías.
export async function listarCategorias(req, res, next) {
  try {
    const categorias = await catalogo.obtenerCategorias();

    return res.status(200).json(categorias);
  } catch (error) {
    return next(error);
  }
}

// Devuelve las regiones de una categoría.
export async function listarRegionesPorCategoria(req, res, next) {
  try {
    const { categoria } = req.params;

    const regiones =
      await catalogo.obtenerRegionesPorCategoria(categoria);

    if (regiones === null) {
      return res.status(404).json({
        error: {
          codigo: 'CATEGORIA_NO_ENCONTRADA',
          mensaje: 'La categoría solicitada no existe.'
        }
      });
    }

    return res.status(200).json(regiones);
  } catch (error) {
    return next(error);
  }
}