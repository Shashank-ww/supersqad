import mongoose, { Schema, Document } from 'mongoose';

interface Contact extends Document {
  name: string;
  email: string;
  contact: string;
  industry: string;
  message: string;
}

const ContactSchema = new Schema<Contact>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true, //make it false if you want this to be required as optional
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Check if the model exists already, otherwise create it
const ContactModel = mongoose.models.Contact || mongoose.model<Contact>('Contact', ContactSchema);

export { ContactModel };
