---
# :test_tube: Projeto de Testes Funcionais Automatizados de API REST | Cypress v13.15.0 | cypress-plugin-api v2.11.2 | Javascript | Commands 
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
---
# :information_source: Introdução
Este projeto "testes-automatizados-api-serve-rest_cypress" é executado em um ambiente de produção na ["API REST"](https://serverest.dev) do ["ServeRest"](https://github.com/ServeRest) que simula uma loja virtual, no navegador Chrome; no Sistema Operacional Windows 11, com o objetivo de praticar ainda mais testes automatizados de API REST em Cypress v13.15.0, cypress-plugin-api v2.11.2, Javascript e Commands.

- Documentações de referência
  - Cypress:
    - https://www.cypress.io/
    - https://docs.cypress.io/app/references/changelog#13-15-0
    - https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-Structure
    - https://docs.cypress.io/app/references/configuration#Videos
  - cypress-plugin-api:
    - https://www.npmjs.com/package/cypress-plugin-api/v/2.11.2

---
# :warning: _Instruções considerando Windows 11, para outras versões do Windows ou outros sistemas operacionais talvez seja necessário algumas adaptações_

# Antes de clonar ou executar esse projeto localmente no computador, é necessário ter os pré-requisitos e seguir as instruções abaixo :point_down:

## :hammer_and_wrench: Sistema Operacional 
- macOS 10.9 ou superior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux Ubuntu 20.04 ou superior, Fedora 21 e Debian 8 (x86_64 ou Arm 64 bits (x64 ou arm64)) 
- Windows 10 ou superior (apenas 64 bits)

## :hammer_and_wrench: Hardware
- Mínimo de 2 CPUs para rodar o Cypress
- 1 CPU adicional se a gravação de vídeo estiver ativada

## :hammer_and_wrench: Memória RAM
- 8 GB ou superior para execuções de teste mais longos

## :hammer_and_wrench: Janela do "Explorador de Arquivos" > "Visualizar" > "Mostrar" e marcar algumas opções
- No Windows 11, abrir uma janela do "Explorador de Arquivos"
- Clicar em "Visualizar" > "Mostrar"
- Clicar em "Extensões de nomes de arquivos" 
- Clicar em "Itens ocultos"

## :hammer_and_wrench: Instalar algumas dependências necessárias 
### Baixar e instalar o git e gitbash; configurar o git
- Caso ainda não tenha o git e gitbash baixado e instalado, acessar o link do [git e gitbash](https://git-scm.com/download/win), baixar e instalar como administrador
- Caso ainda não tenha configurado o git, seguir os passos apresentados neste link ["Configure a ferramenta"](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/#:~:text=Configure%20a%20ferramenta) e configurar

### Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento 
- Seguir os passos apresentados neste [link](https://www.google.com/search?q=desinstalar+completamente+nodejs+e+res%C3%ADduos+windows+11+pt-br+sem+programas+terceiros)
  
### Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo gitbash ou outro terminal  
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
> v18.12.1
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
> 8.19.2
- Fechar este gitbash ou terminal 

---
# :hammer_and_wrench: Clonar o projeto 
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde será clonado o projeto "testes-automatizados-api-serve-rest_cypress"
- Copiar esse diretório
- Abrir um novo gitbash
- Informar o comando abaixo para acessar onde será clonado o projeto
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação"
```
- Informar o comando abaixo para clonar este repositório via "HTTPS"

```
git clone https://github.com/AndressaKarla/testes-automatizados-api-serve-rest_cypress.git
```

- Ou informar o comando abaixo para clonar este repositório via "SSH"

```
git clone git@github.com:AndressaKarla/testes-automatizados-api-serve-rest_cypress.git
```

# :hammer_and_wrench: Instalar mais algumas dependências necessárias
- No gitbash aberto anteriormente, informar o comando abaixo para acessar o projeto “testes-automatizados-api-serve-rest_cypress” clonado anteriormente
```
cd testes-automatizados-api-serve-rest_cypress
```

- Informar o comando abaixo para forçar, mesmo tendo possíveis conflitos, a instalação das dependências do projeto
```
npm install --force
```

# :hammer_and_wrench: Instalar as extensões no Visual Studio Code (VS Code)
- Caso ainda não tenha o VS Code baixado e instalado, acessar o site do [Visual Studio Code](https://code.visualstudio.com/download), baixar e instalar com a opção "System Installer"
- Com o Visual Studio Code aberto, caso seja apresentado alguma mensagem de "Instalar pacote de idiomas ...", clicar no ícone de configurações > "Don't Show Again"
- Clicar em "Manage" > "Profiles" > "Create Profile"
- Em "Profile name", informar "Cypress API"
- Clicar em "Create"
- Clicar em "Extensions", informar e instalar as extensões abaixo:
  - Hyper Term Theme
    - HasseNasse
      - Clicar em "Hyper Term Black" apresentada para habilitar a extensão
  - Material Icon Theme
    - Philipp Kief
      - Clicar em "Material Icon Theme" apresentada para habilitar a extensão 
  - Cypress Snippets
    - Cliff Su
- Fechar o VS Code

# :bookmark_tabs: Abrir o VS Code diretamente na pasta do projeto "testes-automatizados-api-serve-rest_cypress"
- No gitbash aberto anteriormente, informar o comando abaixo para abrir o VS Code diretamente na pasta do projeto "testes-automatizados-api-serve-rest_cypress"
```
code .
```
- Aguardar o VS Code ser aberto
- Fechar este gitbash
- No VS Code aberto, caso seja apresentado "Do you trust the authors on the files in this folder?", marcar "Trust the authors of all files in the parent folder ...."
  - Clicar em "Yes, I trust the authors ...."

# :hammer_and_wrench: Criar arquivos "usuario.json", informando os dados com base nos arquivos "usuario.example.json", etc
- No VS Code aberto anteriormente, acessar "cypress > fixtures"
- Criar o arquivo "usuario.json"
  - Informar os dados com base no arquivo ["usuario.example.json"](./cypress/fixtures/usuario.example.json)
  - Salvar o arquivo "usuario.json" com os dados informados anteriormente

---
# :dart: Executar testes automatizados E2E (ponta a ponta) e Gerar os resultados dos testes no computador
## :triangular_flag_on_post: Executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em um ambiente de produção na interface gráfica do Cypress e Gerar os resultados dos testes no computador (cypress > screenshots)
- Ter o navegador Chrome instalado
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-api-serve-rest_cypress”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-api-serve-rest_cypress"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-api-serve-rest_cypress"
```
- Informar o comando abaixo para abrir a interface gráfica do Cypress 
```
npm run cy:open
```
- NÃO fechar esse gitbash
- Na interface gráfica do Cypress, clicar em "Continue"
- Em "Welcome to Cypress!", clicar em "E2E Testing"
- Em "Choose a browser", clicar em "Chrome"
- Clicar em "Start E2E Testing in Chrome"
- Em "testes-automatizados-api-serve-rest_cypress" > "Specs"> "E2E specs" > "cypress\e2e\api", clicar em "post-login", "post-produto", etc
- Após executar os testes, fechar todas as interfaces gráficas do Cypress

## :triangular_flag_on_post: Ou executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em modo headless (2° plano) em um ambiente de produção e Gerar os resultados dos testes no computador (cypress > screenshots; cypress > videos)
- No gitbash aberto anteriormente, informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em modo headless (2º plano) em um ambiente de produção e Gerar os resultados dos testes no computador (cypress > screenshots; cypress > videos):
```
npm run test
```

---
# :mag_right: Verificar os resultados das execuções dos testes automatizados e2e no computador 
## :bookmark_tabs: Screenshots no computador
- No VS Code aberto anteriormente, em "cypress > screenshots", acessar "nome-suite-testes.cy.js"

Ex.:
> post-login.cy.js

- Clicar 2 vezes sob os screenshots 
  
Ex.:
> POST login -- POST login com usuário administrador ... - Apresentar status ... (failed).png
>
> . . .
>
> POST produto -- POST produto ... - Apresentar status ... -- after each hook.png   

## :bookmark_tabs: Vídeos no computador
- No VS Code aberto anteriormente, acessar "cypress > videos"
  
Ex.:
> post-produto.cy.js.mp4

---
### Feito com ❤️ por Andressa Karla :wave: 

### [![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla) [![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla/)](https://www.linkedin.com/in/andressakarla/)

---
