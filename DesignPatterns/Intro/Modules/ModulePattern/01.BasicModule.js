/*
  A module is a small unit of independent and reusable code. It is similar to a Class in languages like Java and C#
  Below is a basic Tile module that will append a tile to the html page along with some data. 
*/

var Tile = 
{
    width   : 100,
    height  : 100,
    
    append  : function(container, id, data)
    {
        $(container).append("<div id='"+ id +"' height='" + this.height + "' width='" + this.width + "'> </div>");
        this.populate(data, id);
    }
    
    populate: function(data, id)
    {
        var tile = $('#' + id);
        var out = data.join("");
        $(tile).html(out);
    }
}


$(function(){

  var linesCollection1 = ["Line 1", "Line 2"];
  var linesCollection2 = ["Line A", "Line B", "Line C"];
  
  Tile.append("body", 1, linesCollection1);
  Tile.append("body", 2, linesCollection2);
  
});
