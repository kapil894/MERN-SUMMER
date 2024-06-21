//Custom Modules
//External Modules
//--> Internal Modules

// --->Synchronous Method for file system
// const fs=require("fs");
// console.log('start')
// const data=fs.readFileSync('./text.txt');
// const txt=data.toString();
// console.log(txt);
// console.log('mid')
// const data1=fs.readFileSync('./text.txt',{encoding:"utf-8"});
// console.log(data1);
// console.log('end');

//---> Callback method
// const fs=require("fs");
// console.log('start');
// fs.readFile("./text.txt",{encoding:"utf-8"},(err,data)=>{
//      if(err) console.log("error occured",err);
//      else console.log(data);
// });
// console.log("end");

//-->Writing file in Synchronous;
// const fs=require('fs');
// fs.writeFileSync("./text1.txt",'Hello');
// const data=fs.readFileSync('./text1.txt',{encoding:"utf-8"});
// console.log(data);

//-->writing File in Asynchronous
// const fs=require('fs');
// console.log('start');
// fs.writeFile('./text2.txt',"Hello text2",(err,data)=>{
//      console.log(err,data);
// })
// console.log('end');

//-->using Promises for Read and Write file

// const { readFile } = require('fs');
// const fsPromises=require('fs/promises');

// fsPromises.readFile('./text1.txt',{encoding:"utf8"})
// .then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//-->writing file using Promises;
// const fsPromises=require('fs/promises');

// fsPromises.writeFile('./text3.txt','Hello Text3')
// .then(()=>{
//     console.log('Write Done');
// }).catch((error)=>{
//     console.log(error);
// })

//->Append file
// const fsPromises=require('fs/promises');

// fsPromises.appendFile('./textFileAppend.txt','Dummy Text')
// .then(()=>{
//    console.log('Append Done');
// }).catch((err)=>{
//     console.log(err);
// })

// const fsPromises=require('fs/promises');

// fsPromises.readFile('./data.json',{encoding:"utf-8"})
// .then((data)=>{
//    const val=JSON.parse(data);
// //    val.reduce((acc,ele)=>{
// //         return acc.MathsScore+ele.MathsScore;
// //    })
// //    console.log(sum);
    
// });

// const fsPromises=require('fs/promises');



// fsPromises.readFile('./data.json',{encoding:"utf-8"})
// .then((data)=>{
//    const val=JSON.parse(data);
//    const res=val.find((elem)=>{
//     if(elem.id===3) return true;
//     else return false;
//    });
//    console.log(res) ;
// });

//--> Wroking wiht http module....

// const http=require('http');
// const app=http.createServer((req,res)=>{
//     //res.write('Hello');
//     // res.setHeader('content-Type','text/plain');

//     res.writeHead(200,{
//         'content-Type':'text/html'
//     });
//     res.end(`
//         <html lang="en">
//         <head>
//              <style>
//              body{
//              padding:24px;
//              background:orange;
//              }
//              </style>
//         </head>
//         <body>
//               <h1>Welcome To Server</h1>
//         </body>
//         </html>
//         `);//-->end will wrap it up if it ends than u can't write
// });

// app.listen(7777);





