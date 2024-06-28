const mongoose=require("mongoose");

// const productSchema=new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,//-->true means mandatory
//     },
//     price:{
//         type:Number,
//         required:true,
//     },
//     thumbnail:{
//         type:String,
//     },
//     images:[],
//     description:String,//-->it will be string

//     metaData:{},

//     createdAt:{
//         type:Date,
//         dafault:Date.now(),
//     },
//     updatedAt:{
//         type:Date,
//         dafault:Date.now(),
//     }
// });


const productSchema=new mongoose.Schema({
    pizza_name:String,
    pizza_category:String,
    pizza_size:String,
    total_price:Number
})

// const productModel=mongoose.model("product",productSchema);//-->productModel is instance of schema

const productModel=mongoose.model("pizzas",productSchema);

module.exports=productModel;