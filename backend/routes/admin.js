const {Router} = require("express");
const bcrypt = require("bcrypt");
const adminRouter = Router();
const saltRound = 10;
const {requiredBody} = require("../inputValidation/inputSchema");
const {JWT_ADMIN_PASSWORD} = require("../config");
const jwt = require("jsonwebtoken");
const {adminModel,courseModel} = require("../db");
const {adminMiddleware} = require("../middleware/admin")
const{courseBody} = require("../inputValidation/courseValidation")

adminRouter.post("/signup",async(req,res)=>{
    const parseData = requiredBody.safeParse(req.body);
        
    if(!parseData.success)
    {
            res.json({message :"Invalid Input formats"});
    }

    else{
            const email = req.body.email;
            const password = req.body.password;
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;

            try
            {
           const hashPassword = bcrypt.hashSync(password,saltRound);
            await adminModel.create({
                    email:email,
                    password:hashPassword,
                    firstname:firstname,
                    lastname:lastname

            }) ;
            res.json({message:"Sign-up successfully."})
            }
            catch(err){
                    console.log(err);
            }
    }
})

adminRouter.post("/signin", async(req,res)=>{
    try {
        const {email,password} = req.body;
        
        const user = await adminModel.findOne({email});
        console.log(user)
        if(!user)
        {
                res.json({message:"User doesn't exsist"});
        }

        const isValid = await bcrypt.compare(password,user.password);

        if(email!==user.email||!isValid)
                res.json({message:"Incorret email or password"})

        const token = jwt.sign({id:user._id},JWT_ADMIN_PASSWORD,{expiresIn:'24h'});

        res.json({message:"Sign-in successfully",
                token
        })
        
       } catch (error) {
                res.json({message:"Internal Server Error"});
       }
})

adminRouter.post("/course",adminMiddleware,async(req,res)=>{
    try {
        const adminId = req.adminId;

        const parseData = courseBody.safeParse(req.body);

        if(!parseData.success)
        {
           res.json({message:"Invalid Input Format"})
        }

        else{
        const {title,description,price,imageUrl} = req.body;

        const course = await courseModel.create({
                    title:title,
                    description:description,
                    price:price,
                    imageUrl:imageUrl,
                    creator_id:adminId
                })

        res.json({message:"Course created successfully.",courseId: course._id})
    }
        
    } catch (err) {
        res.json("Internal server error.")
    }
})

adminRouter.put("/coures",(req,res)=>{
   
})

adminRouter.get("/course/bulk",adminMiddleware,async(req,res)=>{
    const adminId = req.adminId;
    try{
        const courses = await courseModel.find({creator_id:adminId});
        console.log(courses)
        res.json({message:"Your all created coursed",
            courses
        })
    }
    catch(err)
    {
        console.log(err);
        res.json({message:"Internal Server Error"
        })
    }
})

module.exports = {
    adminRouter
}
