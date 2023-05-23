const x = 'hasibul';
const y = 'hossain';
// console.log(z); //since z is not defined so it's a reference error.


// console.log(name);//ReferenceError: Cannot access 'name' before initialization
const name= 'hasib';


//regular function can be used before declaration
const sum = add(2, 3);
// console.log(sum);
function add(a, b){
    return a + b;
};

//arrow function can not be used before declaration


// console.log(add2(2, 3));

// const sum2 = add(2, 3);
// console.log('sum:', sum);
const add2 = (a, b) => a+b;

function doSomething(){
    const res = 55;
};
console.log(res);