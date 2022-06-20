import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  estado: any;
  cidade: any;
  cep:any;
  rua:any;
  bairro:any;
  numero:any;
  complemento:any;
  enderecos:any;
  credito = ""
  debito = ""
  paypal = ""
  check = false;

  public products: any;
  public grandTotal !: number;
  Concluir: boolean = true;
  public adressList: any;

  constructor(private cartService: CartService, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.adressList = JSON.parse(localStorage.getItem('user') || '').user.adress
    console.log(this.adressList);
    this.products = JSON.parse(localStorage.getItem("cart") || '');
    this.grandTotal = this.cartService.getTotalPrice();
  }

  concluir() {
    this.Concluir = false;
    localStorage.setItem('cart', JSON.stringify([]));
  }

  changeAdress(){
    console.log(this.credito)
    console.log(this.debito)
    const adress = this.adressList.find((adress:any) =>{
      return adress.id == this.enderecos
    })
    this.estado = adress.state;
    this.cidade = adress.city;
    this.cep = adress.cep;
    this.rua = adress.street;
    this.bairro = adress.district;
    this.numero = adress.number;
    this.complemento = adress.complement;
  }

  addAdress() {
    if(this.check){
      const userId = JSON.parse(localStorage.getItem('user') || '').user.id
      this.userService.addAdress({
        userId,
        state: this.estado,
        city: this.cidade,
        cep: this.cep,
        street: this.rua,
        district: this.bairro,
        number: this.numero,
        complement: this.complemento
      }).subscribe((data: any) =>{
        const user = JSON.parse(localStorage.getItem('user') || '');
        console.log(data);
        user.user.adress.push(data);
        localStorage.setItem('user', JSON.stringify(user));
      });
    }
  }

  addSale() {
    const userId = JSON.parse(localStorage.getItem('user') || '').user.id
    const adressId = this.enderecos ? this.enderecos : JSON.parse(localStorage.getItem('user') || '').user.adress[JSON.parse(localStorage.getItem('user') || '').user.adress.length - 1].id
    console.log(adressId)

    let desc = ""
    this.products.forEach((product:any)=> {
      desc += `${product.quantity}x   ${product.title} ${product.sizeDesc} ${product.name ? product.name : ''} ${product.number ? product.number : ''}\n`
    })
    console.log(this.credito + this.debito + this.paypal)
    this.userService.addSale({
      userId,
      adressId: Number(adressId),
      description: desc,
      total: this.cartService.getTotalPrice(),
      paymentType: this.credito + this.debito + this.paypal,
      products: this.products.map((product: any) =>({
        product: Number(product.id),
        size: Number(product.sizeId),
        personalization: {
          name: product.name,
          number: product.number,
          value: product.personValue
        },
        quantity: product.quantity
      }))
    }).subscribe((data:any) => {
      console.log(data);
    })
  }


}
