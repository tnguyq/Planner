let inputText = document.querySelector(".input-area input");
var toDo = document.getElementById("checklist");
let calendar = document.getElementById("Calendar");

function showToDo(){
    toDo.innerHTML = localStorage.getItem("to-dos");
}

showToDo();

function addTask(){
    if("" == inputText.value || null == inputText.value){
        alert("Please Enter a Task");
    }else{
        var li = document.createElement("li");

        var img = document.createElement("img");
        img.src = "images/unchecked.png";

        li.appendChild(img);

        var text = document.createElement("p");
        text.textContent = inputText.value;
        text.contentEditable = true;
        li.appendChild(text);
  
        var remove = document.createElement("i");
        remove.className = "glyphicon glyphicon-remove";

        li.appendChild(remove);
        toDo.appendChild(li);

        //clear inputText
        inputText.value = "";
        saveData();
    }
}

inputText.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' || e.keyCode === 13){
        addTask();
    }
});

toDo.addEventListener("click", function(event){
    if(event.target.tagName === "IMG"){
        markTask(event.target);
    }else if(event.target.tagName === "I"){
       deleteTask(event.target);
    }
});

calendar.addEventListener("click", function(event){
    if(event.target.classList.contains("day")){
        console.log("Here");
        addEvent(event);
    }
});

function addEvent(item){
    
}

function markTask(img){
    if(img.classList.contains("completed")){
        img.src = "images/unchecked.png";
        img.className = "";
    }else{
        img.src = "images/check-box.png";
        img.className = "completed";
    }
}


function deleteTask(tag){
    tag.parentElement.remove();
    saveData();
}

function saveData(){
    localStorage.setItem("to-dos", toDo.innerHTML);
}