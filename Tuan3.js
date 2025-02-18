let x = 1; 
let y = 2;
// console.log("BEFORE SWAP");
// console.log(`x : ${x}`);
// console.log(`x : ${y}`);
[x, y] = [y, x];
// console.log("BEFORE SWAP");
// console.log(`x : ${x}`);
// console.log(`x : ${y}`);


// let obj = {
//     fname: "Duc",
//     age: 25,
// }

// let {fname, age} = obj;
// console.log(fname);
// console.log(age);


// let obj = {
//     fname: "JavaScript",
//     age: 25,
// }

// let {fname: alpha, age: beta} = obj;
// console.log(alpha);
// console.log(beta);

// let obj = {
//     Jan: {
//         opening: 10,
//         closing: 7,
//     }
// }

// let {Jan: {opening, closing}} = obj;
// console.log(opening);
// console.log(closing);


//SPREAD OPERATOR
// let arr = [1,2,3,4,5];
// let arr2 = [...arr,6,7,8,9,10];
// let arr3 = [arr, 6, 7, 8, 9, 10];

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

//REST OPERATOR
// let arr = [1,2,3,4,5];
// let arr2 = [...arr,6,7,8,9,10];

// let [a, ...rest] = [1,2,3,4,5];
// let [c,...d] = [...arr,...arr2];

// let obj = {
//     fname: "JS",
//     year: 2004,
//     age: 21,
// }

// let {fname,...rest} = obj;
// console.log(fname);
// console.log(rest);

// let obj = {
//     fname: "JS",
//     age: 25,
// }
// let obj2 = {
//     year: 2004,
//     obj,
// }
// console.log(obj2);

// let obj = {
//     fname: "JavaScript",
//     age: 25,
//     details(){
//         console.log(`Age of ${this.fname} is ${this.age} years`)
//     },
// }
// obj.details();

// let arr = ["Mon", "Tue", "Wed"];
// let obj = {
//     [arr[0]]: "Monday",
//     [arr[1]]: "Tuesday",
//     [arr[2]]: "Wednesday",
// }
// console.log(obj);

// const obj = {
//     fri: {
//         open: 12,
//         close: 11,
//     },
//     sat:{
//         open: 1,
//         close: 9,
//     },
//     sun: {
//         open: 7,
//         close: 3,
//     },
// }

// for(const day of Object.keys(obj)){
//     console.log(day);
// }

// for(const day of Object.values(obj)){
//     console.log(day);
// }

// for(const [key, {open, close}] of Object.entries(obj)){
//     console.log(key + " " + open + " " + close)
// }

// let arr = [1,2,3,3,4,4,5,5];
// let set = new Set(arr);
// console.log(set);

// let arr = [1,2,3,3,4,4,5,5];
// let set = new Set(arr.size);
// console.log(set);


// let arr = [1,2,3,3,4,4,5,5];
// let set = new Set(arr);
// console.log(set);
// set.add(5);
// console.log(set);
// set.add(6);
// console.log(set);

// let arr = [1,2,3,3,4,4,5,5];
// let set = new Set(arr);
// for(let key of set){
//     console.log(key);
// }












