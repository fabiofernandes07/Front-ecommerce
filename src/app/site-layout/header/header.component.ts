import { CartService } from 'src/app/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role: any
  user : any;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    const role = JSON.parse(localStorage.getItem('user') || JSON.stringify({user:{role:""}})).user.role;
    this.role = role;
    const user = JSON.parse(localStorage.getItem('user') || "").user.email;
    this.user = user;
  }
  reload() {
    window.location.href = "http://localhost:4200/"
  }
}
