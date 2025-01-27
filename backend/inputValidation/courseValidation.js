const zod = require("zod");

const titleSchema = zod.string();
const descriptionSchema = zod.string();
const imageUrlSchema = zod.string();
const priceSchema = zod.number();

const courseBody = zod.object({
  title:titleSchema,
  description: descriptionSchema,
  price:priceSchema,
  imageUrl:imageUrlSchema
})

module.exports = {
    courseBody
}