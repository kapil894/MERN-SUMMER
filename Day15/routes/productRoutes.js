const express=require("express");
const {getProducts, createProducts, putProducts}=require("../controllers/productController.js")

const productRouter=express.Router();

productRouter.route("/").get(getProducts).post(createProducts);

productRouter.route("/:id").put(putProducts);

module.exports=productRouter;