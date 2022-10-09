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


const createUser = async (body) => {
   
           
    const db = await connection();
    const result = await db.collection(collection)
        .insertOne({...body})
        
    const newUser = {id: result.insertedId, ...body} 
    return(newUser)
     
    // parei ak 08/10
    
}




module.exports = {
    getAll,
    getByEmailPassword,
    getEmail,
    createUser
 };