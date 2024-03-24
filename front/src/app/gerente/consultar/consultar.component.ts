import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  clientes: any[] = [
    {
      cpf: '123.456.789-10',
      nome: 'João da Silva',
      conta: { saldo: 1500 },
      endereco: { cidade: 'São Paulo', estado: 'SP' }
    },
    {
      cpf: '987.654.321-00',
      nome: 'Maria Oliveira',
      conta: { saldo: 2000 },
      endereco: { cidade: 'Rio de Janeiro', estado: 'RJ' }
    },
    {
      cpf: '111.222.333-44',
      nome: 'Carlos Souza',
      conta: { saldo: 3000 },
      endereco: { cidade: 'Belo Horizonte', estado: 'MG' }
    },
    {
      cpf: '555.666.777-88',
      nome: 'Ana Silva',
      conta: { saldo: 4000 },
      endereco: { cidade: 'Curitiba', estado: 'PR' }
    },
    {
      cpf: '999.888.777-66',
      nome: 'Pedro Santos',
      conta: { saldo: 2500 },
      endereco: { cidade: 'Porto Alegre', estado: 'RS' }
    },
    {
      cpf: '222.333.444-55',
      nome: 'Mariana Lima',
      conta: { saldo: 1800 },
      endereco: { cidade: 'Fortaleza', estado: 'CE' }
    }
  ];
}
