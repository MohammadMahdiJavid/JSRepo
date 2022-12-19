const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require("fs");

// const credentials = "<path_to_certificate>";
const credentials = "./X509-cert-7440544130883908136.pem";

const client = new MongoClient(
    "mongodb+srv://cluster0.suhmnqf.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
    {
        sslKey: credentials,
        sslCert: credentials,
        serverApi: ServerApiVersion.v1,
    }
);

async function run() {
    try {
        await client.connect();
        await listDatabases(client);
        const database = client.db("testDB");
        const collection = database.collection("testCol");
        const docCount = await collection.countDocuments({});
        console.log(docCount);
        // perform actions using client
    } catch (e) {
        console.error(e);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

async function listDatabases(client) {
    const dataBasesList = await client.db().admin().listDatabases();
    dataBasesList.databases.forEach((db) => {
        console.log(`- ${db.name}`);
    });
}
