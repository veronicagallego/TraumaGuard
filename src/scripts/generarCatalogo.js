import fs from 'node:fs';
import path from 'node:path';

import categoriasTrauma from '../data/categoriasTrauma.js';
import regionesPorCategoria from '../data/regionesPorCategoria.js';

const catalogo = {
  nombre: 'TraumaGuard',
  version: '1.0.0',
  categorias: categoriasTrauma,
  regiones: regionesPorCategoria
};

const rutaArchivo = path.resolve(
  'src',
  'data',
  'catalogoTrauma.json'
);

const contenidoJSON = JSON.stringify(catalogo, null, 2);

fs.writeFileSync(rutaArchivo, contenidoJSON, 'utf-8');

console.log(`Catálogo generado correctamente en: ${rutaArchivo}`);