
let LSData = JSON.parse(localStorage.getItem("admission")) || [];


let tbody=document.querySelector("tbody");
//btnarr is optional
function display(data,btnarr,onClick) {
    tbody.innerHTML = null;
    data.forEach(function(elem,index){
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = elem.name;
      let td2 = document.createElement("td");
      td2.innerText = elem.gender;
      let td3 = document.createElement("td");
      td3.innerText = elem.email;
      let td4 = document.createElement("td");
      td4.innerText = elem.mobile;
      let td5 = document.createElement("td");
      td5.innerText = elem.course;
     
  
tr.append(td1, td3, td5, td2, td4);
if(btnarr != undefined){
  btnarr.forEach(function(ele){
    let button= document.createElement("td");
    button.innerText= ele;
    button.addEventListener("click",function(){
     onClick(ele,index);
    });
    tr.append(button);
  })
}
tbody.append(tr);
    });
  }



