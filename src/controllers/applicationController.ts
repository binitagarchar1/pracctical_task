import { Request, Response, NextFunction } from 'express';
import Application from '../models/application';

const createApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { jobId, applicantName, email, coverLetter } = req.body;

    const application = new Application({ jobId, applicantName, email, coverLetter });
    await application.save();

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    next(error);
  }
};

const updateApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    application.status = status;
    await application.save();

    res.status(200).json({ message: 'Application updated successfully' });
  } catch (error) {
    next(error);
  }
};

export default { createApplication, updateApplication };
