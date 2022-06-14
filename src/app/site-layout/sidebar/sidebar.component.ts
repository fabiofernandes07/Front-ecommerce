import { Category } from './../categories';
import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categoryList: any;
  searchRote:any;
  constructor(private productsService : ProductService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    

    this.productsService.getCategory().subscribe(data =>{
      this.categoryList = data;
    })
  }

}
