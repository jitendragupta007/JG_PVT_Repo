document.querySelector("form").addEventListener("submit", productApp);

let pArr=[];
function productApp(event){
    event.preventDefault();
let Name = document.querySelector("#name").value;
let Category= document.querySelector("#category").value;
let Listed = document.querySelector("#listed").value;
let Price = document.querySelector("#price").value;
let Date = document.querySelector("#date").value;
let  Sold= document.querySelector("#sold").value;
let Revenue = Price*Sold;

let productObj= {

    pName: Name,
    pCategory: Category,
    pListed: Listed,
    pPrice: Price,
    pDate: Date,
    pSold: Sold,
    pRevenue: Revenue,
};
pArr.push(productObj);
displayTable(pArr);
}


function displayTable(pArr){
document.querySelector("tbody").innerHTML="";
pArr.forEach(function (elem){
let row=document.createElement("tr");
 let col1=document.createElement("td");
 col1.innerText=elem.pName
 let col2=document.createElement("td");
 col2.innerText=elem.pCategory
 let col3=document.createElement("td");
 col3.innerText=elem.pListed
 let col4=document.createElement("td");
 col4.innerText=elem.pPrice
 let col5=document.createElement("td");
 col5.innerText=elem.pDate
 let col6=document.createElement("td");
 col6.innerText=elem.pSold
 let col7=document.createElement("td");
 col7.innerText=elem.pRevenue
 let col8=document.createElement("td");
 col8.innerText="Delete";
 col8.style.color="red";
col8.addEventListener("click", function(event){
 event.target.parentNode.remove();
});

row.append(col1,col2,col3,col4,col5,col6,col7,col8);
document.querySelector("tbody").append(row);
});

}

