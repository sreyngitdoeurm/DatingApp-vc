const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
users=[
    {name:"Srey Ngit Doeurm", password:123456, emailOrphoneNumber:"sreyngit.doeurm@email.com"},
    {name:"Sophea Suon", password:1234567, emailOrphoneNumber:"068875198"},
    {name:"Chorn Sophana", password:1234568, emailOrphoneNumber:"097347407"},
    {name:"Mang Nimuot", password:1234569, emailOrphoneNumber:"068874089"},
    {name:"Nguon Somphors", password:234561, emailOrphoneNumber:"068913467"}

]

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => res.send("Hello Project"))
app.get('/login', (req, res)=>{
    let username=req.query.username;
    let password=req.query.password;
    let emailOrphonenumber=req.query.emailOrphonenumber;
    let loginUser=false;
    for (let user of users){
        if (user.name===username && String(user.password)===password && user.emailOrphoneNumber===String(emailOrphonenumber)){
            loginUser=true;
        }
    }
    res.send(loginUser);
    
    
})