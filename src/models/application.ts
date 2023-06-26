import mongoose, { Schema, Document } from 'mongoose';

export interface Application extends Document {
  jobId: string;
  applicantName: string;
  email: string;
  coverLetter: string;
  status: string;
}

const applicationSchema: Schema = new Schema({
  jobId: { type: String, required: true },
  applicantName: { type: String, required: true },
  email: { type: String, required: true },
  coverLetter: { type: String, required: true },
  status: { type: String, enum: ['pending', 'shortlisted', 'rejected', 'interviewed'], default: 'pending' }
});

export default mongoose.model<Application>('Application', applicationSchema);
