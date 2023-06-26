"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || '';
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to the database');
})
    .catch((error) => {
    console.error('Error connecting to the database:', error);
});
// Routes
app.use('/users', userRoutes_1.default);
app.use('/jobs', jobRoutes_1.default);
app.use('/applications', applicationRoutes_1.default);
// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
