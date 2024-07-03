// const {productsCollection}=require("../config/db.js");
const productModel = require("../models/productModel.js");

const validateId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const validate = await productModel.findById(id);
        if (!validate) {
            res.status(400);
            res.json({
                status: "fail",
                message: "product id not found",
            })
            return;
        }
        next();
    } catch (err) {
        console.log(err)
        if (err.name === 'CastError') {
            res.status(400);
            res.json({
                status: "fail",
                err: "Invalid Product Id"
            })
            return;
        }
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            err: "Internal server Error",
        })
    }
}

const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.send({
        status: "success",
        data: {
            products,
        }
    })
    // const products=await productsCollection.find().toArray()
    // res.send({
    //     status:"success",
    //     data:{
    //         products:products,
    //     }
    // });
};

const createProducts = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body);
        res.status(201);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        })
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "internal server error",
            info: err,
        })
    }
    //  const body=req.body;
    //  //validation

    //  const newProduct=await productsCollection.insertOne(body);
    //  res.json({
    //     product:newProduct,
    //  })
}


//put-->replace
const putProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newProduct = await productModel.findOneAndReplace({ _id: id }, body, { new: true });
        res.json({
            status: "success",
            data: {
                product: newProduct
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal error",
            info: err
        })
    }
}


const updateProducts = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        body.updatedAt = Date.now();
        const products = await productModel.findOneAndUpdate({ _id: id }, body, { new: true });
        res.status(200);
        res.json({
            status: "updated",
            data: {
                products,
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "failed",
            message: "Internal error",
            info: err,
        })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.deleteOne({ _id: id });
        res.status(200);
        res.json({
            status: "success",
            data: {
                product,
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "failed",
            message: "Internal error",
            info: err,
        })
    }
}

const listProducts = async (req, res) => {
    //     try{
    //     const productsList=await productModel.find().limit(10);
    //     res.status(200);
    //     res.json({
    //         status:"success",
    //         data:{
    //             productsList,
    //         }
    //     })
    //  } catch(err){
    //     console.log(err);
    //     res.status(500);
    //  }

    const { limit = 10, q = "",...filters } = req.query;//--> 
    // const pizzaQuery=productModel.find({
    //     title:{
    //         $regex:q,
    //     },
    // }) 
    //   productQuery=productModel.find({filters});

    let pizzaQuery = productModel.find(filters );
    pizzaQuery=pizzaQuery.where("title").regex(q);

    const limitedPizzas = await pizzaQuery.limit(limit);
    res.json({
        status: "success",
        results: limitedPizzas.length,
        data: {
            Pizzas: limitedPizzas,
        }
    })
}





module.exports = {
    getProducts, createProducts, putProducts, updateProducts, deleteProduct, validateId, listProducts
}