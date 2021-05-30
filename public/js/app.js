

let ip="192.168.43.142";
let PORT=4000;
let url = "http://" + ip + ":" + PORT;

// ------------------------------------------------------login form------------------------------------------------------------------------
function login(){
    let userLogin = {
        userAccount: username.value,
        mail: email.value,
        password: password.value
    };
    localStorage.setItem("username",username.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    axios.post(url+"/login", userLogin).then( (response)=>{
        let is_can_login = response.data;
        if (!is_can_login){
            let textMessage = "Login fail";
            let color = "red";
            message.textContent = textMessage;
            message.style.color = color;
        }else{
            window.location.href="formchat.html";
        }
    });
}
// MAIN========================================
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".text");
const bntLogin = document.querySelector("#btn-login");
const btnSignin=document.querySelector('#btn-signin');
bntLogin.addEventListener("click",login);
btnSignin.addEventListener('click', signup);


