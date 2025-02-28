const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const posts= [
    {
        username: "suhani",
        title: "Post 1"
    },
    {
        username: "singh",
        title: "Post 2"
    }
    
]

const users=[]

app.get("/posts",(req, res) => {
    res.json(posts);
 
})
app.get("/users",(req, res) => {
    res.json(users);
 
})
app.get("/login",(req, res) => {
    res.send("Hello World");
})

app.post("/users",async(req, res) => {
    try{

        const salt= await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashedPassword);
        const user = { name: req.body.name,password: hashedPassword};
        users.push(user);
        res.status(201).send();
       
    }
    catch
    {
        res.status(500).send();
    }
   

})
app.listen(3000);