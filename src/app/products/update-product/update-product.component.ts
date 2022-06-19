import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productID= 0;
  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data.id;
      // console.log(this.productID);
    })
  }
}
