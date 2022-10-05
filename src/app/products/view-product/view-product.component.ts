import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { FormBase } from 'src/shared/utils/form-base';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html'
})
export class ViewProductComponent extends FormBase implements OnInit {

  searchId: any;
  productData: any;
  listSize: any;
  sizeDesc: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private cartService: CartService
  ) {
    super(router, activatedRoute);
  }

  ngOnInit(): void {
    this.createFormGroup();
    this.getProductId();
    this.getProduct();
    this.getAllSize();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      tamanho: new FormControl(''),
      numero: new FormControl(''),
      nome: new FormControl(''),
    });
  }

  addtocart(item: any) {
    const size = this.listSize.find((element: any) => element.id == this.form.value.tamanho);
    if (this.form.value.nome || this.form.value.numero) {
      item.total += 20;
    }
    let flag = false;
    if (this.form.value.nome || this.form.value.numero) {
      flag = true;
    }
    this.cartService.addtoCart({ ...item, sizeDesc: size.description, sizeId: this.form.value.tamanho, name: this.form.value.nome, number: this.form.value.numero, personValue: flag ? 20 : 0 });
    SweetalertCustom.showAlertConfirm('success', 'Produto adicionado no carrinho!')
  }

  getProductId() {
    this.activatedRoute.params.subscribe(data => {
      this.searchId = data.id;
    });
  }

  getProduct() {
    this.productService.Product(this.searchId).subscribe(categoryData => {
      this.productData = categoryData;
      this.productData = { ...this.productData, quantity: 1, total: categoryData.value }
    });
  }

  getAllSize() {
    this.productService.getSize().subscribe(sizeData => {
      this.listSize = sizeData;
    });
  }
}
