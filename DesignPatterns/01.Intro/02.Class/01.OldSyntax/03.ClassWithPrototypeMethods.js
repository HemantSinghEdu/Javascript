
/* Class with properties and methods added to the prototype
   - All objects in javascript have a prototype property 
   - Defining your function on 'this' leads to each instance of the class having its own copy of the function
   - Whereas, defining your function on 'prototype' leads to all instances of the class sharing a single copy of the function
*/

function Employee(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
}

//defining a class function on the prototype
Employee.prototype.getName = function(){
  	return this.fname+' ' +this.lname;
}

//Usage
emp = new Employee("Ron","Weasley");
var fullName = emp.getName();
$("body").append("<div>With prototype method: "+fullName+"</div>");
