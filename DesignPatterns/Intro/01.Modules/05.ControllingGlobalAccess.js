/*
  The Module Reveal Pattern provides privacy and modularity. 
  But what if we have multiple modules and we want only some of them to be available in global scope, rest of them remaining private?
  We can do that by using IIFE (immediately invoked function expression), to pass only specific objects to global scope, as shown below:
  
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
  
  (function(global){    
          var Tile = (function()
          {
          })();
          
          var Dashboard = (function()
          {   
          })();

          $(function(){
              Dashboard.init();           //initialize dashboard
          });

          global.dashboard = global.dashboard || Dashboard;   //making dashboard globally accessible    
  
  })(window);
  
  window.dashboard.addTile();                     // accessing dashboard globally via window object
  
  In the example below, we have tried to completely separate the global scope from our local scope. 
  The input parameter global will be where we will assign variables that we want to be globally accessible
  The input parameter jQuery makes it clear that our code does not use jQuery directly, but via the input parameter (this is optional)
*/

///global refers to global scope variable
///jQuery refers to jquery module.We don't need to explicitly add jQuery as the input parameter, 
///but by doing so, we make it clear that our module uses jQuery
(function(global, jQuery)     
{
      var $ = jQuery;       //specifying that jQuery will be used via the $ symbol as alias, inside our module (you can replace $ with any other symbol here)
      var HtmlHandler = (function()                     //HtmlHandler module will stay hidden from global scope
      {
          var append = function(element, content){
              $(element).append(content);
          }
          var html = function(element, content){
              $(element).html(content);
          }
          return {                        //the revealed part of HTMLHandler module
            appendHTML:append,
            html      :html
          };
      })();
  
      var Tile = (function()                            //Tile module will stay hidden from global scope
      {
          var width   = 100, height  = 100;
          var addTile  = function(container, tileId){
              var tileHTML = "<div id='"+ tileId +"' style='border:1px solid gray;padding:5px;margin:2px;float:left; width:"+width+"px;height:"+height+"px;background:white;'> </div>";
              HtmlHandler.appendHTML(container, tileHTML);
          }
          var appendText = function(dashboardId, tileId, text){
              tileId = '#' + tileId;
              dashboardId = '#' + dashboardId;
              var container = dashboardId + ' ' + tileId;
              line = '<div>'+text+'</div>';
              HtmlHandler.appendHTML(container, line);
          }
          return {                          //the revealed part of Tile module
             addTile : addTile,
             appendText : appendText
          }
      })();
      
      var Dashboard = (function()                       //Dashboard module will be exposed globally via window variable
      {
          var width   = 500, height  = 500;
          var initializeDashboard  = function(dashboardId)
          {
              var dashboardHTML = "<div id='"+ dashboardId +"' style='border:1px solid gray;padding:5px;margin:2px;float:left; width:"+width+"px;height:"+height+"px;background:lavender'> </div>";
              HtmlHandler.html("body", dashboardHTML);
          }
          var addTile  = function(dashboardId, tileId){
              dashboardId = '#' + dashboardId;
              Tile.addTile(dashboardId,tileId);
          }
          var addTextToTile = function(dashboardId, tileId, text){
              Tile.appendText(dashboardId,tileId,text);
          }
          return {                          //the revealed part of Dashboard module
             init    : initializeDashboard,
             addTile : addTile,
             addTextToTile: addTextToTile
          }
      })();
       
      global.dashboard = global.dashboard || Dashboard;     //making Dashboard module globally accessible via global (i.e window)
      
})(window, jQuery);       //passing the window object as the global access variable, and jQuery as the jQuery module variable (make sure you have jquery in your project)


//back in global scope
$(function(){

  //Tile.addTile("body", 1);          //nope, not accessible
  //Tile.appendText("Line 1", 1);     //not accessible
  //Tile.appendText("Line 2", 1);     //not accessible

  var dashboardId = "Dash123";
  window.dashboard.init(dashboardId);
  
  window.dashboard.addTile(dashboardId,1);
  window.dashboard.addTextToTile(dashboardId,1,"Line 1");
  window.dashboard.addTextToTile(dashboardId,1,"Line 2");
  
  window.dashboard.addTile(dashboardId,2);
  window.dashboard.addTextToTile(dashboardId,2,"Line A");
  window.dashboard.addTextToTile(dashboardId,2,"Line B");
  
});
