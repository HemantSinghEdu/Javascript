/*
    The this keyword in javascript points to the current object in which our function is EXECUTED.
    This current object MAY OR MAY NOT be the object which actually DEFINED our function.
    
    - when an independent function is invoked normally, 'this' points to the global object i.e. window
    - when an independent function is invoked with the new keyword, 'this' points to the new object instance created
    - when a function invoked is part of an object, 'this' points to the object which currently contains the function
*/

function SimpleFun()
{
    var nameOfClass = this.constructor.name;                
    return nameOfClass;        
}

function ClassFun()
{
    this.getNameOfClass = function(){                       
        var nameOfClass = this.constructor.name;
    	return nameOfClass;
    }
}

function MixedFun()
{
    this.nameOfClass = this.constructor.name;
    this.getNameOfClass = function(){
    	return nameOfClass;
    }
    return this.nameOfClass;            //value will be returned only when called as a normal function
}

function EmptyFun()
{
}

function print(msg, value)
{
    var tabspace = "<br/> &emsp;&emsp;";
	$('body').append("<div>"+msg+tabspace+"this = "+value+"</div><br/>");
}




/* when an independent function is invoked normally, 'this' points to the global object i.e. window */
var this_value;
this_value = SimpleFun();		                    //this = window    
print("SimpleFun()", this_value);			 

/* when an independent function is invoked with the new keyword, 'this' points to the new object instance created */
var fun = new ClassFun();            	            
this_value = fun.getNameOfClass();                  //this = Fun object
print("new ClassFun()", this_value);

/* when a function is invoked an object, 'this' points to the object within which it is currently executing */
var emptyFun = new EmptyFun();  
emptyFun.getNameOfClass = fun.getNameOfClass;       
this_value = emptyFun.getNameOfClass();             //this = noFun object
print("emptyFun.getNameOfClass", this_value);

/* let's call a function normally, as well as create an object out of it */
this_value = MixedFun();                            //this = window
print("MixedFun()", this_value);
var mixedFun = new MixedFun();                      
this_value = mixedFun.getNameOfClass();             //this = MixedFun
print("emptyFun.getNameOfClass", this_value);
