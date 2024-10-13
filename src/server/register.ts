"use server"

import { RegisterSchema } from "@/schemas"
import { z } from "zod"
import bcrypt from "bcrypt"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid Field Entry!"}
    };

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use! Try another"}
    }

    await db.user.create ({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    return {success: "Account Registered Successfully!"};
// console.log(values)
}