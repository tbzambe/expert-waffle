import express from 'express';
import postsModel from './src/models/posts-model.js';
export const app = express();
app.use(express.json());

/**
 * Retorna 404 - Not Found para o cliente.
 * @param {Response} res O objeto de resposta da requisição.
 * @returns Uma imagem com tags HTML informando o código HTTP 404, que acompanha a resposta.
 */
const retornaNotFound = (res) => res.status(404).send('<img src="https://http.cat/404">');

/**
 * Retorna todas as fotos existentes.
 */
app.get('/posts', async (_, res) => {
    res.status(200).json(await postsModel.get());
})

/**
 * Retorna os dados da foto contendo o ID passado por parâmetro, e caso não encontre, 404.
 */
app.get('/posts/:id(\\w+)', async (req, res) => {
    const post = await postsModel.getOne(req.params.id);
    if (post) {
        res.status(200).json(post);
    } else {
        retornaNotFound(res);
    }
})

/**
 * Fallback caso nenhuma rota conhecida seja passada.
 */
app.get('*', (_, res) => {
    retornaNotFound(res);
})

/**
 * Inicia o servidor.
 */
export const server = app.listen(process.env.PORT, () => {
    console.log('Servidores escutando...');
})