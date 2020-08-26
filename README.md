<p align="center">
   <img src="https://github.com/ViniciusCCO/nlw-02/blob/master/assets/landing.svg" alt="Turma" width="400px"/>   
</p>

<h1 align="center">Proffy</h1>
<p align="center">:rocket: Plataforma para conectar professores e estudantes feito com React durante a semana NLW (Next Level Week) #02.</p>

<p align="center">
 <a href="#computer-Tecnologias">Tecnologias</a> •
 <a href="#Screenshots">Screenshots</a> • 
 <a href="#rocket-Como-executar-o-projeto">Como executar o projeto</a> • 
 <a href="#memo-licença">Licença</a>
</p>

## :computer: Tecnologias
<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expressjs.com/en/api.html#express">Express</a></li>
</ul>

## Screenshots
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
   <img src="https://github.com/ViniciusCCO/nlw-02/blob/master/assets/web-landing.png" width="400px">
   <img src="https://github.com/ViniciusCCO/nlw-02/blob/master/assets/web-list.png" width="400px">
</div>

## :rocket: Como executar o projeto

<p>Podemos considerar este projeto como sendo divido em três partes:</p>
<ul>
  <li>Back End (pasta server)</li>
  <li>Front End (pasta web)</li>
  <li>Mobile (pasta mobile)</li>
</ul>

<p>💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.</p>

### Pré-requisitos

<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org/">Node.js</a> e o <a href="https://yarnpkg.com/">Yarn</a>. 
Além disto é bom ter um editor para trabalhar com o código como o <a href="https://code.visualstudio.com/">VSCode</a>.</p>

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/nlw-02

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-02

# Vá para a pasta server
$ cd server

# Instale as dependências
$ yarn

# Crie o banco de dados
$ yarn knex:migrate

# Execute a aplicação
$ yarn start

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/nlw-02

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-02

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱Rodando a aplicação mobile

<p>Para rodar a aplicação mobile você precisa de um celular com o app do expo instalado ou um emulador android/ios.</p>

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/nlw-02

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-02

# Vá para a pasta da aplicação mobile
$ cd mobile

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start
```
<p>Depois leia o QRCode com o app do expo ou execute no emulador.</p>

## :memo: Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Vinicius Amorim 👋🏽 [Entre em contato!](https://www.linkedin.com/in/vinicius-amorim-6505/)
