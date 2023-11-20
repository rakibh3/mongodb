"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.text());
app.use(express_1.default.json());
const router = express_1.default.Router();
app.use("/", router);
router.get("/api/v1/users/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User Created Succesfully",
        data: user,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res) => {
    console.log(req.query.email);
    res.send("Hello World Rakib Hasan and Jhora!");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Receive Data",
    });
});
exports.default = app;
