import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { ProductComponent } from './components/product.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { EstudianteComponent } from './_pages/estudiante/estudiante.component';
import { MteEstudianteComponent } from './_pages/estudiante/mte-estudiante/mte-estudiante.component';
import { InicioComponent } from './_pages/inicio/inicio.component';


const routes: Routes = [
  {component:InicioComponent,path:"inicio"},
  {path:'admin',canActivate: [AdminGuard],loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)},
  {component: EstudianteComponent,path: "estudiante",children:[
  {path:'nuevo', component: MteEstudianteComponent},
  {path:'editar/:id', component: MteEstudianteComponent}]
},
  {path:"products/:id", component: ProductDetailComponent},
  {path:"",component: LayoutComponent,
  children:[
    {
      path:"",
      redirectTo: "home", 
      pathMatch:"full"
    },
    {path:'home', loadChildren: () => import ('./home/home.module').then(m => m.HomeModule) },
    {path:'order', loadChildren: () => import ('./order/order.module').then(m => m.OrderModule) },
    {path:'products', component: ProductsComponent},
    {path:'contacts', component: ContactsComponent}
  ]},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
