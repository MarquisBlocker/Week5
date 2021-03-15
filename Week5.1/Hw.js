
setTimeout(myFunction, 2000);
//Function that is created to go inside the set timeout function.
function myFunction() {
  document.getElementById("hello").innerHTML = "Answer the Question Below..";
}

setTimeout(yourFunction, 7000);
//Nex function is created to go inside the set timeout function
function yourFunction(){
    document.getElementById("hello").innerHTML = "Times Up";
}

function myDisplayer(value) {
  document.getElementById("blah").innerHTML = value;
}

function myCalculator(num1, num2, myCallback) {
 setTimeout(() => {
  let sum = num1 + num2;
 myCallback(sum); 
 }, 7000);
  }
  
 myCalculator(5, 5, myDisplayer);



//Event listener for click here button
// document.queryselector("#callback-btn")
//     .addEventListener("click", function() {    
//       console.log("User has clicked on the button!");
// });

//math function
//     setTimeout(sum, 7000);
//    function myDisplayer(value) {
//     document.getElementById("blah").innerHTML = value;
//  }
//   setTimeout(myCalculator, 5000);
//   function myCalculator(num1, num2, myCallback) {
//    let sum = num1 + num2;
//    myCallback(sum);}
    
//    myCalculator(5, 5, myDisplayer);







