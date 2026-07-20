const pdfFiles = [
  'PDF/ScrumFundamentalsCertified-MateusMartinsPeres-1092069.pdf',
  'PDF/Participação no 21º Congresso Latino-americano de Software Livre e Tecnologias Abertas-ATTENDEE.pdf',
  'PDF/II Semana Nacional de Ciência e Tecnologia - IFNMG Campus Salinas.pdf',
  'PDF/III Semana Nacional de Ciência e Tecnologia - IFNMG Campus Salinas.pdf',
  'PDF/Mesa Redonda - Movimento Empresa Júnior.pdf',
  'PDF/Minicurso - Meditação Akashic Experience.pdf',
  'PDF/Participação no Evento.pdf',
  'PDF/V Feira Pedagógica e II Mostra de Extensão do Curso de Licenciatura em Pedagogia do IFNMG - campus Salinas.pdf',
  'PDF/XI SEMANA NACIONAL DE CIÊNCIA E TECNOLOGIA.pdf',
];

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Extrai o nome legível do caminho do arquivo
function getDisplayName(filePath) {
  let name = filePath.split('/').pop().replace(/\.pdf$/i, '');
  name = name
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return name;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');

  pdfFiles.forEach((file) => {
    const card = document.createElement('div');
    card.className = 'card';

    const canvas = document.createElement('canvas');
    const name = document.createElement('div');
    name.className = 'card-name';
    name.textContent = getDisplayName(file);

    card.appendChild(canvas);
    card.appendChild(name);

    card.addEventListener('click', () => window.open(file, '_blank'));

    grid.appendChild(card);

    // Renderiza thumbnail
    pdfjsLib.getDocument(file).promise
      .then((pdf) => pdf.getPage(1))
      .then((page) => {
        const scale = 230 / page.getViewport({ scale: 1 }).width;
        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        return page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      })
      .catch((err) => console.warn('Erro ao carregar:', file, err));
  });
});
