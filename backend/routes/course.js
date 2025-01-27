const {Router}  = require("express");
const { courseModel } = require("../db");
const courseRouter = Router();
const {userMiddleware} = require("../middleware/user")

courseRouter.post("/purchase",(req,res)=>{
    const userId = req.userId;
    const courseId = req.courseId;
})

courseRouter.get("/preview",async(req,res)=>{
    try{
        const courses = await courseModel.find();
        res.json({courseData:courses});
    }
    catch(err)
    {
        console.log(err);
        res.json({message:"Internal Server Error."});
    }
});

module.exports = {
    courseRouter
}