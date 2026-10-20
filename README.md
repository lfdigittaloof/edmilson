# Edmilson Cell Premium — v3.0

Sistema local para gestão de celulares, estoque por IMEI, fotos, vendas, acessórios, custos, garantias comerciais e relatórios.

## Executar

1. Baixe os arquivos do repositório (Code → Download ZIP).
2. Extraia a pasta e mantenha `index.html` e `logo-edmilson-cell.png` juntos.
3. Abra `index.html` com Chrome ou Edge.
4. Em **Backup / Dados**, importe o backup anterior, se necessário.

> **Faça backup antes de atualizar.** O banco IndexedDB fica **no navegador e na origem local**. Trocar o caminho, navegador ou domínio pode fazer aparecer uma instalação vazia. Isso não significa necessariamente que os dados foram apagados.

## Enviar para o GitHub

**Opção 1 (site):** crie um repositório **privado**, entre em **Add file → Upload files**, envie os arquivos e pastas deste ZIP **sem** a pasta externa. Depois clique em **Commit changes**.

**Opção 2 (Git):** na pasta dos arquivos, use:

```bash
git init
git add .
git commit -m "Edmilson Cell Premium v3.0"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Verificação automática

O workflow `.github/workflows/validar.yml` verifica se os dois arquivos essenciais estão presentes e se o JavaScript integrado tem sintaxe válida. **Não publica** o sistema na internet.

## Avisos essenciais

- **Não envie backups JSON, dados de clientes, fotos particulares ou IMEIs reais para o GitHub.** O `.gitignore` protege alguns nomes de arquivo, mas confira a lista antes de enviar.
- Este pacote **não tem instalador Windows** e **não sincroniza** automaticamente vários computadores.
- Não ative GitHub Pages para operar dados de clientes: Pages é uma publicação web e este aplicativo local não tem autenticação nem backend para proteger dados de uso compartilhado.
- Documentos emitidos são **comprovantes comerciais**, não NF-e/NFC-e oficiais.
- A gestão de brindes opera por categoria, e a conciliação de contas/recebimentos exige conferência manual.
- A validação de sintaxe **não substitui** testes funcionais de vendas, estoque, backup, garantias e caixa.

## Arquivos

- `index.html`: sistema completo
- `logo-edmilson-cell.png`: logomarca em PNG
- `.github/workflows/validar.yml`: checagem de integridade no GitHub Actions
- `README.md`: instruções
- `.gitignore`: exclusão de backups e dados locais do controle de versão
