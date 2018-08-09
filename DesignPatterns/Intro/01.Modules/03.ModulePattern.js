/*
  A module is a small unit of independent and reusable code. A module removes our variables and functions from the global scope 
  and keeps them encapsulated as a reusable entity

  The basic structure of a module pattern is this:
        
        var module = (function()
        {
            return 
            {
              msg   : "Hello"
              echo  : function(){ return this.msg; }
            }
        })();
  
  Here, we have an IIFE (immediately invoked function expression) returning an object. The anonymous function is invoked 
  immediately and the result allocated to module.
  
  Usage: We can call the module parameters as shown below
        console.log( module.echo() );
 
  Module pattern behaves similar to Object Literal pattern. There is really no advantage of using one over the other. However,
  that changes once we move on to the Module Reveal pattern, which gives the added benefit of introducing privacy.
  
  Below is a basic Tile module that will append a tile to the html page along with some data. 
*/

var Tile = (function()
{
    return {
        width   : 100,
        height  : 100,
              
        addTile : function(container, tileId)
        {
            var tileHTML = "<div id='"+ tileId +"' style='border:1px solid gray;padding:5px;margin:2px;float:left; width:"+this.width+"px;height:"+this.height+"px;'> </div>";
            this.append(container, tileHTML);
        },

        appendText: function(line, tileId)
        {
            tileId = '#' + tileId;
            line = '<div>'+line+'</div>';
            this.append(tileId, line);
        },

        append  : function(element, content)
        {
            $(element).append(content);
        }
    };
})();


$(function(){
  Tile.addTile("body", 1);                  //append a tile to the page
  Tile.appendText("Line 1", 1);
  Tile.appendText("Line 2", 1);
  
  Tile.addTile("body", 2);                  //append a second tile to the page
  Tile.appendText("Line A", 2);
  Tile.appendText("Line B", 2);
  
  //drawback, we can still access all the members of the module. There is no privacy enforced
  Tile.width = 120;                         //No privacy: width is not supposed to be public 
  Tile.append("#2", "<div>Hello</div>");    //No privacy: append function is not supposed to be public
});
