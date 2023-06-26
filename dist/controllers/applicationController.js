"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = __importDefault(require("../models/application"));
const createApplication = async (req, res, next) => {
    try {
        const { jobId, applicantName, email, coverLetter } = req.body;
        const application = new application_1.default({ jobId, applicantName, email, coverLetter });
        await application.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    }
    catch (error) {
        next(error);
    }
};
const updateApplication = async (req, res, next) => {
    try {
        const { id, status } = req.body;
        const application = await application_1.default.findById(id);
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }
        application.status = status;
        await application.save();
        res.status(200).json({ message: 'Application updated successfully' });
    }
    catch (error) {
        next(error);
    }
};
exports.default = { createApplication, updateApplication };
