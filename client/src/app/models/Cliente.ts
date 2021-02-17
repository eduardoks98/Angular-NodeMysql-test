import { Motorista } from "./Motorista";
import { Veiculo } from "./Veiculo";

export class Cliente {
    cli_id?: number;
    cli_cnpj?: string;
    cli_pj_razao_social?: string;
    cli_pj_telefone?: string;
    cli_pj_ie?: string;
    cli_pj_responsavel?: string;
    cli_pj_resp_telefone?: string;
    cli_cpf?: string;
    cli_pf_nome?: string;
    cli_pf_telefone?: string;
    cli_pf_data_nascimento?: string;
    cli_endereco?: string;
    cli_numero?: string;
    cli_complemento?: string;
    cli_bairro?: string;
    cli_cidade?: string;
    cli_estado?: string;
    cli_cep?: string;
    cli_status?: number;
    cli_date?: Date;
    cli_motoristas?: Motorista;
    cli_veiculos?: Veiculo;

    constructor() { }

    reset() {
        this.cli_id = null;
        this.cli_cnpj = null;
        this.cli_pj_razao_social = null;
        this.cli_pj_telefone = null;
        this.cli_pj_ie = null;
        this.cli_pj_responsavel = null;
        this.cli_pj_resp_telefone = null;
        this.cli_cpf = null;
        this.cli_pf_nome = null;
        this.cli_pf_telefone = null;
        this.cli_pf_data_nascimento = null;
        this.cli_endereco = null;
        this.cli_numero = null;
        this.cli_complemento = null;
        this.cli_bairro = null;
        this.cli_cidade = null;
        this.cli_estado = null;
        this.cli_cep = null;
        this.cli_status = null;
        this.cli_date = null;
        this.cli_motoristas = null;
        this.cli_veiculos = null;
    }

    setCliente(data: any) {
        let cli = data.data;
        this.cli_id = cli.cli_id;
        this.cli_cnpj = cli.cli_cnpj;
        this.cli_pj_razao_social = cli.cli_pj_razao_social;
        this.cli_pj_telefone = cli.cli_pj_telefone;
        this.cli_pj_ie = cli.cli_pj_ie;
        this.cli_pj_responsavel = cli.cli_pj_responsavel;
        this.cli_pj_resp_telefone = cli.cli_pj_resp_telefone;
        this.cli_cpf = cli.cli_cpf;
        this.cli_pf_nome = cli.cli_pf_nome;
        this.cli_pf_telefone = cli.cli_pf_telefone;
        this.cli_pf_data_nascimento = cli.cli_pf_data_nascimento;
        this.cli_endereco = cli.cli_endereco;
        this.cli_numero = cli.cli_numero;
        this.cli_complemento = cli.cli_complemento;
        this.cli_bairro = cli.cli_bairro;
        this.cli_cidade = cli.cli_cidade;
        this.cli_estado = cli.cli_estado;
        this.cli_cep = cli.cli_cep;
        this.cli_status = cli.cli_status;
        this.cli_date = cli.cli_date;
        this.cli_motoristas = null;
        this.cli_veiculos = null;
    }

}
