
let ip="localhost";
let PORT=5000;
const getLoginRequest = "http://" + ip + ":" + PORT + "/login";
const getSigningRequest = "http://" + ip + ":" + PORT + "/signin";

// ------------------------------------------------------login form------------------------------------------------------------------------

function requestLogin(event){
    event.preventDefault();
    let odj={};
    let url = getLoginRequest + "?username=" + username.value  + "&password=" + password.value + "&email=" + email.value;
    axios
        .get(url)
        .then((response) =>{
            let loginUser = response.data;
            if (!(loginUser)){
                let textMessage = "Login fail";
                let color = "red";
                message.textContent = textMessage;
                message.style.color = color;
            }else{
                window.location.href="formchat.html";
                odj.username=username.value;
                odj.password=password.value;
                odj.email=email.value;

                loginData.push(odj);
                saveLogindata();
            }
        });
    
}
// ------------------------------------------------------form sign in---------------------------------------------
function singIn(event){
    event.preventDefault();
    let url = getSigningRequest + "?username=" + username.value  + "&password=" + password.value + "&email=" + email.value;
    axios
        .get(url)
        .then((response) =>{
            let signinUser = response.data;
            let textMessage = "this account already sign in";
            let color = "red";
            if (signinUser){
                textMessage = 'Your sign in is succesful';
                color = "green";
                
            }
            message.textContent = textMessage;
            message.style.color = color;
            
            
        });
}

function saveLogindata(){
    localStorage.setItem("userData", JSON.stringify(loginData));
}


// MAIN========================================
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".text");
const bntLogin = document.querySelector("#btn-login");
const btnSignin=document.querySelector('#btn-signin');
bntLogin.addEventListener("click", requestLogin);
btnSignin.addEventListener('click', singIn);
let loginData=[];

