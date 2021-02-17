import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  //Input para carregar cliente selecionado no Cliente_List.component
  @Input() cli_id?: string;
  clienteForm: Cliente = new Cliente();

  //Forms
  clienteFB: FormGroup;

  constructor(
    private sCliente: ClientesService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    //this.newForm();
    this.pageLoaded();
    
  }

  pageLoaded() {
    if (this.cli_id == null) {
      this.clienteForm.reset();
    } else {
      this.getCliente(this.cli_id);
    }
  }

  getCliente(id) {
    this.sCliente.getCliente(id).subscribe(
      res => {
        this.clienteForm.setCliente(res as any);
        this.loadCliente(res as any);
      },
      err => console.log(err)
    );
  }


  //form
  newForm() {
    this.clienteFB = this.fb.group({
      cli_id: null,
      cli_cnpj: null,
      cli_pj_razao_social: null,
      cli_pj_telefone: null,
      cli_pj_ie: null,
      cli_pj_responsavel: null,
      cli_pj_resp_telefone: null,
      cli_cpf: null,
      cli_pf_nome: null,
      cli_pf_telefone: null,
      cli_pf_data_nascimento: null,
      cli_endereco: null,
      cli_numero: null,
      cli_complemento: null,
      cli_bairro: null,
      cli_cidade: null,
      cli_estado: null,
      cli_cep: null,
      cli_status: null,
      cli_date: null,
      cli_motoristas: null,
      cli_veiculos: null
    });
  }

  loadCliente(data){
    let cli = data.data;
    this.clienteFB = this.fb.group({
      cli_id: cli.cli_id,
      cli_cnpj: cli.cli_cnpj,
      cli_pj_razao_social: cli.cli_pj_razao_social,
      cli_pj_telefone: cli.cli_pj_telefone,
      cli_pj_ie: cli.cli_pj_ie,
      cli_pj_responsavel: cli.cli_pj_responsavel,
      cli_pj_resp_telefone: cli.cli_pj_resp_telefone,
      cli_cpf: cli.cli_cpf,
      cli_pf_nome: cli.cli_pf_nome,
      cli_pf_telefone: cli.cli_pf_telefone,
      cli_pf_data_nascimento: cli.cli_pf_data_nascimento,
      cli_endereco: cli.cli_endereco,
      cli_numero: cli.cli_numero,
      cli_complemento: cli.cli_complemento,
      cli_bairro: cli.cli_bairro,
      cli_cidade: cli.cli_cidade,
      cli_estado: cli.cli_estado,
      cli_cep: cli.cli_cep,
      cli_status: cli.cli_status,
      cli_date: cli.cli_date,
      cli_motoristas: cli.cli_motoristas,
      cli_veiculos: cli.cli_veiculos
    });
    console.log(this.clienteFB.value);
  }
}
