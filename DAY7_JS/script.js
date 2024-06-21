// console.log('start')
// function abc(x){
//     console.log(x*2)
//     temp(x/2);
// }
// abc(8);
// console.log('mid');
// function temp(x){
//     console.log(x/2);
// }
// console.log('end')

// const button=document.getElementsByTagName('button')[0];
// button.addEventListener('click',cb);

// function cb(){
//     console.log('Button Clicked');
// }

// const input=document.getElementsByTagName('input')[0];
// input.addEventListener('keyup',cb);
// function cb(ev){
//     console.log("Input is",ev.target.value);
// }

// Asynchronous 

// console.log("hello")
// setTimeout(()=>{
//     console.log('CB called');
//     setTimeout(()=>{
//         console.log('inner Time out')
//     },5000)
// },5000);
// console.log("after Timeout")

// console.log('start');

// setTimeout(()=>{
//     console.log('called callback');
// },1000)

//promise
// const pr=fetch("https://api.github.com/users/likbalpande");


// pr.then((res)=>{
//     const pr2=res.json();
//     pr2.then((data)=>{
//         console.log(data);
//     });
//     // console.log('fetch',res);
// }).catch((e)=>{
//     console.log('fecth -',e)
// })

// const request=fetch('https://dummyjson.com/products')

// request.then((res)=>{
//      const show=res.json();
//      show.then((data)=>{
//         console.log(data);
//      });
// }).catch((e)=>{
//      alert(e);
// })

const root=document.getElementById('root')
const request=fetch('https://dummyjson.com/products')

request.then((res)=>{
     const show=res.json();
     show.then(renderUI)
}).catch((e)=>{
     alert(e);
})

const renderUI=(data)=>{
    const products=data.products;
    for(let i=0;i<products.length;i++){
       const card=document.createElement('div');
       card.className='product-class';
       card.innerHTML=`
       <h3>${products[i].id  }</h3>
       <p>${products[i].title}<p>
       <img src="${products[i].images}">
       `;
       root.appendChild(card);
    }
}
