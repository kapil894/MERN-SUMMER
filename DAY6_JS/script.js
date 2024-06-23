// const s2=document.getElementsByTagName('section')
// const secondSection=s2[1];
// const title=secondSection.getElementsByTagName('h4')
// title[0].innerText="JS Callback"

// const title=document.getElementsByTagName('section')[1].getElementsByTagName('h4');
// title[0].innerText="Javascript "

// const title=document.querySelector("section:last-of-type>h4")
// title.style.color='red'
// title.className='cs1'

//setattribute contains key and value pair
// title.setAttribute('class','cs2');
// title.setAttribute('name','Prajwal')

//-> to add a new Element to a existing DOM tree

// const p=document.createElement('p');//->creaating new tag
// p.innerText='New Line from DOM';//->Adding text to the new tag
// const sec=document.getElementsByTagName('section')[0];//-> this will return an array of tag
// //sec.appendChild(p);//->adding tag to the Document

// sec.prepend(p)

//Node vs Element  (HTML collection vs Array) (append, prepend, remove)

// function printHello(){
//   console.log('HEllo...');
// }
// //Events
// function inputClicked(e){
//     console.log('inputClicked',e);
//     console.log(e.target.value);
//   }
//   function inputChanged(e){
//     console.log('inputChanged',e);
//     console.log(e.target.value)
// }
// //e.target.value->used to get the value that is typed or used during the event occcured
 
// function inputKeyDown(e){//->here's a defect that when we sue it than it fires the event before even knowing which key is pressed that's why it always print one char less than the word you typed 
//     console.log('inputKeyDown',e);
//     console.log(e.target.value)
// }

// //This will resolve the issue with inputKeyDown
// function inputKeyUp(e){
//     console.log('inputKeyUp',e)
//     console.log(e.target.value)
// }

// function handleUserName(e){
//    console.log("Name",e.target.value);
// }

// function handleUserAge(e){
//     if(e.target.value<18){
//         console.log('please enter valid age')
//     }
//     else{
//         console.log('Age',e.target.value);
//     }
// }

// function handleUserSubmit(e){
//     e.preventDefault();
//     console.dir(e.target);

//     const userName=e.target[0].value;
//     const userAge=e.target[1].value;

//     if(userAge<18){
//         console.log('enter valid age');
//     }

// }

// const handleSubmit=(e)=>{
//     e.preventDefault();
//     const arr=e.target;
//     const name=arr[0].value;
//     const email=arr[1].value;

//     const form=document.getElementsByTagName('form')[0];
//     form.style.display="none";

//     renderCard(name,email);
// }

// const renderCard=(n,e)=>{
//     const root=document.getElementById('root');
//     root.setAttribute('class','card');


//     root.innerHTML=`
//     <h3 class="name"> Name is: ${n}</h3>
//     <h3 class="email"> Email is: ${e}</h4>`
// }



// const printResult=(n){
//     const ne=document.getElementById('root');
// }
// const sum=(a,b)=>{
//     const res= a + b;
//     // console.log(res);
//     return res;
// }

// const mul=(a,b)=>{
//     const res=a*b;
//     // console.log(res);
//     return res;
// }
// const rr=sum(10,20)



// const showResult=(res)=>{
//     console.log(res);
// }

// const printPretty=(res)=>{
//     console.log(res);
// }

// const sum=(a,b,fn)=>{
//     const res=a+b;
//     // console.log(res);
//      fn(res);  
// }
// sum(10,20,showResult);

//Array methods Study

// const arr=['Mango','Apple','grape'];

// const printValue=(a,b,c)=>{
//     console.log('value is:',a);
//     console.log('index is:',b)
//     console.log('array is:',c)
//     console.log('--------------');
// }
// for(let i=0;i<arr.length;i++){
//     printValue(arr[i],i,arr);
// }

// arr.forEach((element,index,arr)=>{
//     console.log(element,index,arr);
// })

// arr.forEach((a,b,c)=>{
//     printValue(a,b,c);
// })

// arr.forEach(element => {
//     console.log(element)
// });
//  const arr=[10,21,30,33];
// let sum=0;
// arr.forEach(a=>{
//     sum+=a;
// })
// console.log(sum);

// const isEven=(x)=>{
//    if(x%2==0) return true;
//    else return false;
// }
// const arr1=['happy','square','condidence']
// const res=arr.filter(x=>{
//     if(x%2==0) return true; 
//     else return false;
// })
// console.log("res:",res)

