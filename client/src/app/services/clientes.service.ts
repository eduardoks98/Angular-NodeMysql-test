import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

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

  //stored selected cliente
  selectedCliente: any;
}
