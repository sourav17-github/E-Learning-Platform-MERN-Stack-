const { z } = require("zod");

const loginSchema = z.object({
    email : z
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invaild email address"})
    .min(3, {message:"Email must be at least of 3 charcters"})
    .max(255, {message:"Email must not be more than 255 charcters"}),
    password : z
    .string({required_error:"Password is required"})
    .min(7, {message:"Password must be at least of 3 charcters"})
    .max(1024, {message:"Password must not be more than 255 charcters"}),
});

//creating an object schema
const signupSchema = loginSchema.extend({
    username : z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"Name must be at least of 3 charcters"})
        .max(255, {message:"Name must not be more than 255 charcters"}),
   
    phone : z
        .string({required_error:"Phone is required"})
        .trim()
        .min(10, {message:"Phone must be at least of 3 charcters"})
        .max(20, {message:"Phone must not be more than 255 charcters"}),
  
});

module.exports = {signupSchema, loginSchema};
