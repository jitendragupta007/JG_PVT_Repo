document.querySelector("form").addEventListener("submit", todoApp);


let todoArr;
if(localStorage.getItem("todoList")==null){
    todoArr=[];
} else{
    todoArr=JSON.parse(localStorage.getItem("todoList"));
}
function todoApp(event){
event.preventDefault();

let todoObj={

    Task: document.querySelector("#task").value,
    Priority: document.querySelector("#priority").value,
}


todoArr.push(todoObj);

localStorage.setItem("todoList", JSON.stringify(todoArr));

displayTable(todoArr);

}

function displayTable(todoArr){
    document.querySelector("tbody").innerHTML="";
    todoArr.forEach(function(elem,index){
   let row= document.createElement("tr");

    let col1=document.createElement("td");
    col1.innerText=elem.Task;

    let col2=document.createElement("td");
    col2.innerText=elem.Priority;
    if(elem.Priority=="High"){
        col2.style.backgroundColor="red";
    } else{
    col2.style.backgroundColor="green";
}
    let col3=document.createElement("td");
    col3.innerText="Delete";
    col3.style.color="red";
    col3.addEventListener("click", function(){
     deleteRow(elem,index);
    });

 row.append(col1,col2,col3);
 document.querySelector("tbody").append(row);
});

}


function deleteRow(elem,index){
    todoArr.splice(index,1);
    localStorage.setItem("todoList", JSON.stringify(todoArr));

    displayTable(todoArr);
}

