const regionesPediatricas = [
  {
    id: 1,
    nombre: 'Miembro superior',
    subregiones: [
      { id: 'pms-01', nombre: 'Húmero proximal' },
      { id: 'pms-02', nombre: 'Diáfisis humeral' },
      { id: 'pms-03', nombre: 'Húmero distal' },
      { id: 'pms-04', nombre: 'Antebrazo proximal' },
      { id: 'pms-05', nombre: 'Diáfisis del antebrazo' },
      { id: 'pms-06', nombre: 'Antebrazo distal' }
    ]
  },
  {
    id: 2,
    nombre: 'Miembro inferior',
    subregiones: [
      { id: 'pmi-01', nombre: 'Fémur proximal' },
      { id: 'pmi-02', nombre: 'Diáfisis femoral' },
      { id: 'pmi-03', nombre: 'Fémur distal' },
      { id: 'pmi-04', nombre: 'Tibia proximal' },
      { id: 'pmi-05', nombre: 'Diáfisis tibial' },
      {
        id: 'pmi-06',
        nombre: 'Tibia y peroné distales'
      }
    ]
  }
];

export default regionesPediatricas;