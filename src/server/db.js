const MongoClient = require('mongodb').MongoClient;
const config = require('./config');


const getMongoDBClient = async () => {
    const client = await MongoClient.connect(config.MONGO_DB_URL, { useUnifiedTopology: true });
    return client;
};

// getMongoDBClient();
module.exports = getMongoDBClient();
