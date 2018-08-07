/*
  A module is a small unit of independent and reusable code. It is similar to a Class in Java and C# (but not exactly same)
  Below is a basic Tile module that will append a tile to the html page along with some data. 
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
