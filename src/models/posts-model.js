import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../configs/db-config.js'

const conexao = await conectarAoBanco(process.env.MONGODB_CONEXAO);

const db = conexao.db(process.env.DB_NOME);
const colecao = db.collection(process.env.COLECAO_POSTS_NOME);

/**
 * Converte uma string de ID em um objeto ObjectId.
 *
 * @param {string} id - O ID em formato de string hexadecimal a ser convertido.
 * @throws {Error} Se o ID fornecido não for válido.
 * @returns {ObjectId} O ID convertido em um ObjectId.
 */
const toObjectId = (id) => {
    if (!ObjectId.isValid(id)) {
        throw new Error('Formato de ID inválido');
    }
    return ObjectId.createFromHexString(id);
};

export default {
    /**
     * Recupera todos os documentos da coleção "posts" com paginação.
     * @param {number} [page=1] - Número da página.
     * @param {number} [limit=10] - Número de documentos por página.
     * @returns {Promise<Array>} Uma promessa que resolve para os documentos encontrados.
     */
    get: async (page = 1, limit = 10) => {
        const skip = (page - 1) * limit;
        return colecao.find().skip(skip).limit(limit).toArray();
    },

    /**
     * Recupera um documento específico da coleção "posts".
     * @param {string} id - O ID do documento a ser recuperado.
     * @returns {Promise<Object|null>} O documento encontrado ou null.
     */
    getOne: async (id) => colecao.findOne({ _id: toObjectId(id) }),
    
    /**
     * Insere um novo documento na coleção "posts".
     * @param {Object} novoPost - O objeto representando o novo documento.
     * @returns {Promise<Object>} O resultado da operação de inserção.
     */
    create: async (novoPost) => colecao.insertOne(novoPost),

    /**
     * Atualiza um documento existente na coleção "posts".
     * @param {string} id - O ID do documento a ser atualizado.
     * @param {Object} novoPost - Os novos dados para o documento.
     * @returns {Promise<Object>} O resultado da operação de atualização.
     */
    update: async (id, novoPost) => colecao.updateOne({ _id: toObjectId(id) }, { $set: novoPost })
}