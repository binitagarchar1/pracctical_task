import { Request, Response, NextFunction } from 'express';
import Job, { JobDocument } from '../models/job';

const searchJobs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, location, industry, page, limit } = req.query;

    const filters: any = {};

    if (title) filters.title = title as string;
    if (location) filters.location = location as string;
    if (industry) filters.industry = industry as string;

    const pageNumber = parseInt(page as string) || 1;
    const pageSize = parseInt(limit as string) || 10;

    const skipCount = (pageNumber - 1) * pageSize;

    const jobs = await Job.find(filters)
      .skip(skipCount)
      .limit(pageSize)
      .exec();

    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

const createJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, location, industry, description } = req.body;

    const job = new Job({ title, location, industry, description });
    await job.save();

    res.status(201).json({ message: 'Job created successfully' });
  } catch (error) {
    next(error);
  }
};

export default { searchJobs, createJob };
