const mongoose = require("mongoose");
const chat = require("./models/chat");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

main().then((data) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

let allchats = [
    {
        from : "rohit",
        to : "negi",
        msg : "send me hii",
        created_at : new Date()
    },
    {
        from : "sujal",
        to : "prince",
        msg : "how are you",
        created_at : new Date()
    },
    {
        from : "harsh",
        to : "prince",
        msg : "what happen bro",
        created_at : new Date()
    },
    {
        from : "adam",
        to : "jessy",
        msg : "i love you",
        created_at : new Date()
    },
    {
        from : "kumar",
        to : "krutika",
        msg : "send me your copy",
        created_at : new Date()
    },
    {
        from : "ayush",
        to : "anshika",
        msg : "send me ....",
        created_at : new Date()
    },
    {
        from : "akansha",
        to : "ayush",
        msg : "i love you please accept my proposal",
        created_at : new Date()
    }
 ]

 chat.insertMany(allchats);


