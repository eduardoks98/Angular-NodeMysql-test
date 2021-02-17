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

--SODIESEL
CREATE TABLE clientes(
    cli_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cli_cnpj VARCHAR(255),
    cli_pj_razao_social	VARCHAR(255),
    cli_pj_telefone	VARCHAR(255),
    cli_pj_ie VARCHAR(255),
    cli_pj_responsavel VARCHAR(255),	
    cli_pj_resp_telefone VARCHAR(255),
    cli_cpf	VARCHAR(255),
    cli_pf_nome VARCHAR(255),
    cli_pf_telefone VARCHAR(255),
    cli_pf_data_nascimento VARCHAR(255),
    cli_endereco VARCHAR(255),
    cli_numero VARCHAR(255),
    cli_complemento VARCHAR(255),
    cli_bairro VARCHAR(255),
    cli_cidade VARCHAR(255),
    cli_estado VARCHAR(255),	
    cli_cep VARCHAR(255),
    cli_status VARCHAR(255),
    cli_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motoristas(
    mot_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mot_cli_id INT(11) NOT NULL ,
    mot_nome VARCHAR(255),
    mot_telefone VARCHAR(255),
    CONSTRAINT fk_cli_mot FOREIGN KEY (mot_cli_id) REFERENCES clientes (cli_id)
);
CREATE TABLE veiculos(
    vei_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    vei_cli_id INT(11) NOT NULL,
    vei_placa VARCHAR(255),
    vei_veiculo VARCHAR(255),
    CONSTRAINT fk_cli_vei FOREIGN KEY (vei_cli_id) REFERENCES clientes (cli_id)
);

CREATE TABLE log_clientes(
    log_cli_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    log_cli_cnpj VARCHAR(255),
    log_cli_pj_razao_social	VARCHAR(255),
    log_cli_pj_telefone	VARCHAR(255),
    log_cli_pj_ie VARCHAR(255),
    log_cli_pj_responsavel VARCHAR(255),	
    log_cli_pj_resp_telefone VARCHAR(255),
    log_cli_cpf	VARCHAR(255),
    log_cli_pf_nome VARCHAR(255),
    log_cli_pf_telefone VARCHAR(255),
    log_cli_pf_data_nascimento VARCHAR(255),
    log_cli_endereco VARCHAR(255),
    log_cli_numero VARCHAR(255),
    log_cli_complemento VARCHAR(255),
    log_cli_bairro VARCHAR(255),
    log_cli_cidade VARCHAR(255),
    log_cli_estado VARCHAR(255),	
    log_cli_cep VARCHAR(255),
    log_cli_status VARCHAR(255),
    log_cli_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE log_motoristas(
    log_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    log_mot_id INT(11) NOT NULL,
    log_mot_cli_id INT(11),
    log_mot_nome VARCHAR(255),
    log_mot_telefone VARCHAR(255),
    CONSTRAINT log_fk_cli_mot FOREIGN KEY (log_mot_cli_id) REFERENCES log_clientes (cli_id)
);
CREATE TABLE log_veiculos(
    log_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    log_vei_id INT(11) NOT NULL,
    log_vei_cli_id INT(11),
    log_vei_placa VARCHAR(255),
    log_vei_veiculo VARCHAR(255),
    CONSTRAINT log_fk_cli_vei FOREIGN KEY (log_vei_cli_id) REFERENCES log_clientes (cli_id)
);