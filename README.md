# Desafio UmHelp
Um teste para provar porque eu devo fazer parte da equipe da UmHelp.

## Objetivo
> [ ... elaborar 3 microsserviços que possibilitam o agendamento de serviços de limpeza por parte de um usuário, com a possibilidade de aplicação de descontos promocionais. Os serviços deverão expor, publicamente, uma interface REST que deve ser provida pelo serviço de gateway ...](https://github.com/da1help/desafios/blob/master/desafio-back-end.md)

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

## Planejamento

### Preparação
- [x] Ler a descrição do desafio inteira com atenção

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

### Desenvolver a aplicação
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
  - [ ] Cadastrar descontos
  - [ ] Retornar melhor desconto
  - [ ] Atualizar desconto
  - [ ] Deletar desconto

### Entidades
### Pedido de limpeza
- Identificação do pedido
- Data do pedido
- Duração da limpeza
- Identificação do usuário solicitante
- Preço
- Identificação do desconto aplicado
- Preço com desconto

### Desconto
- Identificação do desconto
- Tipo do desconto (valor absoluto ou porcentagem)
- Valor do desconto
- Identificação do usuário que tem direito ao desconto

## Dúvidas
- É permitido criar dois descontos com o mesmo tipo e valor pro mesmo usuário?
- O tipo do desconto deve ser exclusivamente valor absoluto ou porcentagem?

## Referências

### Arquitetura Orientada a Serviços
- [Microservice Architecture by Chris Richardson](https://microservices.io/)
- [.NET Microservices: Architecture for Containerized .NET Applications](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/)
- [SAGA | Microservices Architecture Patterns | Tech Primers](https://www.youtube.com/watch?v=WnZ7IcaN_JA)
- [Implementando Transações em Microsserviços](https://www.youtube.com/watch?v=mjWz3fOVhgw)

### Frameworks para Microsserviços
- [Moleculer - Progressive microservices framework for Node.js.](https://moleculer.services/docs/0.14/)
- [NestJs - Progressive Node.js framework for server-side applications - Microservices](https://docs.nestjs.com/microservices/basics)
- [Iniciando com NestJS - NestJS para Iniciantes](https://www.youtube.com/watch?v=ufSIGVs9X_8)
- [Seneca - a microservices toolkit for Node.js.](https://senecajs.org/getting-started/)
- [Faust - Python Stream Processing](https://faust.readthedocs.io/en/latest/index.html)

### Kafka
- [Apache Kafka: Trabalhando com Mensageria e Real Time](https://www.youtube.com/watch?v=LX19wk2B5Ak)
- [Dockerfile for Apache Kafka](https://github.com/wurstmeister/kafka-docker)
- [Implementing Saga Pattern in Nodejs Microservices](https://cloudnweb.dev/2020/01/implementing-saga-pattern-in-nodejs-microservices/)

### Docker
- [Dockerizing a Node.js web app](https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/)
- [Building a Microservice using Node js & Docker](https://www.youtube.com/watch?v=UWARTLO7TNQ&list=PLdiH6G4l8fpuswm1Crm7R8u-Bs2ma_XX4&index=2)

### Outros
- [Padrões de projeto com ESLint, Prettier e EditorConfig ](https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7)
