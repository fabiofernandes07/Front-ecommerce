import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcompanhamentoProdutoComponent } from './acompanhamento-produto/acompanhamento-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { PedidosAdmComponent } from './pedidos-adm/pedidos-adm.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos-adm', component: PedidosAdmComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'order', component: ListOrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'tracking', component: AcompanhamentoProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
