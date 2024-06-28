const mongoose=require('mongoose')
// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.wsdjkv1.mongodb.net/<dbname>?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let dbURL=uri.replace('<username>',process.env.DB_USERNAME);
    dbURL=dbURL.replace('<password>',process.env.DB_PASSWORD);
    dbURL=dbURL.replace('<dbname>',process.env.DB_NAME);

  mongoose.connect(dbURL).then(()=>{
     console.log("---DBConnected---");
  }).catch((err)=>{
      console.log(err);
  })
