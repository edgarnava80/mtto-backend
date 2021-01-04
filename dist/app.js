"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import morgan from "morgan"
const vehicleRoutes_1 = __importDefault(require("./routes/vehicleRoutes"));
const app = express_1.default();
//app.use(morgan("dev"))
app.use(body_parser_1.default.json());
app.use(express_1.default.static(`${__dirname}/public`));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/v1/vehicles", vehicleRoutes_1.default);
exports.default = app;
