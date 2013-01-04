/**
 * @author prashant.raut
 */
var quizPages = ["quiz_1.js", "quiz_2.js", "quiz_3.js", "quiz_4.js"];
$(document).ready(init);
function init()
{
    console.log("init Called!");
    createMainContainer();
}

function createMainContainer()
{
    $("#mainContainer").append('<div id="appHeader"/>');
    $("#mainContainer").append('<div id="appContainer"/>');
    $("#mainContainer").append('<div id="appFooter"/>');
    var hdDiv = new headerDiv($("#appHeader"));
    var contDiv = new contentDiv($("#appContainer"));
}

function gotoHomeScreen()
{
    loadPage("js/view/home_screen.js");
    insertStyle("css/test.css");
}

function gotoMyBookScreen()
{  
    loadPage("js/view/my_books.js");
}

function loadQuizEngin()
{
    insertScript("js/engins/quiz_engin.js");    
}

function insertScript(script) {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = script;
    document.getElementsByTagName("head")[0].appendChild(elem);
}

function insertStyle(css){
    //css has the format: selector{...style...}
    var elem, 
        cur = document.getElementById('_theme');
    cur && cur.parentNode.removeChild(cur);

    elem = document.createElement('link');
    elem.type = "text/css";
    elem.id = "_theme";
    elem.rel = "stylesheet";
    elem.href = css;
    document.getElementsByTagName('head')[0].appendChild(elem);
}

function loadPage(script_path)
{
     $("#appContainer").empty();
     insertScript(script_path);
}
