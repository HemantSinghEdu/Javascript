/*
  An object literal pattern allows us to wrap up our variables and functions inside a javascript object. 
  We use this pattern to avoid naming collisions. When we are using multiple javascript libraries, and if all of them declare
  variables and functions globally, there is a high chance that name collisions may happen.
  
  The object literal pattern avoids that situation by wrapping our variables and functions inside an object.
  
  The basic structure of the object literal pattern is this:
        
        var logger = 
        {
              prefix  : "log-"
              echo    : function ( msg )  { return this.prefix + msg ; }
        };
  
  Here, we have the logger object containing a property "prefix" and a method "echo"
  
  Usage: We can call the object's properties or methods as shown below
        
        console.log( logger.echo("This is a log") );
        
   The example below has two objects, each having a function called add. The add functions do not collide as they reside 
   safely inside their wrapper objects
*/

var appender = 
{    
    add: function(line)
    {
        $('body').append(line);
    }
};

var logger = 
{    
    add: function(line)
    {
        console.log(line);
    }
};


$(function(){
  appender.add("Hello World!");
  logger.add("This is a log");
});
