// JavaScript Document


var containerArray;
var dragObjectArray = [{path:"images/dnd/fruit1.jpg", category:"fruit"},{path:"images/dnd/fruit2.jpg", category:"fruit"},{path:"images/dnd/fruit3.jpg", category:"fruit"},{path:"images/dnd/vegitable1.jpg", category:"vegitable"},{path:"images/dnd/vegitable2.jpg", category:"vegitable"},{path:"images/dnd/vegitable3.jpg", category:"vegitable"}]
var dropObjectArray = [{path:"images/dnd/fruit_basket.jpg", category:"fruit_basket"},{path:"images/dnd/vegitable_basket.jpg", category:"vegitable_basket"}]

var dragElement;
var dropElement;
var dragged = false;

createDragAndDropScreen();
function createDragAndDropScreen()
{
	
	console.log("createLoginView"); 
	
		
	$("#appContainer").append("<div id='loginCont' style='margin:0 auto;'/>");
	
	$("#loginCont").append("<div id='dragContainer' style='float:left; margin-left:10px; width:50px; height:420px'/>");
	
	$("#loginCont").append("<div id='dropContainer' style='float:left; margin-left:10px;width:300px; height:420px'/>");
	
	for(var i=0; i<dragObjectArray.length; i++)
	{
		$("#dragContainer").append("<img draggable='true' width='50' height='50' name="+dragObjectArray[i].category+"    id='object"+[i]+"' src="+dragObjectArray[i].path+">");
		
		$("#dragContainer").children([i]).on("mousedown", onDragStartHandler);
	}
	
	for(var i=0; i<dropObjectArray.length; i++)
	{
		$("#dropContainer").append("<div id="+dropObjectArray[i].category+"  style='background-image:url("+dropObjectArray[i].path+"); background-repeat:no-repeat; width:300px; height:150px'></div>");
	}
	
	$("#loginCont").trigger("create");

}

	
	
function onDragStartHandler(event)
{
	/**
	* set dragble image as target
	*
	*/
	dragElement = event.currentTarget;
	
	$(document).on("mousemove", onDragHandler);
	$(document).on("mouseup", onDragEndHandler);

}

function onDragHandler(event)
{
	/**
	* set dragble image as target
	*
	*/
	event.preventDefault();
}

function onDragEndHandler(event)
{
	/**
	* set dragble image as target
	*
	*/
	console.log("onDragEndHandler");
	preventDefaults(event);
	$(document).off("mousemove", onDragHandler);
	$(document).off("mouseup", onDragHandler);
	dragElement = null;
	
	
}

/*function onDropHandler(target, event)
{
	event.preventDefault();
	var id = event.dataTransfer.getData('imageID');
	var cateName = event.dataTransfer.getData('imageClass');
	
	//alert("target:- " + target.id + " event:- " + id + "  Name :- " + cateName)
	
	
	if(target.id == "vegitable_basket")
	{
		if(cateName == "vegitable")
		{
			target.appendChild(document.getElementById(id));
		}
	}
	else if(target.id == "fruit_basket")
	{
		if(cateName == "fruit")
		{
			target.appendChild(document.getElementById(id));
		}
	}
	else
	{
		event.preventDefault();
		return false;
	}

}*/

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
	

