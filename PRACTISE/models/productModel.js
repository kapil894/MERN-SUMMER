
const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number
    },
    descripion:{
        type:String
    },
    thumbnail:{
       type:String
    }
})

const productModel= new mongoose.model('products',productSchema);

module.exports=productModel;