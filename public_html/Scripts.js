/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".whatdoyouwanttoput").css("background-color", "orange");
    $("p").css({"background-color": "blue", "color": "white"});
    
    $('div:last p:nth-child(2)').css('background-color', 'green');
    
    $('div:last p:nth-child(3)').css('background-color', 'red')
    
    $('#oneButton').bind('click', alertButtonClick);
    
    $('#textBox1').bind('blur', onBlurEvent)
                  .bind('focus', onFocusEvent)
                  .bind('onmousedown', onMDownEvent)
                  .bind('onmouseup', onMUpEvent)
                  .bind('change', onChangeEvent);
          
    $(window).resize(resizedWindow);
          
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});

function alertButtonClick() {
    alert("There was a button clicked");
}
function onBlurEvent() 
{
$("#second").html("You left the box");
}

function onFocusEvent() 
{
$("#second").html("You entered the box");
}

function onMDownEvent() 
{
$("#second").html("You left the textbox");
}

function onMUpEvent() 
{
$("#second").html("You entered the box");
}

function onChangeEvent() 
{
$("#second").html("You changed the box");
}



function mouseOverMe() {
    $("h1").html("MouseOn");
    $("p").html("I'm Frogsworth!!!");
}

function mouseOutMe() {
    $('.2').css('visibility', 'hidden');
    $('.1').css('visibility', 'visible');
}