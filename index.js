//Programming Quiz: Laugh it Off 1 (5-1)
//Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.


function laugh() {
  var words = "hahahahahahahahahaha!";
 return words; 
}

console.log(laugh());



// Write a function called laugh() that takes one parameter, 
//num that represents the number of "ha"s to return.
//Prints: "hahaha!" with console.log(laugh(3));

function laugh(num) {
    var words = "";
       for(i=0; i<num; i++){
        words += "ha";
       } 
      return words+"!"; 
 
 }
 
  console.log(laugh(3));
 
  //Return prime number to show as true, and if not, 
  //make a function to say which number it's divisible by

  function isPrime(integer) {
    for (var
                                                                                                                        x = 2; x <integer; x++) {
      if(integer % x === 0) {
        console.log(integer + " is divisible by" + x);
        return false;
      }
    }
    return true;
  }

  //What number will be "printed" (to the JavaScript console)?

  function square(x) {
    return x * x;
  }
  
  function subtractFour(x) {
    return square(x) - 4;
  }
  
  console.log(subtractFour(5)); //25
 
  //Without pasting into your console, what do you think this code will print out?

var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x); // 4 because fn addTwo()=3 THEN x=3 +1=4. 

//Create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";

}

function buildTriangle(num) {
  return makeLine(num++);
}

var line;
var makeLine; 
console.log(buildTriangle(10));
