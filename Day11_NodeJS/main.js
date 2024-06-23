
const http=require('http');
const fsPromises=require("fs/promises")
const fs=require('fs');
const url=require('url');

const dataText=fs.readFileSync(`${__dirname}/data.json`);
const data=JSON.parse(dataText);

//-->below is the callback function IT will be called again when a req is made
const app=http.createServer(async (req,res)=>{
    res.writeHead(200,{
        "content-Type":"text/html",
    });
    const {query,pathname}=url.parse(req.url,true);
    switch(pathname){
        case "/":{
            const bf=await fsPromises.readFile(`${__dirname}/pages/index.html`);
            res.end(bf);
            break;
        }
        case "/products":{  
            const bf=await fsPromises.readFile(`${__dirname}/pages/products.html`);
            let text=bf.toString();
            let productsText="";
            for(let i=0;i<data.length;i++){
             productsText+= `
                <div class="product-card">
                   <h3>${data[i].title}</h3>
                   <img src="${data[i].thumbnail}" alt="image" height='200'>
                   <p> ${data[i].description}</p>
                   <a href="/view?id=${data[i].id}" target="_blank">More</a>
                </div>   
                `;
            }
            text=  text.replace('$PRODUCTS$',productsText)
            res.end(text);
            break;
        }
        case "/view":{
            const bf=await fsPromises.readFile(`${__dirname}/pages/view.html`);
            let text=bf.toString();
           const product=data.find((elem)=>{
               if(elem.id==query.id) return true;
               else return false;
           });
           text=text.replace("$Product$",`
            <div class="root">
                   <h4>Category: ${product.category}</h4>
                   <h3 >${product.title}</h3>
                   <img src="${product.thumbnail}" alt="image" height='200'>
                   <h4>Price: $${product.price}</h4>
                   <p> ${product.description}</p>
                </div>
            `)
            res.end(text);
            break;
        }
        default:{
            res.end("<h2>Oops! Page not Found</h2>")
        }
    }
});
app.listen(4000,()=>{
    console.log("------Server Started------");
});
