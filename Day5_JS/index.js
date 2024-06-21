// let age=18;

// let username="Ajay";
// let username2="Dev";

// let b=10;

// console.log(b+username);
// console.log(username2+b);

// console.log(10 + 10 + username)

// console.log(username+' '+username2);

// let n='1';
// let a=1;

// console.log(a===n);
// console.log(a==n)

// let user1='Ajay';
// let user2='Dev';

// console.log(user1 + user2)

// //template literals
// console.log(`Concatenation = ${user1+user2}`)

//function defition
// function function1(x){
//      console.log('hello '+x);
// }
//function invocation
// function1("Ajay")

// //named function assignment
// const ph=function printHi(x){
//     console.log('Hi',x);
// }
// ph("Function");

// //anonymous function assignment
// const pHi=function (x){
//     console.log('hello ' + x);
// }
// pHi('Anonymous Function');

// //Arrow function
// const pHii=(x)=>{
//     console.log('Hello '+ x);
// }
// pHii("Arrow Function")

// const fun=(a,b)=>{
//     if(a===undefined && b===undefined){
//         console.log(0)
//     }
//     else if(b===undefined){
//         console.log(a);
//     }
//     else{
//         console.log(a+b);
//     }   
// }
// fun();
// fun(10);
// fun(10,20)

// //parameter 
// const func=(a=0,b=0)=>{
//      console.log(a+b)
// }
// func();
// func(10);
// func(10,20)

//objects

// const obj=new Object();
// const obj1={};
// console.log(typeof(obj1))

// obj.name="kapil";
// obj.city="Meerut";
// obj1.name="Ajay";

// console.log(obj.city);
// console.log(obj1);

// const obj2={
//     name:"kapil",
//     "city":"Meerut",
//     11:"ten",
//     10:200,
//     'val':0,
// }
// console.log(obj2)

// const input=prompt();
// console.log(obj2[input]);

//Arrays


// const arr=new Array();
// const arr1=["one","two",3];
// console.log(arr1)
// console.log(typeof(arr1))
// console.log(arr1[2])  

// const obj={
//     name:"kapil",
// }
// // console.log(obj);
// const obj2=obj;
// const obj3=obj2;
// obj2.name="gahlot";

// obj3.age=18;
// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// let u1="Akash";
// let u2=u1;

// console.log(u2);
// u2="Aman"
// console.log(u2)

// const arr=['Mango','Banana','Apple']

// const obj={
//     name:'Mango',
//     num:3,
//     3:'101',
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let i=0;i<4;i++){
//     console.log(obj[i]);
// }

// for(let i in arr){
//     console.log(i);
// }
// for(let i in obj){
//     console.log(obj[i]);
// }
// for(let i of obj){
//     console.log(i);
// }

// for(let i of arr){
//     console.log(i);
// }

// console.log(window);
// console.dir(document);
// const body=document.getElementsByTagName('body')
// console.log(body)

// const div=document.getElementsByTagName('div');
// console.dir(div[0]);
// div[0].innerText="DOM"

const d1=document.getElementById('class');
d1.style.color='red';

const d2=document.getElementsByClassName('container');
d2[0].style.backgroundColor='blue';