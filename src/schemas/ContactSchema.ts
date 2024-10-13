import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters long, like Dave"
  }),
  email: z.string().email({
    message: "Please enter a valid official email address"
  }),
  contact: z.string()
        .min(10, {
          message: "Contact is required (min 10 digits)"
        }).regex(/^\d+$/, "Contact must be numeric"),
  industry: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long"
  }),
});
