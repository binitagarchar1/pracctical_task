"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const job_1 = __importDefault(require("../models/job"));
const searchJobs = async (req, res, next) => {
    try {
        const { title, location, industry, page, limit } = req.query;
        const filters = {};
        if (title)
            filters.title = title;
        if (location)
            filters.location = location;
        if (industry)
            filters.industry = industry;
        const pageNumber = parseInt(page) || 1;
        const pageSize = parseInt(limit) || 10;
        const skipCount = (pageNumber - 1) * pageSize;
        const jobs = await job_1.default.find(filters)
            .skip(skipCount)
            .limit(pageSize)
            .exec();
        res.status(200).json(jobs);
    }
    catch (error) {
        next(error);
    }
};
const createJob = async (req, res, next) => {
    try {
        const { title, location, industry, description } = req.body;
        const job = new job_1.default({ title, location, industry, description });
        await job.save();
        res.status(201).json({ message: 'Job created successfully' });
    }
    catch (error) {
        next(error);
    }
};
exports.default = { searchJobs, createJob };
