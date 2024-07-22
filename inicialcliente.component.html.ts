// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerListComponent } from './manager-list/manager-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// src/app/manager-list/manager-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  managers: any[] = [];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.managerService.getManagers().subscribe(data => {
      this.managers = data;
    });
  }
}

// src/app/manager.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiUrl = 'https://api.example.com/managers'; // URL da API para obter os gerentes

  constructor(private http: HttpClient) { }

  getManagers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


<!-- src/app/manager-list/manager-list.component.html -->
<div class="container">
  <h1>Lista de Gerentes</h1>
  <ul>
    <li *ngFor="let manager of managers">
      {{ manager.name }} - {{ manager.email }}
    </li>
  </ul>
</div>


// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './manager-list/manager-list.component';

const routes: Routes = [
  { path: '', component: ManagerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
