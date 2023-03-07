const User=require('../module/Signupmodule')


const getAllproducts=async(req,res)=>{
    res.status(200).json({meg:"i am get all"})
}
const signup=async(req,res)=>{
    const{fullname,email,password}=req.body;
    console.log(fullname,email,password);

    if(!fullname|| !email || !password){
        return res.status(404).json({message:" required"});
    }
    try{
        const UserExist=await User.findOne({email:req.body.email});
        if(UserExist){
            //res.status(404);

            throw new Error("user already exists email");
        }
        else{
            const newuser=await User.create({
                fullname,
                email,
                password
            });
            if(newuser){
                return res.status(201).json({
                    _id:newuser.id,
                    fullname:newuser.fullname,
                    email:newuser.email,
                    password:newuser.password,
                });
            }
            }

        }catch (error){
            console.error(error);
            res.status(401).json({error:error.message});
        }
    };


module.exports={getAllproducts,signup};