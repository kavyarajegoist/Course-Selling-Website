const zod = require("zod");
const emailSchema = zod.string().email();
const passwordSchema  = zod.string()
.min(8, { message: "minLengthErrorMessage" })
.max(20, { message: "maxLengthErrorMessage" })
.refine((password) => /[A-Z]/.test(password), {
  message: "uppercaseErrorMessage",
})
.refine((password) => /[a-z]/.test(password), {
  message: 'lowercaseErrorMessage',
})
.refine((password) => /[0-9]/.test(password), { message: 'numberErrorMessage' })
.refine((password) => /[!@#$%^&*]/.test(password), {
  message: 'specialCharacterErrorMessage',
});

const firstnameSchema = zod.string();
const lastnameSchema = zod.string();


const requiredBody = zod.object({
    firstname:firstnameSchema,
    lastname: lastnameSchema,
    email: emailSchema,
    password: passwordSchema,
});



module.exports = {requiredBody};