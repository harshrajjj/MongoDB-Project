const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

main().then((data) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})


// let chat1 = new chat({
//     from : "neha",
//     to : "priya",
//     msg : "send me your exam sheets",
//     created_at : new Date()
// })

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
    
// })


app.listen("8080",() => {
    console.log("listining on port 8080")
})


app.get("/",(req,res) => {
    res.send("root is working ")
})

app.get("/chats",async (req,res) => {
    let chats = await chat.find();
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res) => {
    res.render("new.ejs")
})


//create route

app.post("/chats",(req,res) => {
    let {from,to,msg} = req.body;
    let newChat = new chat ({
        from : from,
        to : to, 
        msg : msg,
        created_at : new Date
    })
    newChat.save().then((res) => {
        console.log("chat was saved");
        
    }).catch((err) => {
        console.log(err);
        
    })
    res.redirect("/chats")
})

// edit route
app.get("/chats/:id/edit",async (req,res) => {
    let {id} = req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs",{chats});
})

//update route

app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {newmsg} = req.body;
    let updatedchat = await chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true});
    res.redirect("/chats");
})

// delete route

app.delete("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
})