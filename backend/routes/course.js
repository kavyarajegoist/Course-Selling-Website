const { Router } = require("express");
const { courseModel, purchaseModel } = require("../db");
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user");

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const courseId = req.body.courseId;

    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course does not exsist" });
    }


    const purchased = await purchaseModel.create({
      user_id: userId,
      course_id: courseId,
    });

    res.status(200).json({message:"Course purchased successfully.",purchaseId:purchased._id})


  } catch (err) {
    console.log(err);
    res.json({ message: "Internal Server Error" });
  }
});

courseRouter.get("/preview", async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.json({ courseData: courses });
  } catch (err) {
    console.log(err);
    res.json({ message: "Internal Server Error." });
  }
});

module.exports = {
  courseRouter,
};
