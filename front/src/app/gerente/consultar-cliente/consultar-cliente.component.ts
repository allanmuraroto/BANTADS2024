import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {
  nome: string = 'João da Silva';
  cpf: string = '123.456.789-10';
  email: string = 'joao@example.com';
  salario: number = 2500;
  numeroConta: string = '123456789';
  saldo: number = 1500;
  status: string = 'Ativo';
  limite: number = 500;
  dataAbertura: string = '01/01/2022';
  estado: string = 'São Paulo';
  cidade: string = 'São Paulo';
  cep: string = '12345-678';
  logradouro: string = 'Rua Exemplo';
  numero: string = '123';
  tipo: string = 'Residencial';
}
