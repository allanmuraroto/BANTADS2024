import { Routes } from '@angular/router';
import { InicialGerenteComponent } from './gerente/inicial-gerente/inicial-gerente.component';
import { MelhoresClientesComponent } from './gerente/melhores-clientes/melhores-clientes.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarComponent } from './gerente/consultar/consultar.component';

export const routes: Routes = [
  { path: 'gerente', component: InicialGerenteComponent },
  { path:'melhoresClientes', component: MelhoresClientesComponent },
  { path: 'consultarCliente', component: ConsultarClienteComponent },
  {path: 'listarClientes', component: ConsultarComponent}
];
