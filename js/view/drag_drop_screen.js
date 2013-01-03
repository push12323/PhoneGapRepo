// JavaScript Document


var containerArray;
var dragObjectArray = [{path:"images/dnd/fruit1.jpg", category:"fruit"},{path:"images/dnd/fruit2.jpg", category:"fruit"},{path:"images/dnd/fruit3.jpg", category:"fruit"},{path:"images/dnd/vegitable1.jpg", category:"vegitable"},{path:"images/dnd/vegitable2.jpg", category:"vegitable"},{path:"images/dnd/vegitable3.jpg", category:"vegitable"}]
var dropObjectArray = [{path:"images/dnd/fruit_basket.jpg", category:"fruit_basket"},{path:"images/dnd/vegitable_basket.jpg", category:"vegitable_basket"}]



createDragAndDropScreen();
function createDragAndDropScreen()
{
	
	console.log("createLoginView"); 
	
		
	$("#appContainer").append("<div id='loginCont' style='margin:0 auto;'/>");
	
	$("#loginCont").append("<div id='dragContainer' style='float:left; margin-left:10px; width:50px; height:420px'/>");
	
	$("#loginCont").append("<div id='dropContainer' style='float:left; margin-left:10px;width:300px; height:420px'/>");
	
	for(var i=0; i<dragObjectArray.length; i++)
	{
		$("#dragContainer").append("<img draggable='true'  ondragstart='onDragStartHandler(this, event);'  width='50' height='50' name="+dragObjectArray[i].category+"    id='object"+[i]+"' src="+dragObjectArray[i].path+">");
	}
	
	for(var i=0; i<dropObjectArray.length; i++)
	{
		$("#dropContainer").append("<div id="+dropObjectArray[i].category+" ondragover='onDragOverHandler(event);' ondrop='onDropHandler(this,event)' style='background-image:url("+dropObjectArray[i].path+"); background-repeat:no-repeat; width:300px; height:150px'></div>");
	}
	
	$("#loginCont").trigger("create");

}

	
	
function onDragStartHandler(target, event)
{
	/**
	* set dragble image as target
	*
	*/
	
	event.dataTransfer.setData('imageID', target.id);
	event.dataTransfer.setData('imageClass', target.name);
	console.log("target:- " + target.id + " event:- " +"  Name :- " + target.name);

}

function onDropHandler(target, event)
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
	

