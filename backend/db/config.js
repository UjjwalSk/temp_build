const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/takemetoo',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
