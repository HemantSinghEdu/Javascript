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

    var addTile  = function(container, tileId)
    {
        var tileHTML = "<div id='"+ tileId +"' style='border:1px solid gray;padding:5px;margin:2px;display:inline-block;width:"+width+"px;height:"+height+"px;'> </div>";
        append(container, tileHTML);
    }
    
    var appendText = function(line, tileId)
    {
        tileId = '#' + tileId;
        line = '<div>'+line+'</div>';
        append(tileId, line);
    }
    
    var append = function(element, content)
    {
        $(element).append(content);
    }
    
    return {                          //the revealed part of our module
       addTile : addTile,
       appendText : appendText
    }
  
})();


$(function(){
  Tile.addTile("body", 1);
  Tile.appendText("Line 1", 1);
  Tile.appendText("Line 2", 1);
  
  Tile.addTile("body", 2);
  Tile.appendText("Line A", 2);
  Tile.appendText("Line B", 2);
  
  //Tile.width = 120;               //width is not accessible from Tile anymore
  //Tile.append("body", "Hello");   //append function is not accessible from Tile anymore
});
