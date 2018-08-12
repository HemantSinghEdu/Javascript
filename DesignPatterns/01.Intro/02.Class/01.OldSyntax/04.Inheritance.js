/*
  Inheritance in Javascript (Prototypical Inheritance)
  Every object in JavaScript has an internal property called Prototype. 
  
  When you attempt to access an object's property, JavaScript will first search on the object itself, 
  and if it is not found, it will search the object's Prototype. If still no match is found, JavaScript 
  will check the prototype of the linked object, and continue searching until the end of the prototype 
  chain is reached. At the end of the prototype chain is Object.prototype. All objects inherit the 
  properties and methods of Object. Any attempt to search beyond the end of the chain results in null.
  
  If Parent is a class and Child is derived from it, following is the inheritance syntax:

  function Parent()
  {
  }
  
  function Child()
  {
    Parent.call(this);        //this establishes the inheritance
  }
  
*/
  function Vehicle(name)
  {
      this.name = name;
  }
  Vehicle.prototype.accelerate = function(){
      print('accelerating');
  }

  function Car(name,steeringWheel)
  {
    Vehicle.call(this,name);              //this establishes the inheritance of Car from Vehicle
    this.steeringWheel = steeringWheel;
  }

  function Bike(name,handlebar)
  {
      Vehicle.call(this,name);
      this.handlebar = handlebar;
  }
  
  function print(msg){
    $('body').append('<div>'+msg+'</div>');
  }
