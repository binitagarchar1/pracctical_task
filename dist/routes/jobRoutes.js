"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobController_1 = __importDefault(require("../controllers/jobController"));
const router = express_1.default.Router();
router.get('/getJob', jobController_1.default.searchJobs);
router.post('/createJob', jobController_1.default.createJob);
exports.default = router;
