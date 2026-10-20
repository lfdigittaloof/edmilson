# Edmilson Cell Premium v3.0.1 — pacote corrigido

## Arquivos e pastas obrigatorios

- `index.html` — sistema
- `logo-edmilson-cell.png` — marca
- `package.json` — comandos do instalador
- `electron/main.cjs` — inicializador Electron (o caminho deve ser preservado)
- `scripts/check-app.cjs` — testes de sintaxe
- `assets/icon.ico` — icone Windows
- `.github/workflows/main.yml` — workflow do GitHub Actions

## Como enviar

**Recomendado: GitHub Desktop**. No computador, baixe o repositório `lfdigittaloof/edmilson` pelo GitHub Desktop (File > Clone repository). Extraia este ZIP e copie **o conteudo interno** da pasta `Edmilson_Cell_GitHub_CORRIGIDO_v3.0.1` para dentro da pasta local do repositório, mantendo as subpastas `electron`, `scripts`, `assets` e `.github/workflows`. Confirme substituicao dos arquivos com o mesmo nome. No GitHub Desktop use `Commit to main` e `Push origin`.

**Importante**: Como sua versao anterior foi enviada com os arquivos fora das pastas, nao mova `main.cjs` para a raiz. O caminho correto no repositório e `electron/main.cjs`. Um arquivo `main.cjs` solto na raiz pode continuar sem uso e pode ser excluido depois, assim como arquivos `check-app.js` ou workflows antigos quando confirmar que a versao atual funciona.

Depois abra https://github.com/lfdigittaloof/edmilson/actions > Gerar instalador Windows. A compilacao e automaticamente disparada no `push` para `main`, ou use `Run workflow`. Quando o status estiver verde, abra a execucao e baixe `Edmilson-Cell-Premium-Setup-v3.0.1` em Artifacts.

O instalador utiliza NSIS e cria atalho na area de trabalho. Os dados do sistema ficam no armazenamento local do aplicativo; faca backup da versao usada anteriormente e importe no aplicativo instalado. Nao envie seus backups pessoais para o GitHub.

**Verificacoes locais**: sintaxe do JS e presenca de arquivos. A compilacao Electron no Windows e os testes de operacao real ainda dependem do GitHub Actions.
