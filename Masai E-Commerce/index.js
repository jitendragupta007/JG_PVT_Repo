
let container = document.querySelector("#container");
let filter = document.querySelector("#filter");
let cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];

function Display(data) {
  container.innerHTML = null;
  data.forEach(function (ele) {
    let product = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.img;
    let name = document.createElement("h1");
    name.innerText = ele.brand;
    let price = document.createElement("h2");
    price.innerText = ele.price;
    let catagory = document.createElement("p");
    catagory.innerText = ele.catagory;
    let cart = document.createElement("button");
    cart.innerText = "add to cart";
    cart.addEventListener("click", function () {
      AddToCart(ele);
    });

    img.addEventListener("click",function(){
        newPage(ele);
    })
    name.addEventListener("click",function(){
        newPage(ele);
    })
    price.addEventListener("click",function(){
        newPage(ele);
    })
    catagory.addEventListener("click",function(){
        newPage(ele);
    })
    product.append(img, name, price, catagory, cart);
    container.append(product);
  });
}

Display(product_data);

function newPage(ele){
    localStorage.setItem("newPage", JSON.stringify(ele));
    window.location.href="newPage.html"
}




sort.addEventListener("change", function(){

if (sort.value===""){
    Display(product_data);
} else {
let product_data_copy= product_data.map(function(elem){
return elem;
});

let sorted = product_data_copy.sort(function (a,b) {

if (sort.value === "Low-High") {
  return a.price-b.price;
} else if (sort.value === "High-Low") {
  return b.price-a.price;
}

});
Display(sorted);;
}

});



filter.addEventListener("change", function () {
  if (filter.value === "") {
    Display(product_data);
  } else {
    let filtered = product_data.filter(function (ele) {
      return ele.catagory === filter.value;
    });
    Display(filtered);
    console.log(filtered);
  }
});

function AddToCart(product) {
    let iscartAdded=false;
  for (let i = 0; i < cartLS.length; i++) {
    if (cartLS[i].productID === product.productID) {
      alert("Product already in the cart");
      iscartAdded=true;
      break;
    }
  }
if(iscartAdded==false){
  cartLS.push(product);
  alert("Product Added Successfully");
  localStorage.setItem("cart-page",JSON.stringify(cartLS));
}
}



let signinLS= JSON.parse(localStorage.getItem("signin"));
let nav= document.getElementById("nav");
if(signinLS != null){
nav.innnerHTML=null;
let username= document.createElement("h1");
username.innerText= signinLS.Name;
let cartBTN= document.createElement("a");
cartBTN.setAttribute("href","cart.html");
cartBTN.innerText="CART";
nav.append(username,cartBTN);
}




