let passwordInput = document.getElementById("password");
let checkbtn = document.getElementById("check-btn");
let result = document.getElementById("result");

checkbtn.onclick =()=>{
    let password = passwordInput.value;
    if(password.length < 8){
        result.textContent="Password is too short!";
        result.style.color="red";
    }
    else if(password===password.toUpperCase()){
        result.textContent="Password must contain LowerCase letters!";
        result.style.color='red';
    }
    else if(password===password.toLowerCase()){
        result.textContent="Password must contain UpperCase letters!";
        result.style.color='red';
    }
    else{
        let hasDigit = false;

        for(let i = 0; i < password.length; i++){
            if (!isNaN(password[i])) {
                hasDigit = true;
                break;
            }
        }
if(hasDigit){
    result.textContent="Password is strong";
    result.style.color="green";
}

else{
    result.textContent="Password must contain a digit";
    result.style.color="red";
}
    }
}