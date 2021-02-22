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
                const motoristas = yield database_1.default.query('SELECT * FROM motoristas');
                const veiculos = yield database_1.default.query('SELECT * FROM veiculos');
                let newCliente = [];
                let newMotorista = [];
                let newVeiculo = [];
                clientes.forEach((data, index) => {
                    newMotorista = [];
                    newVeiculo = [];
                    newCliente.push({
                        "cli_id": data.cli_id,
                        "cli_cnpj": data.cli_cnpj,
                        "cli_pj_razao_social": data.cli_pj_razao_social,
                        "cli_pj_telefone": data.cli_pj_telefone,
                        "cli_pj_ie": data.cli_pj_ie,
                        "cli_pj_responsavel": data.cli_pj_responsavel,
                        "cli_pj_resp_telefone": data.cli_pj_resp_telefone,
                        "cli_cpf": data.cli_cpf,
                        "cli_pf_nome": data.cli_pf_nome,
                        "cli_pf_telefone": data.cli_pf_telefone,
                        "cli_pf_data_nascimento": data.cli_pf_data_nascimento,
                        "cli_endereco": data.cli_endereco,
                        "cli_numero": data.cli_numero,
                        "cli_complemento": data.cli_complemento,
                        "cli_bairro": data.cli_bairro,
                        "cli_cidade": data.cli_cidade,
                        "cli_estado": data.cli_estado,
                        "cli_cep": data.cli_cep,
                        "cli_status": data.cli_status,
                        "cli_date": data.cli_date,
                        "cli_motoristas": [],
                        "cli_veiculos": [],
                    });
                    //console.log(newCliente);
                    motoristas.forEach((element) => {
                        //console.log(element);
                        if (element.mot_cli_id == newCliente[index].cli_id) {
                            newMotorista.push({
                                "mot_id": element.mot_id,
                                "mot_cli_id": element.mot_cli_id,
                                "mot_nome": element.mot_nome,
                                "mot_telefone": element.mot_telefone
                            });
                        }
                    });
                    veiculos.forEach((element) => {
                        //console.log(element);
                        if (element.vei_cli_id == newCliente[index].cli_id) {
                            newVeiculo.push({
                                "vei_id": element.vei_id,
                                "vei_cli_id": element.vei_cli_id,
                                "vei_placa": element.vei_placa,
                                "vei_veiculo": element.vei_veiculo
                            });
                        }
                    });
                    newCliente[index].cli_motoristas = newMotorista;
                    newCliente[index].cli_veiculos = newVeiculo;
                });
                //console.log(newCliente);
                res.json(newCliente);
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
                const clientes = yield database_1.default.query("SELECT c.*, JSON_ARRAYAGG(JSON_OBJECT('mot_id', m.mot_id, 'mot_cli_id', m.mot_cli_id, 'mot_nome', m.mot_nome,'mot_telefone', m.mot_telefone)) cli_motoristas, JSON_ARRAYAGG(JSON_OBJECT('vei_id', v.vei_id, 'vei_cli_id', v.vei_cli_id, 'vei_placa', v.vei_placa,'vei_veiculo', v.vei_veiculo)) cli_veiculos FROM clientes c LEFT JOIN motoristas m ON m.mot_cli_id =c.cli_id LEFT JOIN veiculos v ON v.vei_cli_id=c.cli_id where c.cli_id=?", [id]);
                if (clientes.length > 0) {
                    //res.json({ message: 'Jogo encontrado!' });
                    //console.log(clientes);
                    clientes[0].cli_motoristas = JSON.parse(clientes[0].cli_motoristas);
                    if (clientes[0].cli_motoristas[0].mot_id == null) {
                        clientes[0].cli_motoristas = null;
                    }
                    clientes[0].cli_veiculos = JSON.parse(clientes[0].cli_veiculos);
                    if (clientes[0].cli_veiculos[0].vei_id == null) {
                        clientes[0].cli_veiculos = null;
                    }
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
