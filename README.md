# 📷 Amazon Gallery 📷

O Amazon Gallery é um projeto inspirado no Google Fotos e aplicativos semelhantes,
basicamente funciona como uma galeria para armazenar em nuvem as fotos que o usuário 
desejar, com isso não precisará se preocupar em perder suas fotos favoritas.

O principal motivo para o desenvolvimento desse projeto é o aprendizado sobre o Framework 
Serverless e serviços Cloud da AWS, mais especificamente Lambda Functions, S3 e Cognito.
## Stack utilizada

**Front-end:** ...

**Back-end:** Node.js, Express, AJV, Cognito, S3 e Lambda Functions.
## Instalação

Instale o projeto com os seguintes passos

```bash
  git clone https://github.com/BrunoSGomes/nodejs-gallery.git

  cd nodejs-gallery

  npm i
```
    
## Rodando os testes

Para rodar os testes de integração, rode o seguinte comando

```bash
  npm run test:integration
```

Caso queira rodar com a opção --watchAll

```bash
  npm run test:integration:watch
```

Para rodar os testes de unidade, rode o seguinte comando

```bash
  npm run test:unit
```

Caso queira rodar com a opção --watchAll

```bash
  npm run test:unit:watch
```
## Deploy

Para fazer o deploy é necessário fazer o push de uma branch com o prefixo releases/*

```bash
  git checkout -b releases/1

  git push origin releases/1
```


## Autor

- [@Bruno Gomes](https://www.github.com/brunosgomes)

