import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { AcompanhamentoProdutoComponent } from './acompanhamento-produto/acompanhamento-produto.component';
import { AppRouting } from './app-routing';
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
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { SucessComponent } from './sucess/sucess.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    CartComponent,
    CancelComponent,
    SucessComponent,
    CheckoutComponent,
    LoginComponent,
    PedidosComponent,
    PedidosAdmComponent,
    ModalComponent,
    AcompanhamentoProdutoComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    NgbModule,
    OrdersModule,
    SiteLayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
