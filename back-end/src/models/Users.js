const connection = require('./connection');

const collection = 'users';

const getAll = async () => connection()
    .then((db) => db.collection(collection).find().toArray());


const getByEmailPassword = async ({email, password}) => {
    const db = await connection();
    const user = await db.collection(collection).findOne({email, password});
    return user;
}

const getEmail = async (email) => {
    const db = await connection();
    const user = await db.collection(collection).findOne({email});
    return user;
}

module.exports = {
    getAll,
    getByEmailPassword,
    getEmail
 };