/*
    In JavaScript, functions are objects, because they can have properties and methods just like any other object. 
    What distinguishes them from other objects is that functions can be called and they can return values. 
    In brief, they are Function objects.
    
    Following examples show the various ways in which we define and call functions
*/

//a function declaration
function print(msg){
	$('body').append("<div>"+msg+"</div>");
}

//function expression (anonymous function assigned to a variable)
var addNum = function(num1, num2){
	var sum = num1 + num2;
	return sum;
}

//function used as a class
function Calculator(n1, n2){
	this.num1 = n1;
	this.num2 = n2;
	this.add = function(){
	  return this.num1 + this.num2;
	}
}

$(function(){
    print("addNum : " + addNum(1,2));
    
    var calc = new Calculator(5,6);       //creating an object of our class
    print("calculator: " + calc.add());       
});
