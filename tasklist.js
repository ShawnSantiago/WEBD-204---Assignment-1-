var listItem;

function taskadd() {
	taskNew = new objectTask();
}

function objectTask() { 
	var task = document.getElementById('textinput').value; 
    var listItem=document.createElement("li");
    listItem.id = task;
    var itemText=document.createTextNode(task);
    listItem.appendChild(itemText);
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.name = task;
    checkbox.id = "checkbox"; 
    document.getElementById('place').appendChild(listItem);
    document.getElementById(task).insertBefore(checkbox,listItem.firstChild);

}

function deleteCheckBox(){
	if (document.getElementById('checkbox').checked === true){ 
		var itemNode = document.getElementById(checkbox.name);
		itemNode.parentNode.removeChild(checkbox.name);
		
	}
}

///test


