"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const app = express_1.default();
app.get('/', (req, res) => {
    return res.send(`<h1 style='font-size: 36pt; color: blue; text-align: center; padding-top: 3rem;'>Hello, World!<h1/>`);
});
app
    .listen(process.env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
})
    .on('error', (error) => {
    console.log(error);
});
