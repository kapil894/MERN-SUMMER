
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.wsdjkv1.mongodb.net/<dbName>?appName=Cluster0";

let dbURL=uri;
dbURL=dbURL.replace("<username>",process.env.DB_USERNAME);
dbURL=dbURL.replace("<password>",process.env.DB_PASSWORD);
dbURL=dbURL.replace("<dbName>",process.env.DB_NAME);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("------DB Connected------");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);