# MongoDB

* [Download Mongo DB](https://www.mongodb.com/try/download/community)
* [Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/)
* [MongoDB and Node.js Tutorial - CRUD Operations](https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/)
* [Mongo JS](https://www.mongodb.com/developer/languages/javascript/tutorials/)
* [Mongo DB & Node JS Youtube](https://www.youtube.com/watch?v=fbYExfeFsI0&ab_channel=MongoDB)
* [GitHub Repo Mongo DB](https://github.com/mongodb-developer/nodejs-quickstart)

## What are clusters in MongoDB?

* [MongoDB Clusters](https://www.mongodb.com/basics/clusters)
Cluster is a set of nodes, where copies of your database will be stored.
a replica set or a sharded cluster
A replica set is the replication of a group of MongoDB servers that hold copies of the same data
A sharded cluster is also commonly known as horizontal scaling, where data is distributed across many servers.
A MongoDB replica set ensures replication is enforced by providing data redundancy and high availability over more than one MongoDB server.

If a MongoDB deployment lacked a replica set, that means all data would be present in exactly one server. In case that main server fails, then all data would be lost - but not when a replica set is enabled. Therefore, we can immediately see the importance of having a replica set for a MongoDB deployment.

In addition to fault tolerance, replica sets can also provide extra read operations capacity for the MongoDB cluster, directing clients to the additional servers, subsequently reducing the overall load of the cluster.

Replica sets can also be beneficial for distributed applications due to the data locality they offer, so that faster and parallel read operations happen to the replica sets instead of having to go through one main server.

What is a Sharded Cluster?
A sharded cluster in MongoDB is a collection of datasets distributed across many shards (servers) in order to achieve horizontal scalability and better performance in read and write operations.

bson: binary representation of JSON
JSON: Javascript Object Notation
Document: Row in a table
Collection: Table : Group of documents
Document: every document have _id : must be unique for each document in collection : create an index based on _id  

