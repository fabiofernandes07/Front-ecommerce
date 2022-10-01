import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MSG_SUCCES } from 'src/shared/utils/constants';
import { FormBase } from 'src/shared/utils/form-base';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { ValidatorsCustom } from 'src/shared/utils/validators-custom';
import { ProductService } from './../product.service';
import { AddCategoryMessages } from './add-category.messages';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent extends FormBase implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    super(router, activatedRoute, new AddCategoryMessages().getMessages());
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      categoria: new FormControl('', ValidatorsCustom.noWhitespaceValidator)
    });
  }

  criarCategoria() {
    if (this.enableShipping()) {
      this.productService.createCategory({ description: this.form.value.categoria }).subscribe(
        () => {
          SweetalertCustom.showAlertTimer('success', MSG_SUCCES).then(() => {
            window.location.reload();
          });
        }
      );
    }
  }
}
