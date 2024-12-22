const mongoose = require("mongoose");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}
main().then((res) =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20// maximum length of string setted
    },
    author:{
        type:String
        
    },
    price:{
        type:Number,
        min:[1,"price is too low for selling"]// minimum settted
    },
    discount:{
        type:Number,
        default:0
    },
    cateogry:{
        enum:["fiction","non-fiction"]
    }
});

const book = mongoose.model("book",bookSchema);

// let book1 = new book({
//     title:'mathematics',
//     author:"rd sharma",
//     price:1200
// })
// book1.save().then(res => {
//     console.log(res);  
// }).catch(err =>{
//     console.log(err);
    
// })

// let book1 = new book({// book valaditation failed bcz title is not given but it is a required value
//     author:"rd sharma",
//     price:1200
// })
// book1.save().then(res => {
//     console.log(res);  
// }).catch(err =>{
//     console.log(err);
    
// })

// let book1 = new book({
//     title:'physics',
//     price:1200
// })
// book1.save().then(res => {
//     console.log(res);  
// }).catch(err =>{
//     console.log(err);
    
// })


// let book1 = new book({
//     title:'Gone girl',
//     price:399
// })
// book1.save().then(res => {
//     console.log(res);  
// }).catch(err =>{
//     console.log(err);
    
// })


// let book1 = new book({
//     title:'Gone girlsrtjwrysjfhnrtjyrj',
//     price:399
// })
// book1.save().then(res => {
//     console.log(res);  
// }).catch(err =>{
//     console.log(err);
    
// })


// let book1 = new book({
//     title:'marvel Comics',
//     price:-10
// })
// book1.save().then(res => {
//     console.log(res);  
// }).catch(err =>{
//     console.log(err);
    
// })

book.findByIdAndUpdate('67627a744d77463b7043b0f1',{price:-200},{runValidators:true}).then((res) => {
    console.log(res);
}).catch((err) =>{
    //console.log(err.errors);
    //console.log(err.errors.price);
    console.log(err.errors.price.properties);
    //console.log(err.errors.price.properties.message);
})

