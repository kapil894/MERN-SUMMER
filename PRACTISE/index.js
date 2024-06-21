const arr=['1','2','3','4'];
const brr=arr.toString();
console.log(brr);
console.log(arr);
console.log(arr.at(2));
console.log(arr.at(-4));

arr.push('3');
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift('3'));
console.log(arr);

// delete arr[0];
// console.log(arr);

// console.log(arr.concat(brr));

// const myArr=[[1,2],[3,4],[5,6]];
// console.log(myArr.flat());

// console.log(arr.splice(2,2,'9','8'));
// console.log(arr);

// console.log(arr.toSpliced(0,1));

console.log(arr.slice(1,3));
console.log(arr);

