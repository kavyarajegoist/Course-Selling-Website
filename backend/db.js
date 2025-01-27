const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Object_Id = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email:{type:String,unique:true},
    password: String,
    firstname:String,
    lastname:String,

});

const adminSchema = new Schema({ name:String,
    email:{type:String,unique:true},
    password: String,
    firstname:String,
    lastname:String
});

const courseSchema = new Schema({
    title:{type:String, unique:true},
    description:String,
    price: Number,
    imageUrl: String,
    creator_id: Object_Id

})

const purchasesSchema = new Schema({
    user_id: Object_Id,
    course_id: Object_Id
});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("courses",courseSchema);
const purchaseModel = mongoose.model("purchase",purchasesSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};