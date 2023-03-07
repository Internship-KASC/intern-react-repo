require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const url=process.env.URL

const connectdb=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((result)=>{
        console.log("connection successfull");
    }).catch((err)=>{
        console.error(err.message);
    })
}

module.exports=connectdb;



// const connectdb = async (req, res) => {
//   try {
//     mongoose.set("strictQuery", true);
//     await mongoose.connect(process.env.MONGOOSE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(()=>{
//         console.log("Mongodb conected successfully !".america);
//     })
//     .catch((err)=>{
//       setTimeout(()=>{
//         console.error("no Internet "+err.message)});
//       },3000)
     
//   } catch (error) {
//     res.status(404).send({
//         message:"Db Connection failure"
//     })
  
//   }
// }
// module.exports= connectdb;
