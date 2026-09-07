import fs from 'node:fs';
import path from 'node:path';

const rutaArchivo = path.resolve(
  'src',
  'data',
  'catalogoTrauma.json'
);

const contenidoJSON = fs.readFileSync(rutaArchivo, 'utf-8');

const catalogo = JSON.parse(contenidoJSON);

console.log('Nombre:', catalogo.nombre);
console.log('Versión:', catalogo.version);
console.log('Cantidad de categorías:', catalogo.categorias.length);
console.log('Categorías disponibles:');

catalogo.categorias.forEach((categoria) => {
  console.log(`- ${categoria.nombre}`);
});