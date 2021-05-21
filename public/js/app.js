


let ip="192.168.2.11";
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













const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message=document.querySelector(".text");
const bntLogin = document.querySelector("#btn-login");


bntLogin.addEventListener("click", requestLogin);
console.log(email.value);

