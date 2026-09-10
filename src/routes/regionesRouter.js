import { Router } from 'express';

import { listarRegiones } from '../controllers/regionesController.js';

const router = Router();

// GET /api/regiones
router.get('/', listarRegiones);

export default router;