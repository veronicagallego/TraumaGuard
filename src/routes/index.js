import estadoRouter from './estadoRouter.js';
import categoriasRouter from './categoriasRouter.js';
import regionesRouter from './regionesRouter.js';

function routerAPI(app) {
  app.use('/api/estado', estadoRouter);
  app.use('/api/categorias', categoriasRouter);
  app.use('/api/regiones', regionesRouter);
}

export default routerAPI;