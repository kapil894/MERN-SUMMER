// const {productsCollection}=require("../config/db.js");
const productModel=require("../models/productModel.js");

const getProducts=async (req,res)=>{
    const products=await productModel.find();
    res.send({
        status:"success",
        data:{
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

const createProducts=async (req,res)=>{
    try{
     const body=req.body;
     const newProduct=await productModel.create(body);
     res.status(201);
     res.json({
        status:"success",
        data:{
        product:newProduct,
        },
     })
    } catch(err){
        console.log(err);
        res.status(500);
        res.json({
            status:"fail",
            message:"internal server error",
            info:err,
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
const putProducts=async (req,res)=>{
    try{
    const {id}=req.params;
    const body=req.body;
    const newProduct=await productModel.findOneAndReplace({_id:id},body,{new:true});
    res.json({
        status:"success",
        data:{
            product:newProduct
        }
    });  
  } catch(err){
      console.log(err);
      res.status(500);
      res.json({
        status:"fail",
        message:"Internal error",
        info:err
      })
  }
}




module.exports={
    getProducts,createProducts,putProducts
}