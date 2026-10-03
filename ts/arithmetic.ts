
const num1:number = 100
const num2:number = 20;

function addition(num1:number , num2:number):number {
    return num1 + num2 ;
}
function substraction(num1:number , num2:number):number {
    return num1 - num2 ;
}
function multiplication(num1:number , num2:number):number {
    return num1 * num2 ;
}
function division(num1:number , num2:number):number {
    return num1 / num2 ;
}



console.log(addition(num1,num2));
console.log(substraction(num1,num2));
console.log(multiplication(num1,num2));
console.log(division(num1,num2));   
console.log("addition", num1 + num2);
console.log("substration", num1 - num2);
console.log("multiplication", num1 * num2);
console.log("division", num1 / num2);