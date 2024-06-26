const express = require('express');
const productRouter = require('./routes/productRoutes');
const morgan=require("morgan");
const app = express();  

//inner middleware
app.use(express.json());

//custom middleware
app.use((req,res,next)=>{
    res.set({"server-time":Date.now()});
   console.log("",req.url,req.method)
   next();
})

//external middleware
app.use(morgan("dev"));

// app.get("/products",getProducts );
// app.post("/products", postController)
// app.route("/products").get(getProducts).post(postProducts)
app.use('/products',productRouter);
// app.put('/products/:id',putController)
// app.delete('/products/:id',deleteController)
// app.patch("/products/:id",patchController)

// app.route("/products/:id").put(putProducts).patch(patchProducts).delete(deleteProducts); 


app.listen(4000, () => {
    console.log("-----server started-----");
})