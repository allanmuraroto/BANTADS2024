import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from './gerente/menubar/menubar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    MenubarComponent
  ]
})
export class AppComponent {
  title = 'front';
}
