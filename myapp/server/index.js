const express=require('express')
const app=express()

app.post('/login',(res,req)=>{
    res.status(200).send("Wlcome");
})


app.listen(5000,()=>{
    console.log('server is work')
})