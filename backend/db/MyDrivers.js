const mongoose=require('mongoose');
const myDriverSchema=new mongoose.Schema({
    email:String,
    where:String,
    userid:String,
    to:String,
});

module.exports=mongoose.model("drivers",myDriverSchema);