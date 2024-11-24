import express from 'express';
import postsModel from './src/models/posts-model.js';
export const app = express();
app.use(express.json());

/**
 * Retorna 404 - Not Found para o cliente.
 * @param {Response} res - O objeto de resposta da requisição.
 * @returns Uma imagem com tags HTML informando o código HTTP 404, que acompanha a resposta.
 */
const retornaNotFound = (res) => res.status(404).send('<img src="https://http.cat/404">');

/**
 * Retorna 500 - Internal Server Error para o cliente.
 * @param {Response} res - O objeto de resposta da requisição.
 * @param {Error} [erro] - O erro inesperado (opcional), para log ou depuração.
 * @returns Uma imagem com tags HTML informando o código HTTP 500, que acompanha a resposta.
 */
const retornaInternalServerError = (res, erro) => {
    if (erro) {
        console.error('Erro inesperado no servidor:', erro);
    }
    return res.status(500).send('<img src="https://http.cat/500">');
};

/**
 * Retorna todas as fotos existentes.
 */
app.get('/posts', async (_, res) => {
    try {
        res.status(200).json(await postsModel.get());
    } catch (e) {
        retornaInternalServerError(res, e);
    }
})

/**
 * Retorna os dados da foto contendo o ID passado por parâmetro, e caso não encontre, 404.
 */
app.get('/posts/:id(\\w+)', async (req, res) => {
    try {
        const post = await postsModel.getOne(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            retornaNotFound(res);
        }
    } catch (e) {
        retornaInternalServerError(res, e);
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