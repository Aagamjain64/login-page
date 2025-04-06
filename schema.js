const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Fixed Schema import

const newaccount= new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("User",newaccount)