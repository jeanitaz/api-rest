import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './component/empleados/empleados.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FormularioClientesComponent } from './component/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './component/lista-clientes/lista-clientes.component';
import { ActualizarComponent } from './component/actualizar/actualizar.component';
import { autenticaGuard } from './guards/autentica.guard';
import { LoginComponent } from './component/login/login.component';
import { RegistroUsuariosComponent } from './component/registro-usuarios/registro-usuarios.component';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { loginCanMatchGuard } from './guards/login-can-match.guard';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"empleados", component:EmpleadosComponent, canActivate:[autenticaGuard]},
    {path:"clientes", component:ClientesComponent},
    {path:"login", component:LoginComponent, canMatch:[loginCanMatchGuard]},
    {path:"registro", component:RegistroUsuariosComponent, canDeactivate:[registroUsuarioGuard]},
    {path:"formulario", component:FormularioClientesComponent},
    {path:"lista", component:ListaClientesComponent},
    {path:'clientes/:id', component:ActualizarComponent}
];
