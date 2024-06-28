const productModel=require('../models/productModel.js');

const getProducts=async (req,res)=>{
    try{
    const products=await productModel.find();
    res.status(200);
    res.json({
        status:"suceess",
        data:{
            products,
        }
    }); 
   }catch(err){
      console.log(err);
      res,json({
        status:"failed",
        message:"internal error"
      })
   }
}


const createProducts= async (req,res)=>{
     try{
    const body=req.body;
    const newProducts=await productModel.create(body);
    res.status(200);
    res.json({
        status:"success",
        data:{
            products:newProducts
        }
    })
   } catch(err){
    console.log(err)
    res.status(500);
    res.json({
        status:"failed",
        message:"internal error",
        info:err,
    })
   }
}

const replaceProducts=async (req,res)=>{
    try{
    const {id}=req.params;
    const body=req.body;
    const newProduct= await productModel.findOneAndReplace({_id:id},body);
    res.status(200);
    res.json({
        status:"success",
        data:{
            newProduct,
        }
    })
   }catch(err){
     console.log(err);
     res.status(500);
     res.json({
        status:"failed",
        message:"internal error",
        info:err,
     })
   }
}

const updateProducts=async (req,res)=>{
    try{
    const body=req.body;
    const {id}=req.params;
    const products=await productModel.findOneAndUpdate({_id:id},body);
    res.status(200);
    res.json({
        status:"updated",
        data:{
            products,
        }
    });
   } catch(err){
     console.log(err);
     res.status(500);
     res.json({
        status:"failed",
        message:"Internal error",
        info:err,
     })
   }
}


const deleteProduct= async (req,res)=>{
    try{
    const {id}=req.params;
    const product=await productModel.deleteOne({_id:id});
    res.status(200);
    res.json({
        status:"success",
        data:{
            product,
        }
    })
  } catch(err){
      console.log(err);
      res.status(500);
      res.json({
        status:"failed",
        message:"Internal error",
        info:err,
      })
  }
}


module.exports={getProducts,createProducts,replaceProducts,updateProducts,deleteProduct};