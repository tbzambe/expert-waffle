# expert-waffle (instabytes)

Este projeto é parte do acompanhamento do curso [Imersão Back-End](https://www.alura.com.br/imersao-dev-back-end-google-gemini), oferecido pela Alura em parceria com o Google Gemini. O objetivo é proporcionar aos alunos uma introdução prática ao desenvolvimento de sistemas back-end, utilizando tecnologias modernas e populares, como o Node.js, além de explorar práticas recomendadas no desenvolvimento de APIs RESTful.

## Índice

- [Instalação](#instalação)
- [Utilização](#utilização)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Antes de começar, é necessário garantir que o Node.js e o npm (Node Package Manager) estejam instalados em seu sistema. Caso não tenha o Node.js instalado, você pode seguir os links abaixo para obter as versões mais recentes e a documentação oficial:
- [Instalação do Node.js](https://nodejs.org) - LTS/JOD
- [Instalação do npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Com essas ferramentas instaladas, você pode seguir os passos abaixo para preparar o ambiente do projeto.

### Passos:

1. Clone o repositório para o seu ambiente local. Este comando irá baixar o repositório do projeto para o seu computador:
```bash
git clone git@github.com:tbzambe/expert-waffle.git
```

2. Instale as dependências do projeto. Isso instalará todos os pacotes que o projeto precisa para rodar corretamente:

```bash
cd expert-waffle
npm i
```

3. Crie um arquivo `.env` na raiz do projeto para conter as variáveis do ambiente. As variáveis necessárias para o funcionamento são as seguintes, apenas lembre-se de alterar seus valores:

```bash
MONGODB_CONEXAO=mongodb://username:password@localhost:27017
PORT=3000
```

## Utilização

Uma vez com o ambiente configurado, você pode rodar a aplicação de forma simples e rápida.

### Executando o projeto

Para iniciar o servidor, execute o seguinte comando:

```bash
node server.js
```

Esse comando iniciará o servidor e a aplicação estará acessível no endereço `http://localhost:3000`.

Atualmente, o projeto conta com as funcionalidades básicas implementadas até a segunda aula do curso, permitindo que você interaja com uma API simples que lida com posts e fotos.

<details>
 <summary><code>GET</code> <code><b>/posts</b></code> <code>Recupera uma lista de objetos com fotos</code></summary>

> ### Descrição
> Esse endpoint retorna uma lista de objetos, cada um representando uma foto, com informações relacionadas (como descrição e URL).
> ### Parâmetros
> | nome | tipo | tipo de dado | descrição |
> |------|------|--------------|-----------|
> | N/A  | N/A  | N/A          | N/A       |
> ### Respostas
> | código http | content-type               | resposta                                 |
> |-------------|----------------------------|------------------------------------------|
> | `200`       | `application/json`         | `[{id:1,descricao:'Um gato fazendo balé',imagem:'https://placecats.com/300/300'},{id:2,descricao:'Um gato explorando uma caixa',imagem:'https://placecats.com/300/300'},{id:3,descricao:'Um gato dormindo em uma cama',imagem:'https://placecats.com/300/300'},{id:4,descricao:'Um gato brincando com um novelo de lã',imagem:'https://placecats.com/300/300'},{id:5,descricao:'Um gato tomando sol na janela',imagem:'https://placecats.com/300/300'}]` |
> | `404`       | `text/plain;charset=UTF-8` | `<img src="https://http.cat/404">`       |
> ### Exemplo de cURL
> ```bash
>  curl --request GET --url http://localhost:3000/posts
> ```
</details>

<details>
 <summary><code>GET</code> <code><b>/posts/{id}</b></code> <code>Recupera um objeto com foto por ID</code></summary>

> ### Descrição
> Através desse endpoint, você pode recuperar informações de um único objeto de foto, utilizando o ID específico para consulta.
> ### Parâmetros
> | nome | tipo | tipo de dado | descrição                   |
> |------|------|--------------|-----------------------------|
> | id   | path | numérico     | ID da foto a ser recuperada |
> ### Respostas
> | código http | content-type               | resposta                                 |
> |-------------|----------------------------|------------------------------------------|
> | `200`       | `application/json`         | `{id:1,descricao:'Um gato fazendo balé',imagem:'https://placecats.com/300/300'}` |
> | `404`       | `text/plain;charset=UTF-8` | `<img src="https://http.cat/404">`       |
> ### Exemplo de cURL
> ```bash
>  curl --request GET --url http://localhost:3000/posts/1
> ```
</details>

Essas rotas básicas fazem parte da construção da API e são utilizadas para mostrar como gerenciar requisições HTTP em um back-end real. O código está estruturado para facilitar a compreensão dos conceitos fundamentais de um servidor Node.js com Express.

## Contribuição

Este projeto está aberto a contribuições! Se você deseja melhorar ou adicionar novas funcionalidades, basta seguir as etapas abaixo:

1. Faça um fork do repositório para sua conta no GitHub.
2. Crie uma nova branch para sua feature ou correção. Utilize um nome descritivo para a branch:
```bash
git checkout -b feature/nome-da-feature
```
3. Realize suas alterações no código, certificando-se de que tudo esteja funcionando corretamente e de acordo com as melhores práticas.
4. Envie suas alterações para o seu repositório remoto (fork):
```bash
git push origin feature/nome-da-feature
```
5. Abra um pull request para a branch principal (master) do repositório original.

Agradeço sua contribuição para a melhoria deste projeto e meu aprendizado!

## Licença

Este projeto está licenciado sob a Licença MIT. Isso significa que você pode usar, modificar e distribuir este código de forma livre, contanto que preserve o aviso de licença original e a isenção de responsabilidade. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE.txt).
