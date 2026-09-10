import { readFile } from 'node:fs/promises';
import path from 'node:path';

const rutaArchivo = path.resolve(
  'src',
  'data',
  'catalogoTrauma.json'
);

const leerCatalogo = async () => {
  try {
    const contenidoJSON = await readFile(rutaArchivo, 'utf-8');
    const catalogo = JSON.parse(contenidoJSON);

    console.log('Nombre:', catalogo.nombre);
    console.log('Versión:', catalogo.version);
    console.log(
      'Cantidad de categorías:',
      catalogo.categorias.length
    );
    console.log('Categorías disponibles:');

    catalogo.categorias.forEach((categoria) => {
      console.log(`- ${categoria.nombre}`);
    });
  } catch (error) {
    console.error(
      'No se pudo leer el catálogo:',
      error.message
    );

    process.exitCode = 1;
  }
};

await leerCatalogo();
