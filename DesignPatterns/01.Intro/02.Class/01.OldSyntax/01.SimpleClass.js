/*
    There are no classes in the old javascript syntax.
    We use functions to simulate class-like behavior
*/

//simple class - the "Employee" function used here to define the class is called the constructor function
function Employee() {
  this.fname = "";
  this.lname = "";
  this.getName = function(){
  	return this.fname+' ' +this.lname;
  }
}

//Usage
emp = new Employee();
emp.fname = "John";
emp.lname = "Doe";
var fullName = emp.getName();
$("body").append("<div>Simple class: "+fullName+"</div>");
