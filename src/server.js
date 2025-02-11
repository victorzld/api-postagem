import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { randomUUID } from 'node:crypto';

const app = fastify()
let posts = [];

app.register(fastifyCors, { origin: '*' })

app.post('/posts', async (request, reply) => {
    const { titulo, descricao, postagem, tag1, tag2 } = request.body;
    const novoPost = {
        id: randomUUID(),
        titulo,
        descricao,
        postagem,
        tag1,
        tag2,
        dataCriacao: new Date().toISOString(),
    };
    posts.push(novoPost);
    reply.code(201).send(novoPost);
});

app.get('/posts', async (_, reply) => {
    reply.send(posts);
});

app.put('/posts/:id', async (request, reply) => {
    const { id } = request.params;
    const { titulo, descricao, postagem, tag1, tag2 } = request.body;

    const index = posts.findIndex(post => post.id === id);
    if (index === -1) {
        return reply.code(404).send({ message: 'Post não encontrado' });
    }

    posts[index] = {
        ...posts[index],
        titulo,
        descricao,
        postagem,
        tag1,
        tag2,
    };
    reply.send(posts[index]);
});

app.delete('/posts/:id', async (request, reply) => {
    const { id } = request.params;
    posts = posts.filter(post => post.id !== id);
    reply.send({ message: 'Post deletado com sucesso' });
});

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})