

//--> Wroking wiht http module....

const http=require('http');
const fsPromises=require('fs/promises');
const app=http.createServer(async (req,res)=>{
    //res.write('Hello');
    // res.setHeader('content-Type','text/plain');

     //console.log(req.url);
     const route=req.url;
     switch(route){
        case "/":{
            const stream=await fsPromises.readFile("./pages/index.html");
            res.end(stream);
            break;
        };
        case "/products":{
            const stream=await fsPromises.readFile("./pages/products.html");
            res.end(stream);
            break;
        }
        default:{
            res.end("Not Found");
            break;
        }

     }
    
//     if(req.url==='/'){
//     res.writeHead(200,{
//         'content-Type':'text/html'
//     });

//     const stream=await fsPromises.readFile('./pages/index.html');
//     res.end(stream);//-->end will wrap it up if it ends than u can't write
//    }
//    else{
//     res.writeHead(404,{
//         'content-Type':'text/plain'
//     });
//     res.end("Not Vaid")
//    }
});

app.listen(4000,()=>{
    console.log("Server started")
});