# Meus Certificados

Pagina web para centralizar e exibir certificados em formato PDF.

## Objetivo

Reunir em um unico lugar os certificados adquiridos ao longo da jornada academica e profissional. Cada certificado e exibido como um card com uma miniatura da primeira pagina do PDF.

## Funcionalidades

- **Grid de certificados** — organizados em um grid responsivo que se adapta a diferentes tamanhos de tela.
- **Miniaturas automaticas** — cada card exibe uma previa da primeira pagina do PDF renderizada no navegador.
- **Abertura rapida** — ao clicar em um card, o PDF completo e aberto em uma nova aba.
- **Design escuro** — interface com tema escuro para destacar o conteudo dos certificados.

## Tecnologias utilizadas

- HTML5 / CSS3
- JavaScript (vanilla)
- pdf.js — renderizacao das miniaturas dos PDFs

## Estrutura de arquivos

```
├── index.html          # Pagina principal
├── style.css           # Estilos da pagina
├── script.js           # Logica de renderizacao
├── README.md           # Este arquivo
└── PDF/                # Pasta com os arquivos .pdf dos certificados
```

## Como usar

1. Coloque os arquivos PDF dos certificados na pasta `PDF/`.
2. Adicione o caminho de cada arquivo no array `pdfFiles` dentro do arquivo `script.js`.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

Os certificados aparecerao automaticamente na pagina com suas miniaturas.
