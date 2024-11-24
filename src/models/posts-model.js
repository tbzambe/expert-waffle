import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/db-config.js'

const conexao = await conectarAoBanco(process.env.MONGODB_CONEXAO);

export default {
    get: async () => {
        const db = conexao.db('imersao-instabytes');
        const colecao = db.collection('posts');
        return colecao.find().toArray();
    },
    getOne: async (id) => {
        const db = conexao.db('imersao-instabytes');
        const colecao = db.collection('posts');
        const objID = ObjectId.createFromHexString(id);
        return colecao.findOne({ _id: new ObjectId(objID) });
    },
    create: async (novoPost) => {
        const db = conexao.db('imersao-instabytes');
        const colecao = db.collection('posts');
        return colecao.insertOne(novoPost);
    },
    update: async (id, novoPost) => {
        const db = conexao.db('imersao-instabytes');
        const colecao = db.collection('posts');
        const objID = ObjectId.createFromHexString(id);
        return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
    }
}