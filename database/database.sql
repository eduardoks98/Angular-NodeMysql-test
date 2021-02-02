CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game to games;

CREATE TABLE clientes(
    cli_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cli_cnpj INT(11),
    cli_motorista VARCHAR(255),
    cli_motor_telefone INT(11),
    cli_pj_razao_social	VARCHAR(255),
    cli_pj_telefone	INT(11),
    cli_pj_ie INT(11),
    cli_cpf	INT(11),
    cli_pf_data_nascimento INT(11),
    cli_pj_responsavel VARCHAR(255),	
    cli_pj_resp_telefone INT(11),
    cli_endereco VARCHAR(255),
    cli_numero INT(11),
    cli_complemento VARCHAR(255),
    cli_bairro VARCHAR(255),
    cli_cidade VARCHAR(255),
    cli_estado VARCHAR(255),	
    cli_cep INT(11),
    cli_status VARCHAR(255),
    cli_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE clientes_log(
    log_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    log_cli_id INT(11),
    log_cli_cnpj INT(11),
    log_cli_motorista VARCHAR(255),
    log_cli_motor_telefone INT(11),
    log_cli_pj_razao_social	VARCHAR(255),
    log_cli_pj_telefone	INT(11),
    log_cli_pj_ie INT(11),
    log_cli_cpf	INT(11),
    log_cli_pf_data_nascimento INT(11),
    log_cli_pj_responsavel VARCHAR(255),	
    log_cli_pj_resp_telefone INT(11),
    log_cli_endereco VARCHAR(255),
    log_cli_numero INT(11),
    log_cli_complemento VARCHAR(255),
    log_cli_bairro VARCHAR(255),
    log_cli_cidade VARCHAR(255),
    log_cli_estado VARCHAR(255),	
    log_cli_cep INT(11),
    log_cli_status VARCHAR(255),
    log_cli_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
DESCRIBE games;