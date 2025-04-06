const express = require('express')
const app = express()
const ejsmate = require('ejs-mate');
const mongoose=require("mongoose")
const port = 3000
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine("ejs", ejsmate);
const User= require("./model/schema.js"); 
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
const mongo_url = "mongodb://127.0.0.1:27017/account";

async function main(){
    await mongoose.connect(mongo_url);
    console.log("database connection succesfully");
    

}
main()
    .then(()=>console.log("mongodb connection successfully"))
    .catch((err)=>console.log("mongodb connection failed",err));
    
app.get('/', (req, res) => {
  res.render("main.ejs");
})

app.post('/login',async(req,res)=>{
    try{

        console.log(req.body);
        const data = new User(req.body);
        await data.save()
        res.send("done")
        
    }
catch(err)
{
    console.error(err);
    
}
})

app.listen(port, () => {
  console.log(`server connection is done ${port}`)
})
