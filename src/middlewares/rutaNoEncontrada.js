function rutaNoEncontrada(req, res) {
  res.status(404).json({
    error: {
      codigo: 'RUTA_NO_ENCONTRADA',
      mensaje: 'La ruta solicitada no existe.'
    }
  });
}

export default rutaNoEncontrada;