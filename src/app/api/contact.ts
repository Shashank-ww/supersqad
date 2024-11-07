//api/contact.ts for contact saving and not login purpose.


import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb'; // Your MongoDB connection helper
import { ContactModel } from '@/lib/models/contact'; // Use the named export

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            await connectToDatabase(); // Ensure MongoDB connection
            const { name, email, contact, industry, message } = req.body;

            // Create a new contact entry
            const newContact = new ContactModel({
                name,
                email,
                contact,
                industry,
                message,
            });

            await newContact.save();

            res.status(200).json({ success: "Form submitted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Something went wrong, please try again" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
