"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clienteController_1.default.list);
        this.router.get('/:id', clienteController_1.default.getId);
        this.router.get('/:teste/:data', clienteController_1.default.teste);
        this.router.post('/', clienteController_1.default.create);
        this.router.delete('/:id', clienteController_1.default.delete);
        this.router.put('/:id', clienteController_1.default.update);
    }
}
const gamesRoutes = new ClienteRoutes();
exports.default = gamesRoutes.router;
