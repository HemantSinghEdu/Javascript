/*
  We want our module pattern to behave like a proper class using which we can create multiple Tile objects, each handling its own
  data.
  
  The proper way to do that is to enclose our module inside a function, and make that function return our module object. 
  Our enclosing function represents our class, and we can create its objects using the new keyword
*/

var Tile = function() 
{
    var tileObject = 
    {
      width   : 100,
      height  : 100,
      text    : [],       //to keep track of this tile's data
      id      : 0,        //tile's id
      
      add  : function(container)
      {
          $(container).append("<div id='"+ this.id +"' height='" + this.height + "' width='" + this.width + "'> </div>");
      },

      appendText: function(text)
      {
          var tile = $('#' + this.id);
          this.text.push(text);            // this line is going to open a can of worms later!!
          var out = this.text.join(" ");
          $(tile).html(out);
      }
    };

    return tileObject;
}


$(function(){
  var tile1 = new Tile();
  var tile2 = new Tile();
  
  tile1.add("body", 1);
  tile1.appendText("Good", 1);
  tile1.appendText("Bye", 1);
  
  tile2.add("body", 2);
  tile2.appendText("Au ", 2);      //Whoops!! Tile.text will now have both tile 1 and tile 2's data
  tile2.appendText("Revoir", 2);  //We are going to see both Good Bye and Au Revoir in tile 2 
});

/* 
    As you can see, our Tile module behaves more like a single object or a Static class. 
    It just cannot be used to store individual data for multiple tiles. We need proper objects for that. 
    
    Let's fix this in the next lesson.
*/
