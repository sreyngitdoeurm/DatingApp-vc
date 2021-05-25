const fs=require('fs');
const express = require('express');

const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


app.get('/', (req, res) => res.send("Hello Project"))
let array=[];
app.get('/signin', (req,res) =>{
    let username=req.query.username;
    let password=req.query.password;
    let email=req.query.email;
    let notSign=true;
    
    let odj={};    
    for (let user of users){
        if (user.username===username && user.password===password && user.email===email){
            notSign=false;
            array=users;
        }else{
            odj.username=username;
            odj.password=password;
            odj.email=email;
           
        }
        
    }
    if (notSign){
        for ( let user of users){
            array.push(user);
        }
        
        array.push(odj);
    }
    res.send(notSign);
    fs.writeFileSync('userAcc.json', JSON.stringify(array));

    console.log(array);
})
app.get('/login', (req, res)=>{
    let username=req.query.username;
    let password=req.query.password;
    let email=req.query.email;
    let loginUser=false;
    for (let user of users){
        if (user.username===username && user.password===password && user.email===email){
            loginUser=true;
        }
    }
    res.send(loginUser);
    
    
})




let users=JSON.parse(fs.readFileSync('userAcc.json'))

console.log(users);
