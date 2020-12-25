# GIT / GITHUB #

### Funcionalidades git ###

`git init` // inicia linha do tempo (cria o arquivo .git)

   para desfazer o git init, basta apagar o arquivo .git na raiz
   
`git add` // adiciona ou atualiza mudanças para irem para a linha do tempo

  `git add .` /// Adiciona todos os arquivos
  
`git status` // informa o estado das alterações do projeto

`git commit` // adiciona um ponto na linha do tempo

  `git commit -am "message"` // adiciona todos os arquivos a um ponto na linha do tempo

`git log` // visualiza os pontos na linha do tempo (commits)

`git show` // apresenta determinado ponto na historia

`git branch` // Cria uma ramificação separada

`git branch` // Mostra todas as branchs

`git branch --NOME-BRANCH--` // cria uma nova branch

`git branch -D --NOME-BRANCH--` // Apaga branch

`git checkout` // Troca entre as ramificações

`git checkout --PONTO LINHA DO TEMPO-- -- arquivo.md` // Volta a versão do arquivo para a selecionada

`git merge --NOME-BRANCH--` // Une branchs, une a branch atual com a selecionada


### Login Gitub ###

`git config --global user.email "lucasviniciusblante@gmail.com"`

`git config --global user.name "Lucas Blante"`

`git config credential.helper store`

### Github ###

`gh repo create` // Cria o repositorio no GitHub

`git remote set-url origin https://github.com/lucasblante/--REPOSITORIO--` // Seleciona o repositorio

`git remote -v` // Mostra os repositorios existentes

`git push -u origin master` // Cria a branch principal e envia os repositorio

`git push` // Envia o repositorio da branch atual

`git clone https://github.com/--AUTOR--/--REPOSITORIO--` // Copia um repositorio

`git pull` // Atualiza mundaças feitas no repositorio clonado
