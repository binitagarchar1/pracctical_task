"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationController_1 = __importDefault(require("../controllers/applicationController"));
const router = express_1.default.Router();
router.post('/createApp', applicationController_1.default.createApplication);
router.post('/updateApp', applicationController_1.default.updateApplication);
exports.default = router;
