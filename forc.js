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
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);
        $(elemID).append(   
         "<div id='" + i + "' class='b' style='top:"
         + top + "px; left:" + left + "px;'>" +
         i + "</div>");
    }
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 80) + 1);
        top = Math.floor((Math.random() * 10) + 1);        
        $("#4").css("left",left+"px");
        $("#5").css("top",top+"px");
        $("#6").html(id++);
    },2000);
});
      
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 56) + 1);
        top = Math.floor((Math.random() * 56) + 1);        
        $("#1").css("left",left+"px");
        $("#1").css("top",top+"px");
        $("#1").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 250) + 1);
        top = Math.floor((Math.random() * 50) + 1);        
        $("#2").css("left",left+"px");
        $("#2").css("top",top+"px");
        $("#2").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 50) + 1);
        top = Math.floor((Math.random() * 10) + 1);        
        $("#3").css("left",left+"px");
        $("#3").css("top",top+"px");
        $("#3").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 560) + 1);
        top = Math.floor((Math.random() * 480) + 1);        
        $("#4").css("left",left+"px");
        $("#4").css("top",top+"px");
        $("#4").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 450) + 1);
        top = Math.floor((Math.random() * 50) + 1);        
        $("#5").css("left",left+"px");
        $("#5").css("top",top+"px");
        $("#5").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 550) + 1);
        top = Math.floor((Math.random() * 200) + 1);        
        $("#6").css("left",left+"px");
        $("#6").css("top",top+"px");
        $("#6").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 5600) + 1);        
        $("#7").css("left",left+"px");
        $("#7").css("top",top+"px");
        $("#7").html(id++);
    },2000);
        
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#8").css("left",left+"px");
        $("#8").css("top",top+"px");
        $("#8").html(id++);
    },2000);
    
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#9").css("left",left+"px");
        $("#9").css("top",top+"px");
        $("#9").html(id++);
    },2000);
        timer = setInterval(function() {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#0").css("left",left+"px");
        $("#0").css("top",top+"px");
        $("#0").html(id++);
    },2000);