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
 
  

 