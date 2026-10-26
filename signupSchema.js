const { z } = require("zod");

const signupSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  address: z.string().min(5),
  password: z.string().min(8),
  gender: z.enum(["Male", "Female", "Other"])
});

module.exports = signupSchema;