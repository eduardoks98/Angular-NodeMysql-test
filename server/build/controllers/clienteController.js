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
const database_1 = __importDefault(require("../database"));
class ClienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield database_1.default.query('SELECT * FROM clientes');
                res.json(clientes);
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
        });
    }
    teste(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
        });
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const clientes = yield database_1.default.query("SELECT * FROM clientes WHERE cli_id = ?", [id]);
                if (clientes.length > 0) {
                    //res.json({ message: 'Jogo encontrado!' });
                    return res.json({ message: "Cliente encontrado", data: clientes[0] });
                }
                res.status(404).json({ message: 'Nenhum cliente encontrado!', data: null });
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
        });
    }
    duplicateData(data) {
        let result = "";
        for (let i = 0; i < data.length; i++) {
            result += data[i].cli_cpf == null ? data[i].cli_cnpj == null ? "NENHUM" : "CNPJ" : "CPF";
            if (data.length > 1 && i != data.length - 1) {
                result += " ";
            }
        }
        return result;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body.cli_nome);
            const body = req.body;
            try {
                //console.log(body.cli_cpf);
                const verify = yield database_1.default.query("SELECT * FROM clientes WHERE cli_cpf = ? or cli_cnpj = ?", [body.cli_cpf, body.cli_cnpj]); //console.log(verify);
                //return res.json(verify);
                if (verify.length > 0) {
                    //console.log(verify);
                    if (verify[0].cli_cpf != null || verify[0].cli_cnpj != null) {
                        return res.status(400).json({
                            message: 'CPF/CNPJ já cadastrado!',
                            valid: false,
                            type: clientesController.duplicateData(verify),
                            data: verify
                        });
                    }
                }
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
            try {
                yield database_1.default.query('INSERT INTO clientes set ?', [req.body]);
                res.json({ message: 'Criado!', valid: true });
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const body = req.body;
            try {
                //console.log(body.cli_cpf);
                const verify = yield database_1.default.query("SELECT * FROM clientes WHERE cli_cpf = ? or cli_cnpj = ?", [body.cli_cpf, body.cli_cnpj]); //console.log(verify);
                //return res.json(verify);
                if (verify.length > 0) {
                    //console.log(verify);
                    if ((verify[0].cli_cpf != null || verify[0].cli_cnpj != null) && verify[0].cli_id != id) {
                        return res.status(400).json({
                            message: 'CPF/CNPJ já cadastrado!',
                            valid: false,
                            type: clientesController.duplicateData(verify),
                            data: verify
                        });
                    }
                }
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
            try {
                yield database_1.default.query("UPDATE clientes set ? WHERE cli_id = ?", [req.body, id]);
                res.json({ message: 'Atualizado!', valid: true });
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query("DELETE FROM clientes WHERE cli_id = ?", [id]);
                res.json({ message: 'Deletado!' });
            }
            catch (e) {
                console.error('Error Occurred', e);
                res.json({ message: e });
            }
        });
    }
}
const clientesController = new ClienteController();
exports.default = clientesController;
