import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: 'agregar', component: AddComponent},
      {path: '**', redirectTo: 'agregar'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
