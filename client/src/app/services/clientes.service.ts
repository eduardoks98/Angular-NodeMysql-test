import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //API
  API_URL = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.API_URL}/clientes`);
  }

  getCliente(id: string) {
    return this.http.get(`${this.API_URL}/clientes/${id}`);
  }

  postCliente(game: Cliente) {
    return this.http.post(`${this.API_URL}/clientes`, game);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.API_URL}/clientes/${id}`);
  }

  putCliente(id: string | number, game: Cliente): Observable<any> {
    return this.http.put(`${this.API_URL}/clientes/${id}`, game);
  }



  //FormClientes
  //clienteForm: Cliente = new Cliente(); -- NAO ESTOU MAIS USANDO POR ENQUANTO
  //form modal
  clienteForm: any;
  //load cliente data
  clienteFB: FormGroup;
  //End FormClientes

  //ListClientes

  //End ListClientes
}
