

let SignUpForm=`<form>
<input id="name" type="text" placeholder="Enter your name here" />
<input id="email" type="email" placeholder="Enter your email here" />
<input id="password" type="password" placeholder="Enter your password here"/>
<input type="submit" value="submit" placeholder="submit"/>
</form>`;



let SignInForm=`<form>
<input id="email" type="email" placeholder="Enter your email here" />
<input id="password" type="password" placeholder="Enter your password here"/>
<input type="submit" value="submit" placeholder="submit"/>
</form>`;



let signupData={
    name:"S",
    email:"S@gmail.com",
    password:1234,
};







let formDiv= document.querySelector("#form");
let buttons = document.querySelectorAll("button");
let auth=document.querySelector("#auth");
let account=document.querySelector("#account");

let formState= "SignUp";

function display(state){

    if(state==="SignUp"){
  formDiv.innerHTML= SignUpForm;
    } else {

        formDiv.innerHTML= SignInForm;
    }

}



buttons[0].addEventListener("click",function(){
display("SignUp");
});


buttons[1].addEventListener("click",function(){
    display("SignIn");

});
