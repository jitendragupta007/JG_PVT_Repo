let products= document.querySelector("#products");
let search= document.querySelector("#search");
let form= document.querySelector("form");
let priceFilterData={
    min:0,
    max:10000,
}



function display(data){
 products.innerHTML= null;
data.forEach(function(elem){
let d1= document.createElement("div");
let image=document.createElement("img");
image.src=elem.img;
let name= document.createElement("h1");
name.innerText=elem.brand;
let price= document.createElement("h4");
price.innerText=elem.price;


d1.append(image,name,price);
products.append(d1);


    })
}


display(product_data);


function searchFilter(input,data){
let filtered= data.filter(function(elem){
return elem.brand.toLowerCase().includes(input.toLowerCase());
   });
    return filtered;
}


function priceFilter(data, minValue,maxValue){
    
    let filtered=data.filter(function(elem){
return elem.price>=minValue&& elem.price<=maxValue;

    });
    return filtered;
}

search.addEventListener("input",function(){
let data =searchFilter(search.value, product_data);
data= priceFilter(data,priceFilterData.min, priceFilterData.max );
display(data);

});


form.addEventListener("submit",function(event){
    event.preventDefault();

    if(form.maxPrice.value != "" && form.minPrice.value != ""){
    priceFilterData ={
max: +form.maxPrice.value,
min: +form.minPrice.value,
    };
let data =searchFilter(search.value, product_data);
data= priceFilter(data,priceFilterData.min, priceFilterData.max );
display(data);

    }
});







