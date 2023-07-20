const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const MyDrivers = require('./db/MyDrivers');
// const Jwt = require('jsonwebtoken');
const app = express();

// const jwtKey='ecommm';

app.use(express.json());
app.use(cors());


app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    // result=result.toObject();
    // delete result.password;
    // Jwt.sign({result},jwtKey,{expiresIn:'2h'},(err,token)=>{
    //     if(err){
    //         res.send({result:'sww'})
    //     }
    //     res.send({result,auth:token});
    // })

    res.send({ result });

})

app.post("/mydriverslist", async (req, res) => {
    let myresult = new MyDrivers(req.body);
    let result = await myresult.save();
    // result=result.toObject();
    // delete result.password;
    // Jwt.sign({result},jwtKey,{expiresIn:'2h'},(err,token)=>{
    //     if(err){
    //         res.send({result:'sww'})
    //     }
    //     res.send({result,auth:token});
    // })

    res.send({ result });

})

app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {

            res.send({ user });
        } else {
            res.send({ result: "no user found" });
        }
    } else {
        res.send({ result: "oh plz" });
    }
})

// app.post('/add-product',verifyToken,async(req,res)=>{
//     let product=new Product(req.body);
//     let result=await product.save();
//     res.send(result);
// });

app.get('/mydrivers', async (req, res) => {
    const drivers = await MyDrivers.find();
    if (drivers.length > 0) {
        res.send(drivers);
    } else {
        res.send({ result: 'n p f' });
    }
})

// app.delete("/product/:id",verifyToken,async(req,res)=>{
//     let result=await Product.deleteOne({_id:req.params.id});
//     res.send(result);
// })
// app.get("/product/:id",async(req,res)=>{
//     let result=await Product.findOne({_id:req.params.id});
//     if(result){
//         res.send(result);
//     }else{
//         res.send({"ans":"saranghe"});
//     }
// });

// app.put('/product/:id',verifyToken,async(req,res)=>{
//     let result=await Product.updateOne(
//         {_id:req.params.id},
//         {$set:req.body}
//     )
//     res.send(result);    
// })

app.get('/search/:key', async (req, res) => {
    let result = await MyDrivers.find({

        where: { $regex: req.params.key },

    });
    res.send(result);
});

app.get('/search/:key/:key2', async (req, res) => {

    let a = req.params.key;
    let b = req.params.key2;

    if (b == 'x') {
        let result = await MyDrivers.find({

            where: { $regex: req.params.key },

        });
        res.send(result);
    } else if (a == 'x') {
        let result = await MyDrivers.find({

            to: { $regex: req.params.key2 },

        });
        res.send(result);
    } else {
        let result = await MyDrivers.find({


            where: { $regex: req.params.key },
            to: { $regex: req.params.key2 },



        });
        res.send(result);
    }



});



// function verifyToken(req,res,next){

//     console.log(req.headers['authorization']);
//     let token=req.headers['authorization'];
//     if(token){
//         token=token.split(' ')[1];
//         Jwt.verify(token,jwtKey,(err,valid)=>{
//             if(err){
//                 res.status(401).send({result:'p p a v t'});
//             }else{
//                 next();
//             }
//         })
//     }else{
//         res.status(402).send({result:' beneath p p a v t'});

//     }



// }



app.listen(5001);