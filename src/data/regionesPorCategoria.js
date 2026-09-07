import regionesAdulto from './regionesAdulto.js';
import regionesPediatricas from './regionesPediatricas.js';
import regionesPeriprotesicas from './regionesPeriprotesicas.js';

const regionesPorCategoria = {
  adulto: regionesAdulto,
  pediatrico: regionesPediatricas,
  periprotesico: regionesPeriprotesicas
};

export default regionesPorCategoria;