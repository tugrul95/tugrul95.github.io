/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var timer;
var elemID = "#disp";
var id=0;
/*
 * Waiting for the HTML page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */
$().ready(function() {
    var top;
    var left;
    for(var i=0; i<10; i++) {
        left = Math.floor((Math.random() * 1000) + 10);
        top = Math.floor((Math.random() * 800) + 10);
        $(elemID).append(   
         "<div id='" + i + "' class='b' style='top:"
         + top + "px; left:" + left + "px;'>" +
         i + "</div>");
    }
    timer = setInterval(function() { for(var i=0; i<10; i++) {
        left = Math.floor((Math.random() * 100) + 10);
        top = Math.floor((Math.random() * 800) + 10);        
        $("#"+i).css("left",left+"px");
        $("#"+i).css("top",top+"px");
        $("#"+i).html(id++);
    } },2000);
});
      
    