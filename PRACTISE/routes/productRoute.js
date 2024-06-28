const express=require('express');
const { getProducts, createProducts, replaceProducts, updateProducts, deleteProduct } = require('../controllers/productsController');


const productRouter=express.Router();

productRouter.route('/').get(getProducts).post(createProducts)
productRouter.route('/:id').put(replaceProducts).patch(updateProducts).delete(deleteProduct)

module.exports=productRouter;