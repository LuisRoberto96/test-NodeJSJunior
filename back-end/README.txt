Desafio Contele API Restfull

-> Este projeto tem como objetivo a criação de uma API RESTFUL em referência ao desafio da Empresa Contele para a vaga de NodeJS Junior.

-> Para exemplo da aplicação, foi feita uma API simples referente a manipulação de usuários.

-> Contato:
  -->luisfragosoh9@gmail.com

->O projeto consiste nas seguintes tecnologias:
--> 1. NodeJs
--> 2. JavaScript
--> 3. docker
--> 4. Knex
--> 5. Swagger
--> 6. HTTP
--> 7. express

-> Endereço e portas utilizadas pelo projeto:
--> Endereço: 0.0.0.0
--> Porta: 3000

-> Como documentação, seguem os presentes serviços na aplicação:
--> 1. CRUD de Usuários pelas Rotas GET, POST, PUT e DELETE.
-->1.1. /api/v1/users, rota GET responsável pela listagem dos dados dos usuários.
-->1.2. /api/v1/users/user_id , rota GET responsável pela listagem dos dados de um usuário.
-->1.3. /api/v1/users, rota POST responsável pela criação/cadastro de um usuário.
-->1.4. /api/v1/users/user_id, rota PUT responsável pela atualização/alteração de um usuário.
-->1.5. /api/v1/users, rota DELETE responsável pela remoção de todos os usuários.
-->1.6. /api/v1/users/user_id, rota DELETE responsável pela remoção de um único usuário
--> 2. Documentação Swagger.
-->2.1. /api-docs, rota responsável pela visualização da documentação referente a API e rotas utilizadas no projeto.

-> Como rodar este projeto:
--> 1. Em sua máquina, após abrir o projeto em seu editor favorito; no terminal de seu editor (no meu caso vscode) ou no seu terminal de seus sistema operacional, vá para a pasta em que encontra-se o esse projeto.
--> 2. Em seguida instale as dependências do projeto (npm install)
--> 3. faça o build do script do docker-compose (docker-compose build .)
--> 4. execute o script do docker-compose (docker-compose up)
  ---> Com isso, possivelmente sua aplicação estará rodando o servidor, caso não rode, siga para a seção de contato.
--> 5. Abra o seu software ou extensão de requisições (no meu caso utilizei a extensão vscode Thunder Client [uma extensão que simula o Insomnia pelo vscode] e o Insomnia para realização dos testes), então utilize:
  --->http://localhost:3000 para se comunicar com a aplicação
  --->Aqui só deixo explicado o endereço que será utilizado, ao utilizar essa rota, dará erro de conexão por não haver um front-end, para obter os resultados referentes as rotas siga o passo 5.
--> 6. Ao realizar a comunicação, em sua barra de endereço utilize algumas das rotas da api como a seguir (exemplos):
  --->http://localhost:3000/api/v1/users com a requisição GET para realizar a listagem de todos os usuários.
  --->http://localhost:3000/api/v1/users/user_id com a requisição PUT para atualizar os dados do usuário, passando o valor do id (valor numérico) no lugar de "user_id".
    ---> Nas requisições de criação e atualização do usuário, não esqueça de fornecer o corpo da requisição em formato .json
  ---> Em caso de dúvidas, vá para a seção de contato.
--> 7. Quando acabar de utilizar a aplicação, vá onde está rodando o script docker-compose (explicado no passo 1.,2.,3. e 4.) e cancele a execução e feche a aplicação
--> 8. Qualquer dúvida que surgir, ir para a seção de contato.
