/*
  The namespacing pattern allows us to wrap our code within a namespace in order to prevent naming collisions with other libraries
  
  We saw that an object literal pattern allows us to prevent naming collisions as well. But what if the object literal itself gets into
  a name collision with another library
  
  Keeping a longer namespace reduces the chances of naming collisions drastically
  
  The basic structure of the namespacing pattern uses the short-circuit assignment technique (using the OR operator):
        
        var patterns = patterns || {};
        patterns.namespacing = patterns.namespacing || {};
        patterns.namespacing.examples = patterns.namespacing.examples || {};
        
        patterns.namespacing.examples.logger = 
        {
              prefix  : "log-"
              echo    : function ( msg )  { return this.prefix + msg ; }
        };
    
  Usage: We can call the logger object's properties as show below
        
        console.log( patterns.namespacing.examples.logger.echo("This is a log") );
        
   The example below has two objects, each having a function called add. The add functions do not collide as they reside 
   safely inside their namespaces. 
   The common namespace used here is patterns.namespacing.examples
*/

var patterns = patterns || {};
patterns.namespacing = patterns.namespacing || {};
patterns.namespacing.examples = patterns.namespacing.examples || {};        

patterns.namespacing.examples.appender = 
{    
    add: function(line)
    {
        $('body').append(line);
    }
};

patterns.namespacing.examples.logger = 
{    
    add: function(line)
    {
        console.log(line);
    }
};


$(function(){
  patterns.namespacing.examples.appender.add("Hello World!");
  patterns.namespacing.examples.logger.add("This is a log");
});
