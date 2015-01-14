/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".whatdoyouwanttoput").css("background-color", "orange");
    
    $("p").css({"background-color": "blue", "color": "white"});

    $('deleteSpan').bind('click', deleteSpan);

    $('randPara').before('<span>Before Paragraph</span>');

    $('<span> Insert Before Paragraph</span>').insertBefore('#randPara');

    $('<span> Prepend to Paragraph</span>').prependTo('#randPara');

    $('<span> Append Before Paragraph</span>').appendTo('#randPara');

    $('#randPara').append('<span>Append Paragraph</span>');

    $('<span> Insert After Paragraph</span>').insertAfter('#randPara');

    $('#randPara').after('<span> After Paragraph</span>');

    $('#theBody').bind('keyup', checkKeyPressed).bind('mousemove', theMouseMoved).click(event, eventTriggered);

    $('div:last p:nth-child(2)').css('background-color', 'green');

    $('div:last p:nth-child(3)').css('background-color', 'red')

    $('#oneButton').bind('click', alertButtonClick);

    $("td").css("padding", "6px 10px");

    $(".hero").css("background-color", "blue");

    $("#numbers").css("background-color", "gray");

    $("h3, th").css("background-color", "green");

    $('#textBox1').bind('blur', onBlurEvent)
            .bind('focus', onFocusEvent)
            .bind('onmousedown', onMDownEvent)
            .bind('onmouseup', onMUpEvent)
            .bind('change', onChangeEvent);

    $(window).resize(resizedWindow);

    $('logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    $('#lastIsFirst').bind('click', lastIsFirst);
    $('#addBefore').bind('click', addBefore);
    $('#addAfter').bind('click', addAfter);
    $('#addToTextBox').bind('click', addToTextBox);

    $('#twoButton').bind('dbclick', dblClickedMe);

    $("form").submit(function() {
        alert("Submit button clicked");
    });

    $('#threeButton').bind('click', unbindLogo);
    
    $('#show').css('visibility','visible');
    
    $('#show').css('visibility','visible');
    
    $('#show').css('visibility','visible');
    
});
function deleteSpan()
{
    $('span').remove(':contains("Append)');
}

function resizedWinidow() {
    $("#second").html("Window was resized W:" + $(window).width() + "H:" +
            $(window).height());
}

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

function dblClickedMe() {
    $("#second").html("You double clicked my button");
}

function mouseOverMe() {
    $("h1").html("MouseOn");
    $("p").html("I'm Frogsworth!!!");
    $("#second").html("You put your cursor on my logo");
}

function mouseOutMe() {
    $('.2').css('visibility', 'hidden');
    $('.1').css('visibility', 'visible');
    $("#second").html("You stopped touching my logo");
}

function unbindLogo()
{
    $("#logo").unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOutMe);
}

function checkKeyPressed(event)
{
    $("#fifth").text(String.fromCharCode(event.keyCode));
}

function theMouseMoved(event)
{
    $("#seventh").html(event.screenX);
    $("#ninth").html(event.screenY);
}

function eventTriggered(event)
{
    $("#tenth").html(event.target.nodeName);
    $("#eleventh").html(event.timeStamp);
}

function hideTheImage() {
    $('#logo').hide('puff', {}, 2500);
}

function showTheImage() {
    $('#logo').show('fold', {}, 2500);
}

function toggleTheText() {
    $('h4').toggle(2500);
}

function fadeTheImage() {
    $('#logo').fadeOut(2500);
}

function fadeALittle() {
    $('#logo').fadeTo(2500, .30);
}

function fullOpacityImage() {
    $('#logo').fadeTo(2500, 1);
}

function slideTheImage() {
    $('#second').slideUp(2500);
}

function slideTheImage() {
    $('#second').slideUp(2500);
}

function unslideTheImage() {
    $('#second').slideDown(2500);
}

function customAnimate() {
    $('#logo').animate({opacity: 0.25, height: '150px'}, 2000, 'linear');
}

function shakeLogo() {
    $('#logo').effect('shake', {times: 5, direction: 'down', distance: 10},
    200);
}

function bounceLogo() {
    $('#logo').effect('bounce', {times: 5, direction: 'up', distance: 10},
    200);
}

function highlightLogo() {
    $('h3').effect('highlight', {color: 'purple'},
    200);
}

function pulsateLogo() {
    $('#logo').effect('pulsate', {times: 5},
    200);
}

function sizeLogo() {
    $('#logo').effect('size', {to: {height: 350, width: 350}},
    200);
}

function hideThePage() {
    $('#show').css('visibility','visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold',{}, 2500);
    $('#show').hide('puff', {}, 2500);
}

