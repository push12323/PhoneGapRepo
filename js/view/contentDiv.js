/**
 * @author prashant.raut
 */
function contentDiv(d)
{
    this.createContentDiv = function()
    {
        d.addClass("contentDiv");
        this.setContentDimentions();
    }
    
    this.setContentDimentions = function()
    {
        var h = (document.body.clientHeight-parseInt($("#appHeader").css("height")))+"px";
        console.log(h);
        d.css("height", h);
        insertScript("js/view/Login.js");
    }
    
    this.createContentDiv();
}
