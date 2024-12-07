 /*let a1
let a2 = prompt("fill in your email" ) 
let phone =prompt("phone number")
let a4 = prompt("create password") 
let a5 = prompt("address") 
alert("you have successfully set up your account")



to set your time
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
} */
document.addEventListener("DOMContentLoaded", function(){
  function validatepassword(phone){
    let phonedigit = /[=11]/
   let phonealpha = /[!=a-z]/
   let phoneAlpha = /[!=A-Z]/
    
   
   return phonedigit.test(phone) &&
   phonealpha.test(phone) ;
   phoneAlpha.test(phone) ;
  }
  document.getElementById("loginForm").addEventListener("submit",function(event){    event.preventDefault();
    let phone = document.getElementById ("phone").value
    let message = document.getElementById("resultMessage");
    
    
    
    if (validatepassword(phone)){
      alert ("")
    }else{
      alert("wrong number")
    }
  })
})
  

