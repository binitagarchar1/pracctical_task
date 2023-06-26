import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  role: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['jobSeeker', 'employer'], required: true }
});

export default mongoose.model<User>('User', userSchema);
