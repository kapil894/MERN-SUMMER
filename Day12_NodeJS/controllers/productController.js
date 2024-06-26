const fsPromises=require('fs/promises')

const getDataMiddleware =async (req,res,next) => { 
    const text =await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let products;
    try {
        products = JSON.parse(text);
    }
    catch {
        products = [];
    }
    req.products=products;
    // console.log(products);
    // console.log(Object.keys(req));
    next();
}

const checkIdMiddleware=(req,res,next)=>{
    const params=req.params;
    const {products}=req;
    // console.log(products);
    const findIdx=products.findIndex((ele)=>{
        if(ele.id==params.id)return true;
        else return false;
    })
    if(findIdx===-1){
        res.status(400);
        res.json({
            status:"fail",
            data:{
               status:"fail",
               message:"invalid code",
            }
        })
        return;
    }
   req.productsId=findIdx;
    next(); 
}

const getData = async () => { 
    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let products;
    try {
        products = JSON.parse(text);
    }
    catch {
        products = [];
    }
    return products;
}

const vaidateForTitleAndPrice=(req,res,next)=>{
     const body=req.body;
     if(!body.title||!body.price){
        res.json({
            status:"fail",
            message:"!!Price and Title are required",
        })
        return;
    }
    next();
}

const getProducts=async (req, res) => {
    const products = req.products;
    res.json({
        status: "success",
        data: {
            products: products
        }
    });
}

const postProducts=async (req, res) => {
    // console.log(typeof(req));
    // console.log(Object.keys(req));
   
    const products = req.products;
    let lastId=0;
    if(products.length !=0){
    lastId=products[products.length-1].id;
    }
    body.id=lastId+1;
    products.push(body);
    
    await fsPromises.writeFile('./data.json', JSON.stringify(products));
    res.sendStatus(201);
    res.json({
        status: "success",
        data: {
            product: body,
        },
    })
}

const putProducts=async (req,res)=>{
    // const params=req.params;
    const body=req.body;
    const products=req.products;
    // console.log(params.id);
    const prIdx=req.productsId;
   body.id=products[prIdx].id;
   products[prIdx]=body;    
   await fsPromises.writeFile('./data.json', JSON.stringify(products));

    res.json({
        status:'in progress',
        data: {
            product:body,
        },
    })
}

const deleteProducts=async (req,res)=>{
    // const params=req.params;
    // const products=req.products;
    // const findIdx=products.findIndex((ele)=>{
    //     if(ele.id==params.id)return true;
    //     else return false;
    // })
    // if(findIdx===-1){
    //     res.status(400);
    //     res.json({
    //         status:"fail",
    //         data:{
    //            status:"fail",
    //            message:"invalid code",
    //         }
    //     })
    //     return;
    // }
    const findIdx=req.productsId;
    products.splice(findIdx,1);
    console.log(products);
    await fsPromises.writeFile('./data.json',JSON.stringify(products));
    res.json({
    status:"204",
    data:{
        product:null
    }
   })
}

const patchProducts=async (req,res)=>{
    // const products=req.products;
    // const params=req.params;
    const body=req.body;
    const findIdx=req.productsId
    // body.id=products[findIdx].id;
    // products[findIdx]=body;
    const newObj={
        ...products[findIdx],...body,
    }
    products[findIdx]=newObj;

    await fsPromises.writeFile('./data.json',JSON.stringify(products));
    res.status(200);
    res.json({
        status:"success",
        data:{
            products:products
        }
    })
}

module.exports = {
   getProducts,postProducts,putProducts,deleteProducts,patchProducts,vaidateForTitleAndPrice,getDataMiddleware,checkIdMiddleware
};