const express = require('express');
const {getProducts, postProducts, putProducts, deleteProducts, patchProducts,vaidateForTitleAndPrice,getDataMiddleware,checkIdMiddleware}=require('../controllers/productController.js');

const productRouter=express.Router();

productRouter.use(getDataMiddleware);

productRouter.route("/").get(getProducts).post(vaidateForTitleAndPrice,postProducts);//-->validateForTitleAndProducts will validtae first and the send it to o=post products Example of middleware chaining
productRouter.route("/:id").put(checkIdMiddleware,vaidateForTitleAndPrice,putProducts).delete(checkIdMiddleware,checkIdMiddleware,deleteProducts).patch(checkIdMiddleware,patchProducts);

module.exports=productRouter;