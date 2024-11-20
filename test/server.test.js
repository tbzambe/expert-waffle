import request from 'supertest';
import { app, server } from '../server';
import mock from './server.test.data';

describe('GET /posts', () => {
    it('deve retornar todas as fotos', async () => {
        return request(app)
            .get('/posts')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(JSON.parse(res.text)).toStrictEqual(mock.getAllPosts);
            })
    })
})

describe('GET /posts/:id', () => {
    it.each(mock.getPostsByIdParams)('deve retornar a foto %s', async (id, code, response) => {
        return request(app)
            .get(`/posts/${id}`)
            .expect('Content-Type', /json/)
            .expect(code)
            .then((res) => {
                expect(res.statusCode).toBe(code);
                expect(JSON.parse(res.text)).toStrictEqual(response);
            })
    })
})

describe('GET /posts/:id inválido', () => {
    it.each(mock.getPostsByIdInvalidParams)('deve retornar 404 para o valor %s', async (id, code, response) => {
        return request(app)
            .get(`/posts/${id}`)
            .expect('Content-Type', /text/)
            .expect(code)
            .then((res) => {
                expect(res.statusCode).toBe(code);
                expect(res.text).toStrictEqual(response);
            })
    })
})

describe('GET / inválido', () => {
    it.each(mock.getInvalidPath)('deve retornar 404 para o valor %s', async (path, code, response) => {
        return request(app)
            .get(`/${path}`)
            .expect('Content-Type', /text/)
            .expect(code)
            .then((res) => {
                expect(res.statusCode).toBe(code);
                expect(res.text).toStrictEqual(response);
            })
    })
})

afterEach(async () => {
    await server.close();
});