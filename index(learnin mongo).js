const mongoose = require('mongoose');//mongoose ko use karne se phly require karna hota hai 

//mongoose.connect('mongodb://127.0.0.1:27017/test');//mongoose k andar connection naam ka function hota hai uske madad se hum mongoose ko mongo DB se connect karte hai and jo andar likhha hai wo uss data base ka link/address hai jisse hum connect karna cahta hai 


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }
main().then((res) =>{
    console.log("connection successful");
})
.catch(err => console.log(err));// ye upar wale line ko likhne ka asyncrouns tareeka hai kyu ki upra wala line promise return karta hai to hum ye likh sakye hai 


const userSchema = new mongoose.Schema({// define the schema
    name:String,
    email:String,
    age:Number
});

const user = new mongoose.model("user",userSchema);// create collection in database and its is also a build of class

// const user1 = new user({// instance
//     name:"adam",
//     email:"adam@gmail.com",
//     age:48
// });
// user1.save();// isko use kie ki mongo db m data save ho jai jab y likhte hai to mongo db phly jo schema se iss data ko banai hai usko verify karta hai then phir save karne deta hai
// const user2 = new user({
//     name:"eve",
//     email:"eve@gmail.com",
//     age:48
// });
// user2.save().then((res) => {
//     console.log(res);
    
// }).catch((err) => {
//     console.log(err);
    
// })


// user.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:50},
//     {name:"peter",email:"peter@gmail.com",age:48},
//     {name:"bruce",email:"bruce@gmail.com",age:47}
// ]).then((res) => {
//     console.log(res);
    
// })

// user.find().then((data) => {
//     console.log(data);
// })

// user.find({age:{$gte:48}}).then((data) => {
//     console.log(data[0]["name"]);// can also use data[0].name 
// })

// user.findById('676262762d7445c7707bb47a').then((data) => {
//     console.log(data);
// })

// user.updateOne({name:"peter"},{age:50}).then((data) => {// ye update karke  meta data return karta hai rathen then ki data return kare
//     console.log(data);
// })

// user.find().then((data) => {
//     console.log(data);
// })


// user.findOneAndUpdate({name:"alice"},{age:50}).then((data) => {// ye update karke purana data he return karta hai 
//     console.log(data);
    
// })

// user.findOneAndUpdate({name:"hunus"},{age:52},{new:true}).then((data) => {// ye update karke updated data he return karta hai 
//     console.log(data); 
// })

// user.findByIdAndUpdate("676262762d7445c7707bb47a",{age:52},{new:true}).then((data) => {// ye update karke updated data he return karta hai 
//     console.log(data); 
// })

// user.deleteOne({name:"peter"}).then((res) => {
//     console.log(res);
// })
// user.deleteMany({age:{$gt:48}}).then((res) => {//it return count not deleted item
//     console.log(res);
// })

// user.findByIdAndDelete('67625fbf804b93f9b93176c0').then((res) => {//it return document which is deleted
//     console.log(res);
// })

