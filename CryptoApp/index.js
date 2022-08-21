let container = document.querySelector("tbody");
let sort = document.querySelector("#sort");
let crypto_per_page=6;
let currentPageState=1;
let pages=Math.ceil(crypto_data.length/crypto_per_page);
let paginationDiv=document.querySelector("#pagination");

function display(data) {
  container.innerHTML = "";
  data.forEach(function (elem,index) {
    let tr = document.createElement("tr");
    let td8= document.createElement("td");
    for(let i=1; i<data.length; i++){
        if(currentPageState==i){
    td8.innerText=crypto_per_page*(currentPageState-1)+index+1;
        }
    }
   // if(currentPageState==1){
   // td8.innerText=crypto_per_page*(currentPageState-1)+index+1;
   // } else if(currentPageState==2){
       // td8.innerText=crypto_per_page*1+index+1;
    //}else if(currentPageState==3){
        //td8.innerText=crypto_per_page*2+index+1;
    //}else if(currentPageState==4){
        //td8.innerText=crypto_per_page*3+index+1;
   // }else if(currentPageState==5){
      //  td8.innerText=crypto_per_page*4+index+1;
   // }
    let td1 = document.createElement("td");
    td1.innerText = elem.id;
    let td2 = document.createElement("td");
    td2.innerText = elem.name;
    let td3 = document.createElement("img");
    td3.src = elem.image;
    let td4 = document.createElement("td");
    td4.innerText = elem.curr_price;
    let td5 = document.createElement("td");
    td5.innerText = elem.market_cap;
    let td6 = document.createElement("td");
    td6.innerText = elem.high24;
    let td7 = document.createElement("td");
    td7.innerText = elem.low24;

    tr.addEventListener("click",function(){
    newPagee(elem);
     })

    tr.append(td8,td1, td2, td3, td4, td5, td6, td7,);



    container.append(tr);
  });
}

function newPagee(elem){
localStorage.setItem("newPage", JSON.stringify (elem));
window.location.href="newPage.html"
}

let search= document.getElementById("search");

search.addEventListener("input",function(){
  if(search.value===null||search.value===""){
  display(crypto_data);


  }else{
let filteredD = crypto_data.filter(function(elem){
 return elem.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
})

  
  display(filteredD)
  }


})







function displayPagination(pages){
    for(let i=1; i<=pages; i++){
let btn= document.createElement("button");
btn.innerText= i;
btn.addEventListener("click",function(){

currentPageState = i;
paginatedTable(crypto_data,currentPageState,crypto_per_page);
})
paginationDiv.append(btn);
 }

};

displayPagination(pages);




display(crypto_data);

function paginatedTable(data, page, perPage){
let start=perPage*(page-1);
let end= perPage*page;

let splited=data.slice(start,end);
display(splited);
}

paginatedTable(crypto_data,currentPageState,crypto_per_page);


sort.addEventListener("change", function(){
    
    if (sort.value===""){
        paginatedTable(crypto_data,currentPageState,crypto_per_page);
    } else {
let crypto_data_copy= crypto_data.map(function(elem){
    return elem;
});

let sorted = crypto_data_copy.sort(function (a,b) {
    
    if (sort.value === "Low-High") {
      return a.high24-b.high24;
    } else if (sort.value === "High-Low") {
      return b.high24-a.high24;
    }
    
  });
  paginatedTable(sorted,currentPageState,crypto_per_page);;
}
  
});

