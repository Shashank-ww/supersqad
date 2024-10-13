import { connectToDatabase } from '@/lib/mongodb'; // Ensure correct import path
import { NextResponse } from 'next/server';
import { ContactSchema } from '@/schemas/ContactSchema'; // Adjust import as necessary
import { ContactModel as Contact } from '@/lib/models/contact'; // Import the Mongoose model

// Define the handler for the POST request
export async function POST(req: Request) {
    try {
        // Parse and validate incoming request body using Zod schema
        const body = await req.json();
        const parsedData = ContactSchema.parse(body);

        // Ensure the MongoDB connection is established
        await connectToDatabase();

        // Insert parsed data into the "contacts" collection using Mongoose model
        const newContact = new Contact(parsedData);
        await newContact.save();

        // Send a success response back to the client
        return NextResponse.json({ success: true, message: 'Contact form submitted successfully!' });
    } catch (error: any) {
        // Log the error for debugging
        console.error('Error occurred:', error);

        // Send error response back to the client
        return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 400 });
    }
}
