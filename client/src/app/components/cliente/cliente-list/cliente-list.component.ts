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

  //all clientes
  clientes: any = [];
  //subtables rows
  cliente_show: ViewCliente[] = [];
  //preview what row can display more data
  cliente_preview: ViewCliente[] = [];

  //cliente id when double click row on table
  cli_id: any;

  //for double clikc in row of table
  preventSingleClick = false;
  timer: any;
  delay: Number;

  constructor(private s_cli: ClientesService,
    private router: Router,
    private modal: NgbModal) {

  }

  ngOnInit(): void {
    this.getClientes();
  }

  selectCliente(event, id, content) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    //console.log(id);
    this.s_cli.clienteForm = this.modal.open(content, { centered: true, size: "xl" })
    this.cli_id = id;
    //Navigate on double click
  }

  // edit(id) {
  //   this.router.navigate(["clientes", "edit", id]);
  // }

  getClientes() {
    this.s_cli.getClientes().subscribe(
      res => {
        //console.log(res);
        let newData = this.typeCliente(res);
        this.hideDataCli(newData);
        this.previewDataShow(newData);
        //console.log(newData);
        this.clientes = newData;


        //console.log(this.clientes);
      },
      err => console.log(err)
    );
  }

  deleteGame(id: string) {
    this.s_cli.deleteCliente(id)
      .subscribe(
        res => {
          console.log(res);
          this.getClientes();
        },
        err => console.log(err)
      );
  }



  //check if the cliente is CPF/CNPJ
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

  //Hide subrows of clientes
  hideDataCli(data) {
    this.cliente_show = [];
    data.forEach((element, index) => {
      this.cliente_show.push({
        "view_id": index,
        "view_show": false,
        "view_mot": false,
        "view_vei": false
      });
    });
  }

  //show subrows of clientes
  showDataCli(id, tipo) {
    this.preventSingleClick = false;
    const delay = 200;
    this.timer = setTimeout(() => {
      if (!this.preventSingleClick) {
        //Navigate on single click
        console.log("CLICK");

        let cli_show = this.cliente_show.filter(cli => cli.view_id == id)[0];
        let cli_cliente = this.clientes.filter(cli => cli.cli_id == id)[0];
        //console.log(cli_cliente);
        //console.log(cli_show);
        if (tipo == 1) {
          if (cli_cliente.cli_motoristas.length == 0 && cli_cliente.cli_veiculos.length == 0) {
            return;
          }
          if (this.cliente_show[cli_show.view_id].view_show)
            this.cliente_show[cli_show.view_id].view_show = false;
          else
            this.cliente_show[cli_show.view_id].view_show = true;
        } else if (tipo == 2) {
          if (cli_cliente.cli_motoristas.length == 0) {
            return;
          }
          if (this.cliente_show[cli_show.view_id].view_mot)
            this.cliente_show[cli_show.view_id].view_mot = false;
          else
            this.cliente_show[cli_show.view_id].view_mot = true;
        } else if (tipo == 3) {
          if (cli_cliente.cli_veiculos.length == 0) {
            return;
          }
          if (this.cliente_show[cli_show.view_id].view_vei)
            this.cliente_show[cli_show.view_id].view_vei = false;
          else
            this.cliente_show[cli_show.view_id].view_vei = true;
        }
      }
    }, delay);
  }

  //view if cliente has data to show
  previewDataShow(data) {
    data.forEach((element) => {
      let show = null;
      let mot = null;
      let vei = null
      if (element.cli_motoristas.length == 0 && element.cli_veiculos.length == 0) {
        show = false;
        mot = false;
        vei = false;
      }
      if (element.cli_motoristas.length != 0) {
        show = true;
        mot = true;
      }
      if (element.cli_veiculos.length != 0) {
        show = true;
        vei = true;
      }

      this.cliente_preview[element.cli_id] = {
        "view_id": element.cli_id,
        "view_show": show,
        "view_mot": mot,
        "view_vei": vei
      };
    });
  }
}

//Class for open subtables rows
export interface ViewCliente {
  view_id?: number;
  view_show?: boolean;
  view_mot?: boolean;
  view_vei?: boolean;
}