import { Router } from 'express';

import {
  listarCategorias,
  listarRegionesPorCategoria
} from '../controllers/categoriasController.js';

const router = Router();

// GET /api/categorias
router.get('/', listarCategorias);

// GET /api/categorias/:categoria/regiones
router.get('/:categoria/regiones', listarRegionesPorCategoria);

export default router;