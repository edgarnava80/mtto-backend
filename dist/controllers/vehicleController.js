"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AllVehicles_1 = __importDefault(require("../AllVehicles"));
const vehicle_1 = __importDefault(require("../models/vehicle"));
const getAllVehicles = (req, res, next) => {
    res.status(200).json({
        status: "exito",
        results: AllVehicles_1.default.length,
        vehicles: AllVehicles_1.default
    });
};
const createVehicleManteinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const newVehicleManteinance = yield vehicle_1.default.create(req.body);
        res.status(201).json({
            status: "success",
            vehicleManteinance: newVehicleManteinance
        }); // 201 = Created
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    }
});
exports.default = { getAllVehicles, createVehicleManteinance };
