# Lista de Tarefas

## :calendar: Planejamento

### Preparação
- [x] Ler a descrição do desafio inteira com atenção
- [ ] Tirar dúvidas sobre o escopo com os responsáveis

### Definir da Arquitetura
- [x] Pesquisar sobre Arquitetura Orientada a Serviços
- [x] Desenhar uma arquitetura inicial
  - [Arquitetura proposta](https://whimsical.com/Q9reGfZx6GFxoPeZxgDZSf)
- [ ] Validar arquitetura com especialistas

### Definir tecnologias
- [x] Definir as 2 linguagens de programação
  - Python: Gateway API
  - Typescript: Pedidos e Descontos
- [ ] Pesquisar sobre frameworks de microserviços para cada linguagem
  - Python: Faust
  - Typescript: Moleculer vs Nest.js (?)
- [x] Escolher qual tipo de banco de dados e DBMS
  - SQL + PostgreSQL
- [x] Mecanismo de mensageria
  - Kafka
- [ ] Validar tecnologias com especialistas

## :memo: Escopo do Desafio

### Tenho que fazer
- [ ] Atendar às regras de negócio
- [ ] Obedecer às restrições
- [ ] Observar os critérios de avaliação
- [x] Disponibilizar minha resposta para o desafio por meio de um repositório Git

### Devo fazer
- [ ] Testes unitários e de integração
- [ ] Validações e erros bem estruturados

### Poderia fazer
- [ ] Sistema deployado em algum provedor de cloud

### Não vou fazer
- [ ] Elaborar um front-end web ou de outro formato

### :heavy_check_mark: Desenvolver a aplicação
- [ ] Serviço 1: Gateway
  - [ ] **GET** `/price`
  - [ ] **POST** `/requests`
  - [ ] **GET** `/requests`
  - [ ] **PUT** `/requests`
  - [ ] **PATCH** `/requests`
  - [ ] **DELETE** `/requests`
  - [ ] **POST** `/discounts`
  - [ ] **PUT** `/discounts`
  - [ ] **PATCH** `/discounts`
  - [ ] **DELETE** `/discounts`
- [ ] Serviço 2: Pedidos de limpeza
  - [ ] Calcular o preço
  - [ ] Consultar descontos
  - [ ] Aplicar desconto
  - [ ] Retornar preço
  - [ ] Cadastrar pedido
  - [ ] Atualizar pedido
  - [ ] Deletar pedido
- [ ] Serviço 3: Descontos individuais
  - [x] Cadastrar descontos
  - [x] Retornar melhor desconto
  - [x] Atualizar desconto
  - [x] Deletar desconto
  - [ ] Refatorar - DDD 
  - [ ] Variáveis de ambiente
  - [ ] Docker files

## :question: Dúvidas
- É permitido criar dois descontos com o mesmo iguais pro mesmo usuário?
- O tipo do desconto deve ser exclusivamente valor absoluto ou porcentagem?
- O método PATCH deve ser genérico para aceitar atualização de qualquer parâmetro ou um parâmetro específico?
- Em caso de um menor preço total resultante igual entre diferentes descontos, qual será aplicado?
- Em caso de existir um desconto maior que o preço original e outro que seja exatamente igual (zerando o preço final, por exemplo), qual deve ser aplicado?
