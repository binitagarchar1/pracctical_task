import mongoose, { Schema, Document } from 'mongoose';

export interface Job {
  title: string;
  location: string;
  industry: string;
  description: string;
}

export interface JobDocument extends Document, Job {}

const jobSchema: Schema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  industry: { type: String, required: true },
  description: { type: String, required: true }
});

const Job = mongoose.model<JobDocument>('Job', jobSchema);

export default Job;
