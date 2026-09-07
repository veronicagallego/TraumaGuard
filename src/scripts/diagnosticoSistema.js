import os from 'node:os';

const convertirAGB = (bytes) => {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
};

console.log('Diagnóstico del sistema');
console.log('-----------------------');
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Procesadores:', os.cpus().length);
console.log('Memoria total:', convertirAGB(os.totalmem()), 'GB');
console.log('Memoria disponible:', convertirAGB(os.freemem()), 'GB');