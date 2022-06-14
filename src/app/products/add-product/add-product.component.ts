import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  addNewProduct(form: any) {
    // console.log(form.value);

    let newProduct = {
      categoryId:form.value.product_category,
      productName:form.value.product_name,
      description:form.value.product_description,
      price:form.value.product_price,
      productImg:form.value.product_img,
      isAvailble:true,
      review:"nice",
    }
    console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    });
  }


}
