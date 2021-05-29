

let ip="localhost";
let PORT=5000;
const getLoginRequest = "http://" + ip + ":" + PORT + "/login";
const getSigningRequest = "http://" + ip + ":" + PORT + "/signin";

// ----------------------------------------------search----------------------------------
let btn_search=document.querySelector('#btn-search');
let searchBox=document.querySelector('#search');

function searchFriend(event){
    let text=searchBox.value.toLowerCase();
    let items=document.querySelectorAll('li');
    for (let item of items){
        let name=item.firstElementChild.textContent.toLowerCase();
        if (name.indexOf(text) >-1 ){
            item.style.display='';
        }else{
            item.style.display='none';
        }
    }
    
}
const friendName=document.querySelector('#friend-name');
let clickOn = (event) =>{    
    
    let name=event.target.childNodes[1].textContent;
    friendName.textContent=name;

    // let messager=document.querySelector('.messager');
    

    
    // // ----------body------------------------
    // let bodyBox=document.createElement('div');
    // bodyBox.className='body-box';

    // let p=document.createElement('p');
    // p.className='p';
    // bodyBox.appendChild(p);
}
// -------------------------------------------------------display friends account------------
let ul=document.querySelector('ul');
function usersInfo(response){
    function loadData(){
        let getUserdata=JSON.parse(localStorage.getItem("userData"));
        let userName=getUserdata[0].username;
        let pass=getUserdata[0].password;
        let eM=getUserdata[0].email;
        console.log(getUserdata[0]);
        
        for (let user of response.data){
            console.log(user);
            if ( !(user.username===userName && user.password===pass && user.email===eM)){
                let userName=user.username;
                let li=document.createElement('li');
                let image=document.createElement('img');
                image.id='friend-acc';
                image.src='./images/images.png'
                let firstSpan=document.createElement('span');
                firstSpan.className='name';
                firstSpan.textContent=userName;
                li.appendChild(image);
                li.appendChild(firstSpan);
                ul.appendChild(li);  

            }
              
        }
        let li=document.querySelectorAll('li');
        for(value of li){
            value.addEventListener('click', clickOn);
        } 
    }
    loadData();
}



let requestUsers='http://localhost:5000/users';
axios
    .get(requestUsers)
    .then(usersInfo)

btn_search.addEventListener('click', searchFriend);


// ------------------------------------------------------form Message---------------------------------------------
let bod=document.querySelector('.body-box');
let messagePlace=document.querySelector('#message-place');
let italic=document.querySelector('#icon-italic');
let bold=document.querySelector(('#icom-bold'));
let sent=document.querySelector('#icon-send');
console.log(sent);
function boldText(event){
    let span=document.createElement('ul');
    span.id='text';
    span.textContent=messagePlace.value;
    span.style.fontStyle="italic";
    para.appendChild(span);
}
function italicText(event){
    let span=document.createElement('ul');
    span.id='text';
    span.textContent=messagePlace.value;
    span.style.fontStyle="bold";
    para.appendChild(span);
    
}
function sentMessage(event){
    let userProfile=document.querySelector('#user-name');
    function loadData(){
        let getUserdata=JSON.parse(localStorage.getItem("userData"));
        let user=getUserdata[0].username;
        let text=document.createElement('div');
        text.className='tex';
        let para=document.createElement('p');
        para.textContent=user +" : " +messagePlace.value;
        text.appendChild(para);
        bod.appendChild(text);

        messagePlace.value='';
        
    }

    
    

    loadData();
}


sent.addEventListener('click', sentMessage);

italic.addEventListener('click', italicText);



//  MAIN========================================
let userProfile=document.querySelector('#user-name');
function loadData(){
    let getUserdata=JSON.parse(localStorage.getItem("userData"));
    userProfile.textContent=getUserdata[0].username;
    
    
}

loadData();
