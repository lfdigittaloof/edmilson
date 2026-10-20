# Edmilson Cell Premium v3.0

Sistema de gestão local, com cadastro de celulares/IMEI, venda, garantias e financeiro.

## Gerar instalador no GitHub

1. Envie todos os arquivos **e pastas** deste projeto para a raiz do repositório (não envie somente o ZIP). Para pastas ocultas `.github`, prefira **GitHub Desktop**, git ou a opção de upload que preserve a estrutura.
2. Vá a **Actions → Gerar instalador Windows → Run workflow** (ou aguarde o workflow disparado no push).
3. Após a execução bem-sucedida, abra a execução e baixe **Edmilson-Cell-Premium-Setup-v3.0** em **Artifacts**.
4. Extraia o arquivo baixado e execute `Edmilson-Cell-Premium-Setup-3.0.0.exe` no Windows.

O instalador inclui atalho da área de trabalho e menu Iniciar. Como é um aplicativo sem certificado de assinatura digital, o Windows pode apresentar alerta de segurança.

## Uso e segurança

- Os registros são mantidos localmente no banco IndexedDB, no perfil do aplicativo, não no GitHub.
- **Antes de trocar da versão web para o instalador, exporte um backup JSON**, depois importe no programa instalado. Os dois perfis de dados são separados.
- Não publique backups, nomes de clientes, números de documentos e IMEIs reais no GitHub. **O repositório informado está público**.
- O aplicativo ainda não possui sincronização em nuvem, atualização automática ou emissão fiscal oficial.
- O workflow gera um **instalador de testes**, ainda não homologado para operação comercial. Teste impressão, backups, vendas e edição de garantias.

## Desenvolvimento

Requer Node.js 22. Execute `npm install` e `npm start` para testar, ou `npm run dist:win` em Windows para construir o instalador.

O GitHub Actions só cria o instalador se o workflow concluir com sucesso; o ZIP fornecido não inclui um `Setup.exe` previamente compilado.
