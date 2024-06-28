const express=require("express");
const {getProducts, createProducts, putProducts, updateProducts, deleteProduct, validateId, listProducts}=require("../controllers/productController.js")

const productRouter=express.Router();

productRouter.route("/").get(getProducts).post(createProducts);

productRouter.route("/lists").get(listProducts )

productRouter.route("/:id").put(validateId,putProducts).patch(validateId,updateProducts).delete(validateId,deleteProduct);


module.exports=productRouter;