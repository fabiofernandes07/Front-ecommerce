import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CancelComponent } from './cancel/cancel.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { OrdersModule } from './orders/orders.module';
import { PedidosAdmComponent } from './pedidos-adm/pedidos-adm.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductsModule } from './products/products.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { SucessComponent } from './sucess/sucess.component';
// import { AcompanhamentoProdutoComponent } from './acompanhamento-produto/acompanhamento-produto.component';

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
    PedidosAdmComponent,
    ModalComponent,
    AcompanhamentoProdutoComponent
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
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
