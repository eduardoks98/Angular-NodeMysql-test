import { Request, Response } from 'express';
import pool from '../database';

class ClienteController {

    public async list(req: Request, res: Response) {
        try {

            const clientes = await pool.query('SELECT * FROM clientes');
            res.json(clientes);
        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }

    }
    public async teste(req: Request, res: Response) {
       
        console.log(req.params);

    }

    public async getId(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const clientes = await pool.query("SELECT * FROM clientes WHERE cli_id = ?", [id]);
            if (clientes.length > 0) {
                //res.json({ message: 'Jogo encontrado!' });
                return res.json({ message: "Cliente encontrado", data: clientes[0] });
            }
            res.status(404).json({ message: 'Nenhum cliente encontrado!', data: null });
        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }

    }
    duplicateData(data: any): string {
        let result = "";
        for (let i = 0; i < data.length; i++) {

            result += data[i].cli_cpf == null ? data[i].cli_cnpj == null ? "NENHUM" : "CNPJ" : "CPF";
            if (data.length > 1 && i != data.length - 1) {
                result += " ";
            }
        }
        return result;
    }

    public async create(req: Request, res: Response): Promise<any> {
        //console.log(req.body.cli_nome);
        const body: any = req.body;
        try {
            //console.log(body.cli_cpf);
            const verify = await pool.query("SELECT * FROM clientes WHERE cli_cpf = ? or cli_cnpj = ?", [body.cli_cpf, body.cli_cnpj]);            //console.log(verify);
            //return res.json(verify);
            if (verify.length > 0) {
                //console.log(verify);
                if (verify[0].cli_cpf != null || verify[0].cli_cnpj != null) {
                    return res.status(400).json(
                        {
                            message: 'CPF/CNPJ já cadastrado!',
                            valid: false,
                            type: clientesController.duplicateData(verify),
                            data: verify
                        });
                }
            }

        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }
        try {
            await pool.query('INSERT INTO clientes set ?', [req.body]);
            res.json({ message: 'Criado!', valid: true });
        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }


    }

    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const body: any = req.body;
        try {
            //console.log(body.cli_cpf);
            const verify = await pool.query("SELECT * FROM clientes WHERE cli_cpf = ? or cli_cnpj = ?", [body.cli_cpf, body.cli_cnpj]);            //console.log(verify);
            //return res.json(verify);
            if (verify.length > 0) {
                //console.log(verify);
                if ((verify[0].cli_cpf != null || verify[0].cli_cnpj != null) && verify[0].cli_id != id) {
                    return res.status(400).json(
                        {
                            message: 'CPF/CNPJ já cadastrado!',
                            valid: false,
                            type: clientesController.duplicateData(verify),
                            data: verify
                        });
                }
            }

        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }
        try {
            await pool.query("UPDATE clientes set ? WHERE cli_id = ?", [req.body, id]);
            res.json({ message: 'Atualizado!', valid: true });
        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }

    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            await pool.query("DELETE FROM clientes WHERE cli_id = ?", [id]);
            res.json({ message: 'Deletado!' });
        } catch (e) {
            console.error('Error Occurred', e);
            res.json({ message: e });
        }

    }
}

const clientesController = new ClienteController();
export default clientesController;