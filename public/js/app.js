
let ip="192.168.2.29";
let PORT=5000;
const getLoginRequest = "http://" + ip + ":" + PORT + "/login";
function afterRequest(response){
    
}

function requestLogin(event){
    event.preventDefault();

    let url = getLoginRequest + "?username=" + username.value  + "&password=" + password.value + "&emailOrphonenumber=" + email.value;
    axios
        .get(url)
        .then((response) =>{
            let loginUser = response.data;
            if (!(loginUser)){
                let textMessage = "Login fail";
                let color = "red";
                message.textContent = textMessage;
                message.style.color = color;
            }
        });
}
function showAfterSignIn (event) {
    event.preventDefault();

    let url = getLoginRequest + "?username=" + usernameSignIn.value  + "&password=" + passwordSignIn.value + "&emailOrphonenumber=" + emailSignIn.value;
    axios
        .post(url)
        .then((response) =>{
            let signInUser = response.data;
            console.log(signInUser);
            if (signInUser){
                let textMessage = "That email is already in use, please choose another";
                let color = "red"
                messageSignIn.textContent = textMessage;
                messageSignIn.style.color = color;   
            }
        });

}

document.querySelector(".form-signIn").style.display = "none";


let showSignIn = () => {
    document.querySelector(".form-signIn").style.display = "block";
    document.querySelector(".form-login").style.display = "none";
}

let hideSignIn = () => {
    document.querySelector(".form-signIn").style.display = "none";
    document.querySelector(".form-login").style.display = "block";
}



// MAIN========================================
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".text");

const usernameSignIn = document.querySelector("#userNameSignIn");
const emailSignIn = document.querySelector("#emailSignIn");
const passwordSignIn = document.querySelector("#passwordSignIn");
const messageSignIn = document.querySelector(".messageSignIn");

const btnSignIn = document.querySelector("#btn-signin");
const bntLogin = document.querySelector("#btn-login");
const btnBack = document.querySelector("#btn-back");
const btnSign_In = document.querySelector("#btn-signIn");

bntLogin.addEventListener("click", requestLogin);
btnSignIn.addEventListener("click", showSignIn);
btnBack.addEventListener("click", hideSignIn);
btnSign_In.addEventListener("click", showAfterSignIn);


