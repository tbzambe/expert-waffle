const expectedPosts = [{
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
const expectedNotFound = '<img src="https://http.cat/404">';

export default {
    getAllPosts: expectedPosts,
    getPostsByIdParams: [
        [expectedPosts[0].id, 200, expectedPosts[0]],
        [expectedPosts[2].id, 200, expectedPosts[2]],
        [expectedPosts[4].id, 200, expectedPosts[4]]
    ],
    getPostsByIdInvalidParams: [
        [6, 404, expectedNotFound],
        [-1, 404, expectedNotFound],
        ['a', 404, expectedNotFound]
    ],
    getInvalidPath: [
        [10, 404, expectedNotFound],
        ['oi/mano', 404, expectedNotFound],
        ['', 404, expectedNotFound],
        ['a', 404, expectedNotFound]
    ]
}