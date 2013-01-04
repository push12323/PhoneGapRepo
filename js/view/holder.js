/**
 * @author prashant.raut
 */
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
    $("#appContainer").empty();
    insertScript("js/view/home_screen.js");
}

function dragAndDropActivty()
{
	$("#appContainer").empty();
	insertScript("js/view/drag_drop_screen.js");
}

function insertScript(script) {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = script;
    document.getElementsByTagName("head")[0].appendChild(elem);
}
