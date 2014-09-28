function taskadd(){
    var task = document.getElementById('textinput').value;
    var listItem=document.createElement("P");
    var itemText=document.createTextNode(task);
    listItem.appendChild(itemText);
    document.getElementById('place').appendChild(listItem);
}
