import { Component, HostBinding, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  clientes: any = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        console.log(res);
        this.clientes = res;
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


}
