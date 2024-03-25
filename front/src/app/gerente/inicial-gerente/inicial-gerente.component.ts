import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-inicial-gerente',
  templateUrl: './inicial-gerente.component.html',
  styleUrls: ['./inicial-gerente.component.css'],
  standalone: true,

  imports: [
    CommonModule,
    MenubarComponent
  ]
})
export class InicialGerenteComponent {}
