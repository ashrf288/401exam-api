const mongoose = require('mongoose');

const express = require('express');


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });




let CryptoSchema=mongoose.Schema({
    email:String,
    title:String,
     description:String,
      toUSD:Number, 
      image:String
       
})

let Crypto=mongoose.model('Crypto',CryptoSchema);



let addCrypto=(req,res)=>{
    let email=req.params.email;
    let data=req.body;
    let user=new Crypto({
        email:email,
        title:data.title,
        description:data.description,
         toUSD:data.toUSD, 
         image:data.image
    })
    user.save();
    res.json('added');
}

let getUserData=(req,res)=>{
    let email=req.params.email;
    Crypto.find({email:email}).then(result=>{
        res.json(result)
    })
    
}
let updateUserData=(req,res)=>{
    let id=req.params.id;
    let data=req.body;
    Crypto.findByIdAndUpdate(id,{$set:data},{new:true}).then(result=>{
        res.json({msg:'updated',res:result})
    })
}

let deleteUserData=(req,res)=>{
    let id=req.params.id;
     Crypto.findByIdAndDelete(id).then(result=>{
         if(result){res.send('delted ')}
         else{res.send('item with that id not found ')}
         
        }
         )
}




module.exports={addCrypto,getUserData,updateUserData,deleteUserData}