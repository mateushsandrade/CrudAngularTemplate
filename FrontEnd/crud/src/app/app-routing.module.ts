import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from'./views/home/home.component';
import {ProductCrudComponent} from'./views/product-crud/product-crud.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"Products",
  component:ProductCrudComponent
},{
  path:"Products/Create",
  component:ProductCreateComponent
},{
  path:"Products/Update/:id",
  component:ProductUpdateComponent
},{
  path:"Products/Delete/:id",
  component:ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
