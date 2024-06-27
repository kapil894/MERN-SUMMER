require("dotenv").config();
require("./config/db.js");
const productRouter=require("./routes/productRoutes.js");
const express=require("express");
const app=express();
app.use(express.json());



app.use("/api/v1/products",productRouter);

app.listen(process.env.PORT,()=>{
    console.log(`-----server started :${process.env.PORT} -----`);
})