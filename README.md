## Instruções de instalação

Comecei criando um repositório NODE vazio: 
```sh
npm init -y 
```
(-y para não precisar especificar as características do repositório como descrição, etc.)

Você precisa ter o typescript instalado no seu computador: npm i typescript -g (-g faz com que o pacote seja instalado globalmente e não no repositório do seu projeto)

Também instalei o typescript como dependência de desenvolvimento, ou seja, instalar o pacote dentro do seu projeto
```sh
npm i -D typescript @types/node
```

--OBS: -D é a mesma coisa que --save-dev
O @types mostra que estamos passando uma tipagem para o typescript, que no caso é a biblioteca node, que é o que vem atrás do /

Dessa forma, estamos transformando nosso código compilado em javascript

Mais duas bibliotecas, o nodemon faz com que conseguimos rodar os scripts e recarregar o projeto já atualizado e o ts-node que vai fazer com que o typescript rode da forma correta
```sh
npm i -D nodemon ts-node
```

A ideia era rodar o projeto através do comando: npm run dev, e para isso, foi necessário adicionar um script no projeto, para que quando o comando fosse dado, o script fosse executado de forma automática: 
"dev": "nodemon --exec ts-node --transpile-only --files index.ts",
