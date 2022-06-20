import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  salesList: any;
  userId: any
  constructor(private userService : UsuarioService) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    const user = JSON.parse(localStorage.getItem('user') || '').user.id

    this.userService.getSales(user).subscribe((data:any) => {
      this.salesList = data;
      console.log(this.salesList)
    })
  }


}
