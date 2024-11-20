import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());

/**
 * Fotos provisórias para exibição.
 */
const fotos = [{
    id: 1,
    descricao: 'Um gato fazendo balé',
    imagem: 'https://placecats.com/300/300'
}, {
    id: 2,
    descricao: 'Um gato explorando uma caixa',
    imagem: 'https://placecats.com/300/300'
}, {
    id: 3,
    descricao: 'Um gato dormindo em uma cama',
    imagem: 'https://placecats.com/300/300'
}, {
    id: 4,
    descricao: 'Um gato brincando com um novelo de lã',
    imagem: 'https://placecats.com/300/300'
}, {
    id: 5,
    descricao: 'Um gato tomando sol na janela',
    imagem: 'https://placecats.com/300/300'
}];

/**
 * Função que retorna uma foto de acordo com o seu ID. Essa função não trata o valor recebido por
 * parâmetro, apenas utiliza-o inferindo ser a representação de um numeral.
 * @param {Object} id ID do objeto a ser retornado.
 * @returns O objeto da coleção de fotos que possua o ID indicado.
 */
const retornaPost = (id) => fotos.find((fotos) => fotos.id === Number(id));

/**
 * Retorna 404 - Not Found para o cliente
 * @param {Response} res O objeto de resposta da requisição.
 * @returns Uma imagem com tags HTML informando o código HTTP 404, que acompanha a resposta.
 */
const retornaNotFound = (res) => res.status(404).send('<img src="https://http.cat/404">');

/**
 * Retorna todas as fotos existentes.
 */
app.get('/posts', (_, res) => {
    res.status(200).json(fotos);
})

/**
 * Retorna os dados da foto contendo o ID numérico passado por parâmetro, e caso não encontre, 404.
 */
app.get('/posts/:id(\\d+)', (req, res) => {
    const post = retornaPost(req.params.id);
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
app.listen(PORT, () => {
    console.log('Servidores escutando...');
})