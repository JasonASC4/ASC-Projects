//Defining the function
/*function hello(){
    console.log("Hello World!");
}

hello(); //calling the function


function add(num1, num2){
    return (num1 + num2);
}

console.log(add(5,7));
*/

function rand(number){
    wholeNumber = Math.floor(Math.random() * number);
   return wholeNumber;
}

console.log(rand(100));