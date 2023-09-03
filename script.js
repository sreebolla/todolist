// creating variables to fetch them from html....
const inputBox =document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox===''){
        alert("Please enter your tasks...")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // creating a delet icon 
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    // everytime we add the tasks to our list it calls this function and saves the data into the browser...
    saveData();
}
// adding functionality to check oe uncheck and delete list

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// creating a function to save the data in the browser

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

// to display the data whenever we open our app in the browser..

function showToDOLists(){
    listContainer.innerHTML = localStorage.getItem('data');

}

showToDOLists();