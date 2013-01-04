/**
 * @author prashant.raut
 */
createLoginView();

function createLoginView()
{
    console.log("createLoginView"); 
    $("#appContainer").append("<div id='loginCont'/>");
    $("#loginCont").css("height", "100%");
    $("#loginCont").css("backgroundColor", "gray");
    $("#loginCont").css("color", "white");
    //$('#loginCont').css('textShadow','black 1px 1px 1px');
    $('#loginCont').css('textAlign','center');
    $("#loginCont").append("<div id='formCont' style='display:inline-block; margin-top:70px;'/>");
    $("#formCont").append("<span style='float:left;padding-top:15px;'>Name:</span><input id='login_user' type='text' style='width:200px; float:left; margin-left:45px;'/><br/>");
    $("#formCont").append("<span style='float:left;padding-top:15px;'>Password:</span><input id='login_password' type='text' style='width:200px; float:left; margin-left:20px;'/><br/>");
    $("#formCont").append("<button data-role='button' data-inline='true' id='login_submit' value='Submit'/>");
    $("#loginCont").trigger("create");
    
    $("#login_submit").on("tap", onLoginSubmitClick);
}

function onLoginSubmitClick()
{
     gotoHomeScreen();
    /*if($("#login_user").val() == 'student' && $("#login_password").val() == 'student')
    {
        gotoHomeScreen();    
    }
    else
    {
        alert("Please check your login and password!");
    }*/
}
