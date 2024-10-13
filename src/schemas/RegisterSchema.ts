import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(4, {
    message: "Enter your name (minimum 4 characters)"
  }),
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters"
  }),
});
