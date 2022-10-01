import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MSG_SUCCES } from 'src/shared/utils/constants';
import { FormBase } from 'src/shared/utils/form-base';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { ValidatorsCustom } from 'src/shared/utils/validators-custom';
import { ProductService } from './../product.service';
import { AddSubCategoryMessages } from './add-sub-category.messages';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html'
})
export class AddSubCategoryComponent extends FormBase implements OnInit {
  categoryList: any;
  categoryId: any;
  categoryDescription: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    super(router, activatedRoute, new AddSubCategoryMessages().getMessages());
  }

  ngOnInit(): void {
    this.createFormGroup();
    this.productService.getCategory().subscribe(async data => {
      this.categoryList = data;
    });
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      categoria: new FormControl('', Validators.required),
      subCategoria: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
    });
  }

  criarSubCategoria() {
    this.productService.createSubCategory({ categoryId: Number(this.form.value.categoria), description: this.form.value.subCategoria }).subscribe(
      () => {
        SweetalertCustom.showAlertTimer('success', MSG_SUCCES).then(() => {
          window.location.reload();
        });
      }
    );
  }
}
