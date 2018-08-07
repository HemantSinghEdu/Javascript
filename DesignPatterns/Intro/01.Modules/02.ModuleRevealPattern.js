/*
  The Module Pattern has one drawback: everything in it is public. What if we want certain properties or functions of the Module to be
  private?
  To address this, we have the Module Reveal Pattern.
  Only the properties and functions we want to reveal are included in the final return object.
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
    
    return                          //the revealed part of our module
    {
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
