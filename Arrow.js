/*Arrow functions are a different way of creating functions in 
JavaScript. Besides a shorter syntax, they offer advantages 
when it comes to keeping the scope of the this keyword 
(see here).*/

/*function printMyName(name){
    console.log(name);
}
*/



const printMyName = (name) => {
    console.log(name);
}
const printMyName2 = () => {
    console.log("Hello!");
}

const multiply = (number) => {
    return number * 2;
}
const multiply2 = (number) =>  number * 2;
   

console.log(multiply(2));

printMyName("Srajal");