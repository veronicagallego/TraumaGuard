import { Router } from 'express';

import { obtenerEstado } from '../controllers/estadoController.js';

const router = Router();

// GET /api/estado
router.get('/', obtenerEstado);

export default router;