const addTwo = (number) => number + 2;

console.log("Excercise 1: "+addTwo(3));

const addS = (string) =>{
    return string + 's';
}

console.log("Excercise 2: "+addS("pizza"));

const map = (arrays, callback) => arrays.map(array=>callback(array))


console.log("Excercise 3: "+ map([1,2,3],addTwo));

let alphabet = "";

const letters = ["a", "b", "c", "d"];
letters.forEach((char) =>{
  alphabet += char;
});

console.log("Excercise 4: "+alphabet);

const mapWith = (arrays, callback) => {
    const result = [];
    arrays.forEach((array) =>{
        result.push(callback(array));
    })
    return result;
}

console.log("Excercise 5: "+ mapWith([1,2,3],addTwo));

const reduce = (array, callback, init) => {
    let accumulator = init;
    array.forEach((element) => {
        accumulator = callback(accumulator, element);
    });
    return accumulator;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;

console.log("Excercise 6: "+reduce(nums, add, 0)); 

const intersection = (...arrays) => {
    return arrays.reduce((accumulator, currentArray) => {
        return accumulator.filter(element => currentArray.includes(element));
    });
};

console.log("Excercise 7: "+
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);