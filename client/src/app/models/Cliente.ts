
export interface Cliente {
    cli_id?: number;
    cli_motoristas?: string;
    cli_motor_telefone?: number;
    cli_pj_cnpj?: string;
    cli_pj_razao_social?: string;
    cli_pj_telefone?: string;
    cli_pj_ie?: number;
    cli_pf_cpf?: number;
    cli_pf_data_nascimento?: number;
    cli_pj_responsavel?: string;
    cli_pj_resp_telefone?: number;
    cli_endereco?: string;
    cli_numero?: number;
    cli_complemento?: string;
    cli_bairro?: string;
    cli_cidade?: string;
    cli_estado?: number;
    cli_cep?: number;
    cli_status?: number;
    cli_date?: Date;
}
