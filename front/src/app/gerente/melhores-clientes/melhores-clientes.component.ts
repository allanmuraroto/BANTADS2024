import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Pessoa {
  cpf: string;
  nome: string;
  email: string;
  salario: number;
  saldo: number;
  cidade: string;
  estado: string;
}

@Component({
  selector: 'app-melhores-clientes',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './melhores-clientes.component.html',
  styleUrl: './melhores-clientes.component.css'
})
export class MelhoresClientesComponent {

  pessoas: Pessoa[] = [
    {
      cpf: '123.456.789-10',
      nome: 'João da Silva',
      email: 'joao@example.com',
      salario: 2500,
      saldo: 1500,
      cidade: 'São Paulo',
      estado: 'SP'
    },
    {
      cpf: '987.654.321-00',
      nome: 'Maria Oliveira',
      email: 'maria@example.com',
      salario: 3000,
      saldo: 2000,
      cidade: 'Rio de Janeiro',
      estado: 'RJ'
    }
  ];
}
