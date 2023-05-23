// const nums = 5;
// nums.push(6);   //since nums is not an array so we can't use push method and it's a type error


// let adress;
// console.log(adress.home)

let adress = {city:'kushtia', postCode:4570};
// console.log(adress.home.building);  //Cannot read properties of undefined (reading 'building') means: it can't read home befor building
console.log(adress?.home?.building); //type error handling of line 9.