/**
 * @author prashant.raut
 */
createMyBookScreen();

function createMyBookScreen()
{
    console.log("createhomeScreen"); 
    $("#appContainer").append("<div id='loginCont'/>");
    $("#loginCont").css("height", "100%");
    $("#loginCont").css("backgroundColor", "gray");
    $("#loginCont").css("color", "white");
    //$('#loginCont').css('textShadow','black 1px 1px 1px');
    $('#loginCont').css('textAlign','center');
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px; width:350px;'/>");
    $("#formCont").append("<span>This is Home screen</span><br/><br/>");
    $("#formCont").append("<img style='margin:5px;' onClick='onBookClick()' src='assets/business.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/cheese.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/chicken.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/destiny.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/megaliving.jpg'/>");
    $("#formCont").append("<img style='margin:5px; opacity:0.2;' src='assets/rdpd.jpg'/>");
    $("#loginCont").trigger("create");
}

function onBookClick()
{
    loadQuizEngin();
}
