const { MongoClient } = require('mongodb');
const uri = "mongodb://admin:admin@db:27017/mydb";  // "db" = nombre del contenedor
const client = new MongoClient(uri);
