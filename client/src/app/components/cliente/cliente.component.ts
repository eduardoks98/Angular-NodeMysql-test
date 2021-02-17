import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService:ClientesService) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente() {
    this.clienteService.getCliente("1").subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }


}
