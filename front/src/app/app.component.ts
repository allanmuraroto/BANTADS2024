import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Importar MatDialog
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './gerente/menubar/menubar.component';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component'; // Ajuste o caminho

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    MenubarComponent,
    MatDialogModule, // MatDialogModule aqui permite usar o MatDialog neste componente
    BrowserAnimationsModule,
    SimpleDialogComponent // Certifique-se de adicionar o componente do dialog aqui também
  ]
})
export class AppComponent {
  title = 'front';

  constructor(public dialog: MatDialog) {} // Injetar MatDialog

  openDialog(): void {
    this.dialog.open(SimpleDialogComponent, {
      width: '250px',
      // Adicione mais configurações aqui se necessário
    });
  }
}
