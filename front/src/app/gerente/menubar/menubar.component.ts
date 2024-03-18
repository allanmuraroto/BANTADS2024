import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar se estiver usando diretivas comuns

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  standalone: true,
  imports: [CommonModule] // Importe módulos/diretivas aqui se necessário
})
export class MenubarComponent {
  sair(): void {
    window.location.reload();
  }
}
