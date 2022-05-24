import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { librosAngularJuanmisListComponent } from './components/lista-libros/lista-libros.component';
import { AddlibrosAngularJuanmiComponent } from './components/añadir/añadir.component';

const routes: Routes = [
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: 'libros', component: librosAngularJuanmisListComponent },
  { path: 'añadir', component: AddlibrosAngularJuanmiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
