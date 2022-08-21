let form = document.querySelector("form");

let LSdata = JSON.parse(localStorage.getItem("admission")) || [];

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let obj ={
    name: form.name.value,
    email: form.email.value,
    mobile: form.mobile.value,
    gender: form.gender.value,
    course: form.course.value,
 };



LSdata.push(obj);
localStorage.setItem("admission",JSON.stringify(LSdata));

});
