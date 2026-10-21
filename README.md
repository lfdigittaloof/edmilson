# Edmilson Cell Premium v3.1.1

Projeto completo para gerar o instalador Windows via GitHub Actions.

## Envio ao GitHub

1. Faça backup JSON dos cadastros na versão atual.
2. Extraia o ZIP e copie **o conteúdo interno** para a **raiz** do repositório `lfdigittaloof/edmilson`, preservando as pastas `.github`, `electron`, `assets` e `scripts`.
3. Substitua os arquivos antigos de mesmo nome. Arquivos antigos `main.cjs`, `check-app.js` e outros workflows soltos na raiz podem permanecer sem uso, mas podem ser excluídos depois de verificar a nova compilação.
4. Faça commit e envie (`Push origin`). Acesse a aba Actions e o workflow **Gerar instalador Windows**.
5. Abra a execução concluída e baixe o ZIP do instalador em **Artifacts**.

## Arquivos principais

- `index.html`: aplicativo com produtos livres, celulares/IMEI, financeiro e menu atualizado.
- `logo-edmilson-cell.png`: marca da loja.
- `electron/main.cjs`: janela desktop.
- `assets/icon.ico`: ícone do instalador.
- `scripts/check-app.cjs`: validação de estrutura e sintaxe.
- `package.json`: projeto Electron Builder, instalação NSIS.
- `.github/workflows/main.yml`: compilação e upload do Setup.exe sem token pessoal.

**Observação:** a versão 3.1.1 foi revisada por verificações estáticas, mas o `Setup.exe` só será confirmado após o GitHub Actions concluir a compilação. A instalação e o uso com dados reais exigem teste adicional. O armazenamento do Electron não sincroniza automaticamente com o navegador; exporte e importe o backup.


### v3.1.2
Corrigida a validação da logo embutida em base64. O workflow mantém publicação desativada e entrega o Setup em Artifacts.


v3.1.3: categoria livre no cadastro de acessórios; melhorias de foco e clique nos formulários. O cadastro de Produtos da Loja permanece sem IMEI. Faça backup antes de atualizar.
