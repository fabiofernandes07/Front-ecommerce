import { CartService } from 'src/app/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role: any
  user: any;
  busca: any;

  constructor(
    public router: Router,
    private CartService: CartService
  ) { }

  ngOnInit(): void {
    const role = JSON.parse(localStorage.getItem('user') || JSON.stringify({ user: { role: "" } })).user.role;
    this.role = role;
    const user = JSON.parse(localStorage.getItem('user') || "").user.fullname;
    this.user = user;
  }

  reload() {
    this.router.navigate(['/']);

  }

  search() {
    localStorage.setItem('search', this.busca);
    window.location.href = "http://localhost:4200/products/search-product-name";
  }

}
