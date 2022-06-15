"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("../src/app.js"));
const port = process.env.PORT || '4000';
app_js_1.default.listen(port, () => console.log(`Server is running 🚀 at: http://localhost:${port}`));
