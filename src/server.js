"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, resp) => {
    console.log("ACESSANDO");
    return resp.json([
        { id: 1, name: "Anúncio1" },
        { id: 1, name: "Anúncio1" },
        { id: 1, name: "Anúncio1" },
    ]);
});
app.listen(3333);
