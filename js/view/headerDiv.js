/**
 * @author prashant.raut
 */
function headerDiv(d)
{
    this.createHeader = function()
    {
        d.addClass("headerDiv");
        this.createButtons();
    }
    
    this.createButtons = function()
    {
        var helpBtn = $("<div class='topNavigation'><button data-role='button' data-inline='true'>Help</button></div>");
        d.append(helpBtn);
        
        var settingBtn = $("<div class='topNavigation'><button data-role='button' data-inline='true'>Settings</button></div>");
        d.append(settingBtn);
        d.trigger("create");
    }
    
    this.createHeader();
}

