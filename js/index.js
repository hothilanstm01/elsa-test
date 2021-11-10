function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    if(name==""){
        alert("Please enter Name")
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        alert("Please Enter Phone Number")
    
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        alert("Please Enter Email")
        return false;
    }
    var valid = false;
    var x = document.form.goi
    for(var i=0; i<x.length; i++){
        if(x[i].checked){
            valid = true;
            break;
        }
    }
    if(!valid){
        alert("Please select anyone!!")
        return false;
    }
    alert("Đăng ký thành công!");
    return true;
  }

function show1() {
    document.querySelector("#result1").style.display="block"; 
    document.querySelector("#result2").style.display="none"; 
}  
function show2() {
    document.querySelector("#result2").style.display="block"; 
    document.querySelector("#result1").style.display="none"; 
}  
