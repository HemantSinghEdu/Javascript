
/* Class with methods added to the prototype
   Methods that are defined inside a class are recreated every time a new object is created. 
   On the other hand, methods defined on the prototype are only created once.
*/

function Employee(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
}

Employee.prototype.getName = function(){
  	return this.fname+' ' +this.lname;
}

//Usage
emp = new Employee("Ron","Weasley");
var fullName = emp.getName();
$("body").append("<div>With prototype method: "+fullName+"</div>");
