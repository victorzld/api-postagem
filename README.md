![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)

# Blog Post API 💻

O projeto é uma API para gerenciamento de posts em um blog. Ele permite criar, listar, editar e excluir posts, armazenando informações como título, descrição, conteúdo, tags e data de criação.

A API foi desenvolvida utilizando Node.js e o framework Fastify, garantindo alta performance e simplicidade no desenvolvimento. Além disso, utiliza a biblioteca UUID para gerar identificadores únicos para cada post. 

## 🚀 Primeiros passos

Para utilizar a aplicação localmente, é necessário ter instalado em sua máquina:

- <a href="https://nodejs.org/en">NodeJs</a>
- <a href="https://git-scm.com">Git</a>

### Clonar

Para clonar este projeto na sua máquina local:

```bash
git clone https://github.com/victorzld/api-postagem.git
```

### Iniciar o projeto

Para iniciar o seu projeto:

```bash
cd api-postagem
pnpm i
pnpm run dev
```

## 📍 API Endpoints

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /posts</kbd>     | cria uma postagem - [response details](#post-api)                                   
| <kbd>GET /posts</kbd>     | lista todos os posts criados - [response details](#get-api)
| <kbd>PUT /posts/:id</kbd>     | permite editar o post correspondente ao id - [response details](#put-api)
| <kbd>DELETE /posts/:id</kbd>     | deleta o post correspondente ao id - [response details](#delete-api)


<h3 id="post-api">POST /posts</h3>

REQUEST

```bash
{
    "titulo": "JavaScript",
    "descricao": "O que é JavaScript?",
    "postagem": "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    "tag1": "javascript",
    "tag2": "web"
}

```

RESPONSE

```bash
{
  
"id": "6f41c6db-8033-4e90-828d-0c74f67dd8a4",
  "titulo": "JavaScript",
  "descricao": "O que é JavaScript?",
  "postagem": "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  "tag1": "javascript",
  "tag2": "web",
  "dataCriacao": "2025-02-11T03:45:06.136Z"
}
```

<h3 id="get-api">GET /posts</h3>

RESPONSE

```bash

[
  {
    "id": "af70d6fb-edee-409b-a8f1-84b304e6262c",
    "titulo": "JavaScript",
    "descricao": "O que é JavaScript?",
    "postagem": "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    "tag1": "javascript",
    "tag2": "web",
    "dataCriacao": "2025-02-11T03:46:27.108Z"
  }
]
```

<h3 id="put-api">PUT /posts/:id</h3>

REQUEST

```bash
{
    "titulo": "JavaScript",
    "descricao": "O que é JavaScript?",
    "postagem": "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    "tag1": "node",
    "tag2": "react"
}
```

RESPONSE 

```bash

{
  "id": "af70d6fb-edee-409b-a8f1-84b304e6262c",
  "titulo": "JavaScript",
  "descricao": "O que é JavaScript?",
  "postagem": "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  "tag1": "node",
  "tag2": "react",
  "dataCriacao": "2025-02-11T03:46:27.108Z"
}
```

<h3 id="delete-api">DELETE /posts/:id</h3>

RESPONDE

```bash
{
  "message": "Post deletado com sucesso"
}
```

## Licença

<a href="/LICENSE" >MIT</a>
