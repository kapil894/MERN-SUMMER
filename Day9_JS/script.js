//destructuring

// const student={
//     userName:'Aman',
//     rollNo:'24002',
//     city:'Delhi',
// }
// // console.log(student.userName);

// const {userName, city}=student;//--> here sequence doesn't matter only correct name
// console.log(userName, city);


//--> in array what matter is the order in which we are printing
// const fruits=['apple','banana','orange'];

// const [,i2,i3]=fruits;//--> we left first one empty
// console.log(i2,i3)

// const student={
//         userName:'Aman',
//         rollNo:'24002',
//         city:'Delhi',
//         hobbies:['Painting','Styling','Drawing']
// }
// const {hobbies}=student;
// hobbies[0]='Studying';//--> if we will change the value of array(inside the object) than array will change 
// console.log(hobbies);

// const s1 ={
//     userName:'Aman',
//     rollNo:'24002',
//     city:'Delhi',
//     hobbies:['Painting','Styling','Drawing']
// }
// //const s2=s1;//-->same reference of both

// const s2={...s1};//-->here we have created a new object s2 and provide the values of s1 to s2 using spread operator
// s2.userName='Ajay';
// s2.hobbies[0]='Studying'
// console.log(s2)
// console.log(s1)

//-->using bind and spread operator(...)
// function sum(...arr){
//    const res= arr.reduce((acc,ele)=>{
//           console.log(acc,ele)
//           return acc*ele;
//     });
//     console.log(res)
// }
// sum(0);
// sum(10);
// sum(10,20);
// sum(11,2,3,4);
// sum(2,4,5,10,2);

// function getData(){
//     fetch('https://dummyjson.com/products').then((res)=>{
//            const data=res.json();
//            data.then((re)=>{
//                 console.log(re);
//            });
//     }).catch((err)=>{
//         console.log
//     });
// }
// getData();

// console.log('start');
// async function getData(){
//     console.log('mid');
//     const pr=await fetch('https://dummyjson.com/products');
//     console.log(pr); 
//     console.log('step1');
//     const data=await pr.json();
//     console.log(data);
//     console.log('step2');
// }
// getData();
// console.log('end')

// const calc=(s,...arr)=>{
//       console.log(arr);
// }
// calc('sum',1,3,4,)