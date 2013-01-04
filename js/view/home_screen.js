/**
 * @author prashant.raut
 */
createHomeScreen();

function createHomeScreen()
{
    console.log("createhomeScreen"); 
    $("#appContainer").append("<div id='loginCont'/>");
    $("#loginCont").css("height", "100%");
    $("#loginCont").css("backgroundColor", "gray");
    $("#loginCont").css("color", "white");
    //$('#loginCont').css('textShadow','black 1px 1px 1px');
    $('#loginCont').css('textAlign','center');
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:300px;'/>");
    $("#formCont").append("<span>This is Home screen</span><br/><br/>");
    $("#formCont").append("<button data-role='button' data-inline='true' id='home_books' value='My Books'/>");
    $("#formCont").append("<button data-role='button' data-inline='true' id='home_score' value='My Score'/>");
    $("#formCont").append("<button data-role='button' data-inline='true' id='home_profile' value='My Profile'/>");
    $("#formCont").append("<button data-role='button' data-inline='true' id='home_notes' value='My Notes'/>");
    $("#loginCont").trigger("create");
    
    addEventListeners();
}

function addEventListeners()
{
    $("#home_books").on("tap", onHomeBooksClick);
    $("#home_score").on("tap", onHomeScoreClick);
    $("#home_profile").on("tap", onHomeProfileClick);
    $("#home_notes").on("tap", onHomeNotesClick);
}

function onHomeBooksClick()
{
    gotoMyBookScreen();
}

function onHomeScoreClick()
{
    alert("This page is not ready yet!");
}

function onHomeProfileClick()
{
    alert("This page is not ready yet!");
}

function onHomeNotesClick()
{
    alert("This page is not ready yet!");
}
