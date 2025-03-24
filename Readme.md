# MailExpress

**MailExpress** é um sistema desenvolvido em **Node.js** que gerencia o cadastro de usuários e o envio de e-mails de confirmação de cadastro de forma assíncrona, utilizando o **Redis** para processamento em segundo plano e o **Mailtrap** para o envio e captura dos e-mails.

Este projeto foi criado para demonstrar conceitos de processamento assíncrono de tarefas com Node.js e Redis, proporcionando uma experiência ágil e escalável para o envio de e-mails de confirmação de cadastro.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construir APIs RESTful de forma simples e rápida.
- **Redis**: Sistema de banco de dados em memória usado para gerenciar o processamento assíncrono das tarefas.
- **Mailtrap**: Serviço para capturar e-mails enviados durante o desenvolvimento e testes, sem enviar e-mails reais aos usuários.
- **Nodemailer**: Pacote para enviar e-mails via SMTP em Node.js.
- **Bull**: Biblioteca para gerenciamento de filas de trabalho assíncronas em Node.js.
  
## Funcionalidades

- **Cadastro de Usuário**: Os usuários podem se cadastrar fornecendo informações como nome e e-mail.
- **Envio Assíncrono de E-mail**: Após o cadastro, um e-mail de confirmação é enviado para o usuário, utilizando o Mailtrap para testes e desenvolvimento.
- **Fila de Processamento de E-mail**: O envio de e-mail é feito de maneira assíncrona utilizando Redis e a biblioteca Bull para gerenciar as filas de trabalho, garantindo que os e-mails sejam enviados sem impactar a performance da aplicação.
- **Testes com Mailtrap**: Os e-mails são enviados para Mailtrap, permitindo a captura e visualização dos e-mails de forma segura durante o desenvolvimento.

## Instalação

Siga os passos abaixo para rodar este projeto localmente.

### 1. Clone o Repositório

```bash
git clone https://github.com/resenhandodirei/MailExpress.git


Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências:

bash
Copy
Edit
npm install```
### 2. Configure o Redis
Certifique-se de ter o Redis instalado e em execução na sua máquina. Se necessário, você pode utilizar o Docker para configurar o Redis.

bash
Copy
Edit
docker run --name redis -p 6379:6379 -d redis
### 4. Configure o Mailtrap
Crie uma conta no Mailtrap.

Crie um novo inbox no Mailtrap.

Copie as configurações de SMTP fornecidas pelo Mailtrap e adicione ao arquivo .env.

#### Exemplo de configuração no arquivo .env:

init
Copy
Edit
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=587
MAIL_USER=seu_usuario_mailtrap
MAIL_PASS=sua_senha_mailtrap
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
### 5. Inicie o Servidor
Após configurar o Redis e o Mailtrap, inicie o servidor com o seguinte comando:

```npm start
A aplicação estará disponível em http://localhost:8080.

Endpoints da API
POST /users
Cria um novo usuário e envia um e-mail de confirmação.

Request Body:
{
  "name": "Nome do Usuário",
  "email": "email@dominio.com"
}
Resposta:
{
  "message": "Cadastro realizado com sucesso. Um e-mail de confirmação foi enviado."
}
Status de Respostas:
200 OK: Cadastro realizado com sucesso e e-mail enviado.

400 Bad Request: Dados de entrada inválidos.

500 Internal Server Error: Erro no servidor.

Testes
Os testes são feitos usando o Mailtrap, onde você pode verificar os e-mails enviados. Acesse a sua conta no Mailtrap para visualizar os e-mails de teste.

##### Melhorias Futuras
Adicionar validações de entrada mais robustas.

Implementar a funcionalidade de confirmação do e-mail (clicar no link para validar o e-mail).

Monitoramento das filas de envio de e-mail para maior controle de erros.

#### Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

#### Contato
Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.