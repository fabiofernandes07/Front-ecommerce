import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { CancelComponent } from './cancel/cancel.component';
import { SucessComponent } from './sucess/sucess.component';

import  { ProductsModule } from './products/products.module'
import { SiteLayoutModule} from './site-layout/site-layout.module';
import { OrdersModule } from './orders/orders.module';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidosAdmComponent } from './pedidos-adm/pedidos-adm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CancelComponent,
    SucessComponent,
    CheckoutComponent,
    LoginComponent,
    CadastroComponent,
    PedidosComponent,
    PedidosAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OrdersModule,
    SiteLayoutModule,
    ProductsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
