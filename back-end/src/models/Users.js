const { ObjectId } = require('mongodb');
const connection = require('./connection');

const collection = 'users';

const getAll = async () => connection()
    .then((db) => db.collection(collection).find().toArray());


const getById = async (id) => {
    const db = await connection();
    const user = await db.collection(collection).findOne({ _id: ObjectId(id)});
    return user;
}


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


const createUser = async (body) => {
    const db = await connection();
    const result = await db.collection(collection).insertOne({...body})
    const newUser = {id: result.insertedId, ...body} 
    return(newUser)
}


const editUser = async (id, body) => {
    const db = await connection();
    await db.collection(collection).updateOne(
        {_id: ObjectId(id)},
        { $set: {...body}}
    )
}


module.exports = {
    getAll,
    getByEmailPassword,
    getEmail,
    createUser,
    getById,
    editUser
 };