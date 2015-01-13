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
    
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    $('#lastIsFirst').bind('click', lastIsFirst);
    $('#addBefore').bind('click', addBefore);
    $('#addAfter').bind('click', addAfter);
    $('#addToTextBox').bind('click', addToTextBox);
});

function replaceWHtml() {
    $('#h3Tag').html('<h6>Now I\'m an h6</h6>');
}

function replaceWText() {
    $('#randPara').appen('<h6>Now I\'m an h6</h6>');
}

function addAPara() {
    $('#randPara').append('<p>Another paragraph</p>');
}

function removeAPara() {
    $('#randPara p:last').remove();
}

function lastIsFirst() {
    $('#randPara p:last').remove('#randPara p:first');
}

function addBefore() {
    $('#randPara p:first').before('I go before anything');
}

function addAfter() {
    $('#randPara p:last').after('I go after anything');
}

function addToTextBox() {
    $('#randText').val('Random Text');
}

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
