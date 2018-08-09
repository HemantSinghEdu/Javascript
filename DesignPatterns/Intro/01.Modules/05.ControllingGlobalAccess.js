/*
  The Module Reveal Pattern provides privacy and modularity. 
  What if we have a couple of modules but we only want one of them to be available in global scope?
  We can easily control global access by using IIFE (immediately invoked function expression) as shown below:
  
  (function(){
    //none of the code here is globally accessible
  })();
  
  We can pass our local variables to global scope using the window object
  
  (function(win){
    ...
    win.something = win.something || ourLocalObject;   //ourLocalObject is passed to the global window.something
    ...
  })(window);
  
  Let's say we have two modules: Tile and Dashboard, and we only want to expose Dashboard globally. We can do it like this:
  
  (function(win){    
          var Tile = (function()
          {
          })();
          
          var Dashboard = (function()
          {   
          })();

          $(function(){
              Dashboard.init();           //initialize dashboard
          });

          win.dashboard = win.dashboard || Dashboard;   //making dashboard globally accessible    
  
  })(window);
  
  win.dashboard.addTile();                     // accessing dashboard globally via window object
  
*/

(function()
{
      var Tile = (function()
      {
          var width   = 100, height  = 100;
          var addTile  = function(container, tileId){
              var tileHTML = "<div id='"+ tileId +"' style='border:1px solid gray;padding:5px;margin:2px;float:left; width:"+width+"px;height:"+height+"px;'> </div>";
              append(container, tileHTML);
          }
          var appendText = function(line, tileId){
              tileId = '#' + tileId;
              line = '<div>'+line+'</div>';
              append(tileId, line);
          }
          var append = function(element, content){
              $(element).append(content);
          }
          return {                          //the revealed part of Tile module
             addTile : addTile,
             appendText : appendText
          }
      })();
      
      var Dashboard = (function()
      {
          var width   = 500, height  = 1000;
          var init  = function(container, tileId)
          {
              var tileHTML = "<div id='"+ tileId +"' style='border:1px solid gray;padding:5px;margin:2px;float:left; width:"+width+"px;height:"+height+"px;'> </div>";
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
      
});

$(function(){
  Tile.addTile("body", 1);
  Tile.appendText("Line 1", 1);
  Tile.appendText("Line 2", 1);
  
  Tile.addTile("body", 2);
  Tile.appendText("Line A", 2);
  Tile.appendText("Line B", 2);
  
  //we cannot access private members anymore
  //Tile.width = 120;                        //width is not accessible from Tile anymore
  //Tile.append("#2", "<div>Hello</div>");   //append function is not accessible from Tile anymore
});
