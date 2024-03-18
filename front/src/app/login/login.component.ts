import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  logarObj: any = {
    email: '',
    password: '',
  };

  constructor(private router: Router) { }

  logar(): void {
    if (this.logarObj.email === 'admin@bantads.com' && this.logarObj.password === '12345') {
      setTimeout(() => {
        this.router.navigate(['/client/index']);
      }, 1000);
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  }
}
