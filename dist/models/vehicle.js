"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vehicleSchema = new mongoose_1.default.Schema({
    person: {
        type: String,
        required: [true, "Please provide your full name."]
    },
    deliveryDate: {
        type: Date,
        required: [true, "Please provide a valid date."]
    },
    vehicleId: {
        type: Number,
        required: [true, "The vehicle id must be provided."]
    }
});
const Vehicle = mongoose_1.default.model("Vehicle", vehicleSchema);
exports.default = Vehicle;
