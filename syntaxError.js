function isBigger(num){
    if(num > 5){
        return true
    }
    else {
        return false
    };
// } //syntax error line(1)

}
const result = isBigger(11);
// console.log(result);
// const sum = a, b =>{syntax error line(2)
const sum = (a, b) =>{
    return a+b;
}
const result2 = sum(5,6);
// console.log(result2);


const student ={
    name:'Hasib',
    age:23,  //comma is the syntax error
    // age:23  //comma is the syntax error
    job:'Student'
}
console.log(student.name);
console.log(student.job);


// const numbers = [1,2,3,4,5,6,7 8] comma and gap is the syntax error
const numbers = [1, 2, 3, 4, 5, 6 , 7, 8]