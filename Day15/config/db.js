
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose=require("mongoose");

const uri = "mongodb+srv://<username>:<password>@cluster0.wsdjkv1.mongodb.net/<dbname>?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let dbURL=uri.replace("<username>",process.env.DB_USERNAME);
    dbURL=dbURL.replace("<password>",process.env.DB_PASSWORD);
    dbURL=dbURL.replace("<dbname>",process.env.DB_NAME);


    mongoose.connect(dbURL).then(()=>{
        console.log("------- DB Connected --------");
    }).catch((err)=>{
        console.log("DB Connect Failed");
        console.log(err);
    });


//     const client = new MongoClient(dbURL, {
//         serverApi: {
//           version: ServerApiVersion.v1,
//           strict: true,
//           deprecationErrors: true,
//         }
//       });

// const database=client.db("LPU-Day15");
// const productsCollection= database.collection("products");

// module.exports={
//     productsCollection
// };

