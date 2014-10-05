function taskadd() {
    taskNew = new objectTask();
}

function objectTask() {
    var task = document.getElementById('textinput').value;
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(task);
    listItem.appendChild(itemText);
    document.getElementById('place').appendChild(listItem);
}

function deleteCheckBox() {
    var ul = document.getElementById('place');
    var li = ul.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}

function importantCheckBox() {
    var ul = document.getElementById('place');
    var li = ul.children;
    console.log(li.className)
    for (var i=0; i < li.length; i++) {
        if(li[i] && li[i].children[0].checked) {
           li[i].className = "bold";
        }
        else {
            li[i].className = ""
        }
    }

}

