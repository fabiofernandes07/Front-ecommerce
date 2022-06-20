import { PedidosComponent } from './pedidos/pedidos.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosAdmComponent } from './pedidos-adm/pedidos-adm.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'pedidos-adm', component: PedidosAdmComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path: 'order', component:ListOrdersComponent},
  {path: 'cart', component:CartComponent},
  {path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
