
let ip="https://dating-app-vc.herokuapp.com/";
let PORT=4000;
const url = "http://" + ip + ":" + PORT;
// -------------------------------------------------------------message---------------------
// time to send and recieve 
function showMessage(message_data){
    body_box.firstElementChild.remove();
    let message_container = document.createElement("div");
    message_container.className = "message_container";
    for(data of message_data){
        let message_data = document.createElement("p");
        message_data.className = "message_data";
        message_data.textContent = data.message;
        if(data.username === localStorage.getItem("username")){
            let message_incoming = document.createElement("div");
            message_incoming.className = "message_incoming";
            let me = document.createElement("p");
            me.className = "me";
            message_data.style.background = "aliceblue"
            me.textContent = localStorage.getItem("username");
            message_incoming.appendChild(me);
            message_incoming.appendChild(message_data);
            message_container.appendChild(message_incoming);
        }else{
            let message_outgoing = document.createElement("div");
            message_outgoing.className = "message_outgoing";
            let other = document.createElement("p");
            other.className = "other";
            message_data.style.background = "yellow"
            other.textContent = data.username;
            message_outgoing.appendChild(other);
            message_outgoing.appendChild(message_data);
            message_container.appendChild(message_outgoing);
        }
        body_box.appendChild(message_container);
    }
}
function sendMessage (){
    let new_message = {
        username: localStorage.getItem("username"),
        message: message_place.value
    }
    axios.post("/add",new_message).then( (response)=>{
        console.log(response.data);
    });
    message_place.value = "";
}
function loadData(){
    axios.get(url + "/getdata").then( (response)=>{
        let message_data = response.data;
        showMessage(message_data)
    })
}
// LOARD DATA 
setInterval(loadData, 200);
// get button and user account name and body-box and message place: 
let message_place = document.querySelector("#message-place");
let body_box = document.querySelector(".body-box");
let user_account_name = document.querySelector("#friend-name");
user_account_name.textContent = localStorage.getItem("username");
let btn_send = document.querySelector("#icon-send");
btn_send.addEventListener("click", sendMessage);


//  MAIN========================================
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");