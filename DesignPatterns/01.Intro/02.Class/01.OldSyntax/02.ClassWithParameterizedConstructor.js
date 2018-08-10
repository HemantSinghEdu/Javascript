
//class with parameterized constructor
function Employee(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
  this.getName = function(){
  	return this.fname+' ' +this.lname;
  }
}

//Usage
emp = new Employee("Rita","Skeeter");
var fullName = emp.getName();
$("body").append("<div>With parameterized constructor: "+fullName+"</div>");
