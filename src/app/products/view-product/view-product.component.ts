import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  searchId:any;
  productData:any;
  sizeId: any
  quantity:number = 1;
  listSize:any;
  name: any;
  number: any;
  sizeDesc: any;
  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) {

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.searchId = data.id;

      this.productService.getSize().subscribe(sizeData =>{
        this.listSize=sizeData;
      });
      this.productService.Product(this.searchId).subscribe(categoryData => {
        this.productData = categoryData;
        this.productData = {...this.productData, quantity:1, total:categoryData.value }
      })

    })
  }
  addtocart(item: any) {
    const size = this.listSize.find((element:any) => element.id == this.sizeId);
    if(this.name || this.number){
      item.total += 20;
    }
    let flag = false;
    if(this.name || this.number){
      flag = true;
    }
    this.cartService.addtoCart({...item,sizeDesc: size.description, sizeId: this.sizeId, name: this.name, number: this.number, personValue: flag ? 20 : 0});

  }
  getSizeDesc(value:any){
    this.sizeDesc = value;
    console.log(this.sizeDesc);
  }

}
