/*
  Let's try to keep track of individual tile's data via our module pattern.
  We are going to walk into a problem here :)
  The solution is given in next lesson
*/

var Tile = 
{
    width   : 100,
    height  : 100,
    text    : [],       //to keep track of this tile's data
  
    add  : function(container, id)
    {
        $(container).append("<div id='"+ id +"' height='" + this.height + "' width='" + this.width + "'> </div>");
    },
    
    appendText: function(text, id)
    {
        var tile = $('#' + id);
        this.text.push(text);            // this line is going to open a can of worms later!!
        var out = this.text.join(" ");
        $(tile).html(out);
    }
};


$(function(){
  Tile.add("body", 1);
  Tile.appendText("Good", 1);
  Tile.appendText("Bye", 1);
  
  Tile.add("body", 2);
  Tile.appendText("Au ", 2);      //Whoops!! Tile.text will now have both tile 1 and tile 2's data
  Tile.appendText("Revoir", 2);  //We are going to see both Good Bye and Au Revoir in tile 2 
});

/* 
    As you can see, our Tile module behaves more like a single object or a Static class. 
    It just cannot be used to store individual data for multiple tiles. We need proper objects for that. 
    
    Let's fix this in the next lesson.
*/
