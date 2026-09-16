import fs from 'node:fs/promises';

class Catalogo {
  constructor() {
    // Ubicación relativa a este archivo, no a la terminal.
    this.rutaArchivo = new URL(
      '../data/catalogoTrauma.json',
      import.meta.url
    );
  }

  async leerCatalogo() {
    const contenido = await fs.readFile(
      this.rutaArchivo,
      'utf-8'
    );

    return JSON.parse(contenido);
  }

  async obtenerCategorias() {
    const catalogo = await this.leerCatalogo();

    return catalogo.categorias;
  }

  async obtenerRegiones() {
    const catalogo = await this.leerCatalogo();

    return catalogo.regiones;
  }

  async obtenerRegionesPorCategoria(categoria) {
    const regiones = await this.obtenerRegiones();

    if (!Object.hasOwn(regiones, categoria)) {
      return null;
    }

    return regiones[categoria];
  }
}

// Una instancia compartida por los controladores.
const catalogo = new Catalogo();

export default catalogo;