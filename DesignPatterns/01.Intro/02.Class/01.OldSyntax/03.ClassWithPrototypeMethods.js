
/* Class with properties and methods added to the prototype
   - Properties and methods that are added to the prototype can be inherited
   - 
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
