import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './component/empleados/empleados.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FormularioClientesComponent } from './component/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './component/lista-clientes/lista-clientes.component';
import { ActualizarComponent } from './component/actualizar/actualizar.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"empleados", component:EmpleadosComponent},
    {path:"clientes", component:ClientesComponent},
    {path:"formulario", component:FormularioClientesComponent},
    {path:"lista", component:ListaClientesComponent},
    {path:'clientes/:id', component:ActualizarComponent}
];
