// Informa que el servidor está respondiendo.
export function obtenerEstado(req, res) {
  return res.status(200).json({
    aplicacion: 'TraumaGuard',
    estado: 'Servidor funcionando'
  });
}