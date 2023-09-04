import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component:QuienSoyComponent},
  { path: 'login', component:LoginComponent},
  { path: 'registro', component:RegistroComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]
  
// { 
//   path: 'home',
//   loadChildren: () => import('./components/home/home.component').then(m => m.HomeComponent)
// },
// { 
//   path: '',
//   redirectTo: 'home',
//   pathMatch: 'full'
// }
// ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
