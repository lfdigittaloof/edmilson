const fs=require('node:fs');const path=require('node:path');
const base=path.join(__dirname,'..');const html=fs.readFileSync(path.join(base,'index.html'),'utf8');
for(const token of ['<html','</html>','logo-edmilson-cell.png','Vendas','Garantia']) if(!html.includes(token)) throw Error('Elemento ausente: '+token);
if(!fs.existsSync(path.join(base,'logo-edmilson-cell.png')))throw Error('Logotipo ausente');
const js=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
const vm=require('node:vm');for(const code of js) new vm.Script(code);
console.log('Estrutura e sintaxe do HTML/JS aprovadas. Testes funcionais ainda são necessários.');
