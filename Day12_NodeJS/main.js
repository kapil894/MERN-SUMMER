const express = require('express');
const app = express();
const fsPromises = require('fs/promises');


app.use(express.json());


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


app.get("/products", async (req, res) => {
    const products = await getData();
    res.json({
        status: "success",
        data: {
            products: products
        }
    });
});



app.post("/products", async (req, res) => {
    // console.log(typeof(req));
    // console.log(Object.keys(req));
    const body = req.body;
    // console.log(body);
    const products = await getData();
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
})

app.put('/products/:id',async (req,res)=>{
    const params=req.params;
    const body=req.body;
    const products=await getData();
    console.log(params.id);
    const prIdx=products.findIndex((ele)=>{
        if(ele.id==params.id) return true;
        else return false;
    });
    if(prIdx==-1){
        res.status(400);
      res.json({
        status:"fail",
        massage:"Invalid product id",
      });
      return;
    }
   
   body.id=products[prIdx].id;
   products[prIdx]=body;    
   await fsPromises.writeFile('./data.json', JSON.stringify(products));

    res.json({
        status:'in progress',
        data: {
            product:body,
        },
    })
})


app.delete('/products/:id',async (req,res)=>{
    const params=req.params;
    const products=await getData();
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
    
    products.splice(findIdx,1);
    console.log(products);
    await fsPromises.writeFile('./data.json',JSON.stringify(products));
    res.json({
    status:"204",
    data:{
        product:null
    }
   })
})




app.patch("/products/:id",async (req,res)=>{
    const products=await getData();
    const params=req.params;
    const body=req.body;
    const findIdx=products.findIndex((ele)=>{
        if(ele.id==params.id) return true;
        else return false;
    });
    if(findIdx===-1){
       res.status(400);
       res.json({
        status:"failed",
        data:{
            massage:"invalid id",
        }
       });
    }


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
})





app.listen(4000, () => {
    console.log("-----server started-----");
})