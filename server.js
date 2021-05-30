const fs=require('fs');
const express = require('express');


const app = express();
app.listen(process.env.PORT || 4000, () => console.log("Server running..."));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let userAcc = JSON.parse(fs.readFileSync("userAcc.json"));
// LOGIN REQUEST:
app.post("/login", (req, res) =>{
    let userThat_login = req.body;
    let is_can_login = false;
    for (user of userAcc){
        if(user.email === userThat_login.mail && user.username === userThat_login.userAccount && user.password === userThat_login.password){
            is_can_login = true;
        }
    };
    res.send(is_can_login);
})
// GET ALL MESSAGE:
let data =JSON.parse(fs.readFileSync("text.json",));
app.get("/getdata", (req, res) =>{
    res.send(data);
});
// ADD DATA: 
app.post("/add", (req, res)=>{
    data.push(req.body)
    fs.writeFileSync("text.json",JSON.stringify(data));
});