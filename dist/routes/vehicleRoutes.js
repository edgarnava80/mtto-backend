"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const vehicleController_1 = __importDefault(require("../controllers/vehicleController"));
const router = express_1.default.Router();
router.route("/").get(vehicleController_1.default.getAllVehicles);
module.exports = router;
