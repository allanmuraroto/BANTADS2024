Com base no arquivo `package.json` fornecido, posso incluir informações mais detalhadas sobre a instalação e execução do front-end no `README.md`. Aqui está a versão atualizada do `README.md` com essas informações:

---

# BANTADS - Internet Banking

Este é um projeto de Internet Banking desenvolvido como parte da disciplina **DS152 - Desenvolvimento de Sistemas** no curso de **TADS - UFPR**. O sistema é baseado em uma arquitetura de microsserviços, utilizando **Angular** para o front-end e **Java Spring** para o back-end.

## Funcionalidades

O sistema oferece três perfis de acesso:

- **Cliente**: Usuários que podem realizar operações bancárias como depósitos, saques e transferências.
- **Gerente**: Usuários responsáveis pela aprovação de novos clientes e pela gestão de contas.
- **Administrador**: Usuários que possuem acesso a informações de gerenciamento de todo o banco, como a quantidade de clientes por gerente e o saldo total das contas.

### Requisitos Funcionais

- **Autocadastro de Clientes**: Um cliente pode se cadastrar diretamente no sistema, com sua conta pendente de aprovação pelo gerente.
- **Operações Bancárias**: Depósito, saque e transferência.
- **Consulta de Saldo e Extrato**: O cliente pode consultar seu saldo e extrato a qualquer momento.
- **Gerenciamento de Clientes**: O gerente pode aprovar ou recusar novos clientes e visualizar informações detalhadas das contas.
- **Dashboard do Administrador**: O administrador tem uma visão geral dos gerentes e de seus clientes.

## Arquitetura

O sistema é dividido em microsserviços, conforme os subdomínios a seguir:

- **Cliente**: Gerenciamento de dados dos clientes.
- **Conta**: Gerenciamento de contas e histórico de transações.
- **Gerente**: Gerenciamento dos dados de gerentes.
- **Autenticação**: Controle de autenticação de usuários.

Cada serviço possui seu próprio banco de dados, seguindo o padrão **Database per Service**. A comunicação entre os serviços é realizada via **API Gateway**, e o serviço de **Conta** segue o padrão **CQRS** para consulta de dados. O sistema também utiliza **SAGA Orquestrada** para gerenciar transações distribuídas entre os microsserviços.

## Tecnologias Utilizadas

- **Front-end**: Angular 15, Node.js
- **Back-end**: Java Spring Boot, Spring Data JPA
- **Banco de Dados**: PostgreSQL
- **Mensageria**: RabbitMQ
- **Containerização**: Docker

## Requisitos para Execução

- Docker
- Node.js (versão recomendada: 16.x ou superior)
- Angular CLI
- Java 11 ou superior
- PostgreSQL

## Instalação e Execução

### Front-end (Angular)

1. Navegue até a pasta `src/` no terminal.
2. Instale as dependências com o seguinte comando:

   ```bash
   npm install
   ```

3. Para rodar o servidor de desenvolvimento, utilize o comando:

   ```bash
   npm start
   ```

   O projeto será servido no endereço: `http://localhost:4200/`.

4. Para construir a aplicação para produção, utilize:

   ```bash
   npm run build
   ```

5. Para executar os testes unitários, rode:

   ```bash
   npm test
   ```

### Back-end (Java Spring Boot)

1. Certifique-se de que o PostgreSQL esteja rodando e configurado conforme o ambiente de desenvolvimento.
2. Compile o projeto Java com Maven ou Gradle.
3. Execute o serviço de autenticação e os demais microsserviços com o comando:

   ```bash
   java -jar AuthApplication.java
   ```

4. O sistema pode ser acessado via o **API Gateway**, que encaminha as solicitações para os microsserviços.

## Containerização

Todos os componentes do sistema estão conteinerizados utilizando Docker. Para rodar o sistema completo com todos os microsserviços e bancos de dados, utilize o seguinte comando:

```bash
docker-compose up
```

Isso irá subir o front-end, back-end e os bancos de dados necessários.

## Estrutura do Projeto

- `src/`: Código fonte do front-end em Angular.
- `server/`: Código fonte do back-end em Java Spring Boot.
- `.vscode/`: Configurações do Visual Studio Code.
- `package.json`: Arquivo de configuração do Node.js com as dependências do front-end.
- `tsconfig.json`: Configuração do TypeScript para o projeto Angular.
- `angular.json`: Configurações específicas do Angular.

## Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto. Para isso:

1. Faça um fork do projeto.
2. Crie um branch para a nova funcionalidade: `git checkout -b feature/nova-funcionalidade`.
3. Faça o commit das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie as alterações para o repositório remoto: `git push origin feature/nova-funcionalidade`.
5. Abra um Pull Request.

---

Agora o `README.md` está mais completo e reflete as instruções específicas para a instalação e execução do projeto com base no arquivo `package.json` e no enunciado do trabalho. Se houver mais detalhes técnicos que queira adicionar, estou à disposição para ajustar!
