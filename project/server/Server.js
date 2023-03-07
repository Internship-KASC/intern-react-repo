require('dotenv').config();
const express = require("express");
const app=express();
const product=require("./routes/logregister")
const bodyparser=require("body-parser");
const connect=require("./database/dbConn");
const PORT=process.env.PORT;

app.use(bodyparser.json({limit:"50mb"}));
app.use(bodyparser.urlencoded({extended:true,limit:"50mb"}));

const cors=require("cors");
const corsOptions=require("./config/corsOptions");
const credential=require("./middleware/credential");


//cors operation
app.use(credential);
app.use(cors(corsOptions));


// app.get("/",(req,res)=>{
//     res.send("hai,I am live");

// });

//middleware or set router
app.use(bodyparser.json({limit:"50mb"}));
app.use(bodyparser.urlencoded({extended:true,limit:true}));

//router
app.use("/api",product)

//databaseconnection 
connect();
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`port ${PORT} server connect`);
})