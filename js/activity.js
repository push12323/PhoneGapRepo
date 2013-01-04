// JavaScript Document
window.onload = function() {
	

};

function onDragStartHandler(target, event)
{
/**
* set dragble image as target
*
*/
	
	event.dataTransfer.setData("imageID", target.id);
	event.dataTransfer.setData("imageClass", target.name);

}
function onDropHandler(target, event)
{
	event.preventDefault();
	var id = event.dataTransfer.getData("imageID");
	var cateName = event.dataTransfer.getData("imageClass");
	var content = target.getElementById("content");
	
	if(target.id == "vegi_basket")
	{
	if(cateName == "vegitables")
	{
	target.appendChild(document.getElementById(id));
	}
	}
	else if(target.id == "fruit_basket")
	{
	if(cateName == "fruits")
	{
		console.log(target.getElementsByClassName("content"));
		var eleChild = target.getElementsByClassName("content");
		//content.appendChild(document.getElementById(id));
		alert(content)
	}
	}
	else
	{
		event.preventDefault();
		return false;
	}

}
function onDragOverHandler(event)
{
	preventDefaults(event);
}

function preventDefaults(event)
{
	if (event.preventDefault)
	{
		event.preventDefault();
	}
	try
	{
		event.returnValue = false;
	}
	catch (exception) {}
}
