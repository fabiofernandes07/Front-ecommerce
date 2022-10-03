import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MSG_SUCCES } from 'src/shared/utils/constants';
import { FormBase } from 'src/shared/utils/form-base';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { ValidatorsCustom } from 'src/shared/utils/validators-custom';
import { ProductService } from '../product.service';
import { AddProductMessages } from './add-product.messages';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent extends FormBase implements OnInit {

  files: any;
  categoryList: any;
  subCategoryList: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    super(router, activatedRoute, new AddProductMessages().getMessages());
  }

  ngOnInit(): void {
    this.createFormGroup();
    this.getAllCategory();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      title: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      value: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      categoryId: new FormControl('', Validators.required),
      subCategoryId: new FormControl('', Validators.required),
      gender: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      images: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  criarProduto() {
    console.log(this.form.value);
    if (this.enableShipping()) {
      var formData = new FormData();
      formData.append("title", this.form.value.title);
      formData.append("value", this.form.value.value);
      formData.append("categoryId", this.form.value.categoryId);
      formData.append("subCategoryId", this.form.value.subCategoryId);
      formData.append("gender", this.form.value.gender);
      for (const file of this.files) {
        formData.append("file", file);
      }
      formData.append("description", this.form.value.description);
      this.productService.createProduct(formData).subscribe(
        data => {
          console.log(data);
          SweetalertCustom.showAlertTimer('success', MSG_SUCCES).then(() => {
            this.router.navigate(['/products']);
          });
        });
      // window.location.href = "/products";
    }
  }

  getFile(event: any) {
    this.files = event.target.files;
  }

  getAllCategory() {
    this.productService.getCategory().subscribe(
      (resp) => {
        this.categoryList = resp;
      },
    );
  }

  getSubCategory(event: number) {
    this.productService.getSubCategory(event).subscribe(
      (resp) => {
        this.subCategoryList = resp;
      }
    );
  }
}
