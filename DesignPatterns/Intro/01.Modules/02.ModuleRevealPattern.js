/*
  The Module Pattern has one drawback: everything in it is public. What if we want certain properties or functions of the Module to be
  private?
  To address this, we have the Module Reveal Pattern.
  We enclose the module in a function. The function returns the module 
*/

var Tile = 
{
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


$(function(){
  Tile.add("body", 1);
  Tile.appendText("Line 1", 1);
  Tile.appendText("Line 2", 1);
  
  Tile.add("body", 2);
  Tile.appendText("Line A", 2);
  Tile.appendText("Line B", 2);
});
