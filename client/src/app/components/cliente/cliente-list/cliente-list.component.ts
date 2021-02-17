import { Component, HostBinding, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cli_id: any;

  clientes: any = [];

  preventSingleClick = false;
  timer: any;
  delay: Number;

  tipo: string;


  constructor(private clienteService: ClientesService,
    private router: Router,
    private modal: NgbModal) {

  }

  ngOnInit(): void {
    this.getClientes();
  }

  selectCliente(event, id, content) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    console.log(id);
    this.modal.open(content, { centered: true, size: "xl" })
    this.cli_id = id;
    //Navigate on double click
  }

  edit(id) {
    this.router.navigate(["clientes","edit",id]);
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        console.log(res);
        let newData = this.typeCliente(res);
        //console.log(newData);
        this.clientes = newData;
      },
      err => console.log(err)
    );
  }

  deleteGame(id: string) {
    this.clienteService.deleteCliente(id)
      .subscribe(
        res => {
          console.log(res);
          this.getClientes();
        },
        err => console.log(err)
      );
  }


  typeCliente(data) {
    let newData: any = [];
    data.forEach(element => {
      if (element.cli_cnpj == null && element.cli_cpf != null)
        element.cli_tipo = "CPF";
      if (element.cli_cpf == null && element.cli_cnpj != null)
        element.cli_tipo = "CNPJ";
      newData.push(element);
    });
    return newData;
  }

}
