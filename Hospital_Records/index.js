document.querySelector("form").addEventListener("submit",doctorRecords);

let drArr=[];

function doctorRecords(event){
    event.preventDefault();
    let Name = document.querySelector("#name").value;
    let DocID= document.querySelector("#docID").value;
    let Dept= document.querySelector("#dept").value;
    let Exp= document.querySelector("#exp").value;
    let Email= document.querySelector("#email").value;
    let Number= document.querySelector("#mbl").value;
    
    let docObj={
        drName: Name,
        drDocID: DocID,
        drDept: Dept,
        drExp:Exp,
        drEmail: Email,
        drNumber: Number,
        }

drArr.push(docObj);
 displayTable(drArr);
  
    }

    function displayTable(drArr){
    document.querySelector("tbody").innerHTML="";
   
    for (let i=0; i<drArr.length; i++){
    
    let row= document.createElement("tr");
    if(i%2!=0){
        row.style.backgroundColor="blue";
        
    }
    let col1= document.createElement("td");
    col1.innerText=drArr[i].drName;
    let col2= document.createElement("td");
    col2.innerText=drArr[i].drDocID;
    let col3= document.createElement("td");
    col3.innerText=drArr[i].drDept;
    let col4= document.createElement("td");
    col4.innerText=drArr[i].drExp;
    let col5= document.createElement("td");
    col5.innerText=drArr[i].drEmail;
    let col6= document.createElement("td");
    col6.innerText=drArr[i].drNumber;
    let col7= document.createElement("td");
    if (drArr[i].drExp>5){
        col7.innerText="Senior";
    } else if(drArr[i].drExp>=2 && drArr[i].drExp<=5){
        col7.innerText="Junior";
    } else if(drArr[i].drExp>=1){
        col7.innerText="Trainee"
    }
    let col8= document.createElement("td");
    col8.innerText="Delete";
    col8.style.backgroundColor="red";
    col8.addEventListener("click",function(event){
        event.target.parentNode.remove();
    });
     
    row.append(col1,col2,col3,col4,col5,col5,col6,col7,col8);
    document.querySelector("tbody").append(row);

};

}
