// const parent =document.getElementById("root"); 
// const s1=document.createElement('ul');
// s1.setAttribute("style","width:400px;backgroundColor:yellow;display:block;padding:24px;margin:48px auto;")

// const listItem1=document.createElement('li');
// listItem1.style={
//     margin:"12px",
//     color:"brown",
// }
// listItem1.innerText="item1"
// s1.appendChild(listItem1);
// parent.appendChild(s1)

// const parent=document.getElementById('root');

// const listItem1=React.createElement('li',{},"Item 1");
// const listItem2=React.createElement('li',{},"Item 2");
// const list=React.createElement('ul',{},[listItem1,listItem2]);
// const root=ReactDOM.createRoot(parent);
// root.render(list)
// const d1=document.createElement('div');
// console.log(typeof(d1));
// console.dir(d1);
// const d2=React.createElement('div',{},"");
// console.log(typeof(d2));
// console.dir(d2);

// //react babel CDN
// const parent=document.getElementById('root');
// const list=<li>Item 1</li>
// const list1=<ul>{list}</ul>

// const root=ReactDOM.createRoot(parent);
// root.render(list1);

const parent=document.getElementById('root');
const root=ReactDOM.createRoot(parent);

const DivHello=()=><div>Hello</div>
const divReact=<div>React</div>
const Divfrom=()=>{
return <div>From</div>
}
const container=(
    <div>
        {DivHello()}
        {divReact}
        <DivHello/>
    </div>
);
root.render(container);
