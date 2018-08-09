/*
  A module is a small unit of independent and reusable code. It is similar to a Class in Java and C# (but not exactly same)
  A module helps us remove our variables and functions from the global scope and keep them encapsulated as a reusable entity
  The basic structure of a module pattern is this:
        
        var module = (function()
        {
            return 
            {
              msg   : "Hello"
              echo  : function(){ return this.msg; }
            }
        })();
  
  Here, we have an anonymous function returning an object. The function is invoked immediately and the result allocated to module.
  
  Usage: We can call the module parameters as shown below
        console.log( module.echo() );
        
   Below is a basic Tile module that will append a tile to the html page along with some data. 
*/

var Tile = (function()
{
    return {
        width   : 100,
        height  : 100,

        add  : function(container, id)
        {
            $(container).append("<div id='"+ id +"' height='" + this.height + "' width='" + this.width + "'> </div>");
        },

        appendText: function(line, id)
        {
            var tile = $('#' + id);
            $(tile).append(line);
        }
    }
})();


$(function(){
  Tile.add("body", 1);                  //append a tile to the page
  Tile.appendText("Line 1", 1);
  Tile.appendText("Line 2", 1);
  
  Tile.add("body", 2);                  //append a second tile to the page
  Tile.appendText("Line A", 2);
  Tile.appendText("Line B", 2);
});
