const input = document.getElementById("input-Box");
const listContainer = document.getElementById("listContainer");
const btn = document.querySelector("btn");

function addList()
{
    if(input.value.length == 0)
    {
        alert("Please Write Somthing");
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    input.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN")
    {
       
            e.target.parentElement.remove();
            saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("Data",listContainer.innerHTML);
    
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("Data");
}

showData();
