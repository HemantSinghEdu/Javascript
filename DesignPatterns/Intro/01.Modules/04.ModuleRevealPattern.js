/*
  The Module Pattern has one drawback: there is no privacy, everything in it is public. What if we want certain properties or 
  functions of the Module to be private? To address this, we have the Module Reveal Pattern.
  
  The Module Reveal pattern keeps the variables and functions private by keeping them outside the return object. 
  The return object is allowed to have only those properties and functions that we want to make public. 
*/

var Tile = (function()
{
    var width   = 100;
    var height  = 100;
  
    var add  = function(container, id)
    {
        $(container).append("<div id='"+ id +"' height='" + this.height + "' width='" + this.width + "'> </div>");
    }
    
    var appendText = function(line, id)
    {
        var tile = $('#' + id);
        $(tile).append(line);
    }
    
    return {                          //the revealed part of our module
       add : add,
       appendText : appendText
    }
  
})();


$(function(){
  Tile.add("body", 1);
  Tile.appendText("Line 1", 1);
  Tile.appendText("Line 2", 1);
  
  Tile.add("body", 2);
  Tile.appendText("Line A", 2);
  Tile.appendText("Line B", 2);
  
  Tile.width = 120;             //width is not accessible from Tile anymore
});
