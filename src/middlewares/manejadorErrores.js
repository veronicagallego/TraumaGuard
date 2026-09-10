function manejadorErrores(err, req, res, next) {
  console.error(
    `[ERROR] ${req.method} ${req.path}`,
    err
  );

  if (res.headersSent) {
    return next(err);
  }

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: {
        codigo: 'JSON_INVALIDO',
        mensaje: 'El cuerpo de la petición no contiene un JSON válido.'
      }
    });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      error: {
        codigo: 'CUERPO_DEMASIADO_GRANDE',
        mensaje: 'Los datos enviados superan el tamaño permitido.'
      }
    });
  }

  return res.status(500).json({
    error: {
      codigo: 'ERROR_INTERNO',
      mensaje: 'Ocurrió un error interno en el servidor.'
    }
  });
}

export default manejadorErrores;