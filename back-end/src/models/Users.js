const connection = require('./connection');


const getAll = async () => connection()
    .then((db) => db.collection('users').find().toArray());


const getByEmailPassword = async ({email, password}) => {
    const db = await connection();
    const user = await db.collection('users').findOne({email, password});
    return user;
}


module.exports = {
    getAll,
    getByEmailPassword
 };