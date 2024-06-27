const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,//-->true means mandatory
    },
    price:{
        type:Number,
        required:true,
    },
    thumbnail:{
        type:String,
    },
    images:[],
    description:String,//-->it will be string

    metaData:{},

    createdAt:{
        type:Date,
        dafault:Date.now(),
    },
    updatedAt:{
        type:Date,
        dafault:Date.now(),
    }
});

const productModel=mongoose.model("product",productSchema);//-->productModel is instance of schema

module.exports=productModel;