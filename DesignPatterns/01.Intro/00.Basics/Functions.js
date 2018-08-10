/*
    In JavaScript, functions are objects, because they can have properties and methods just like any other object. 
    What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.
*/

//a function declaration
function print(msg)
{
		$('body').append("<div>"+msg+"</div>");
}

//function expression (anonymous function assigned to a variable)
var addNum = function(num1, num2){
  var sum = num1 + num2;
  return sum;
}

//function used as a class
function Calculator(n1, n2)
{
  var num1 = n1;
  var num2 = n2;
  
  var add = function(){
    return num1 + num2;
  }
}

$(function(){
    print("addNum : " + addNum(1,2));
    
    var calc = new Calculator(5,6);       //creating an object
    print("calculator: " + calc.add());       
});
