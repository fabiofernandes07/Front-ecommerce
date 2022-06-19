import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  files: any;
  categoryList: any;
  subCategoryList: any;
  adm : boolean = true;
  id: any = 1;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategory().subscribe(async data =>{
      this.categoryList = data;

      this.categoryList = await Promise.all(this.categoryList.map(async(categ:any)=>{
        this.subCategoryList = await this.productService.getSubCategory(categ.id).toPromise()
        // console.log(this.subCategoryList)
        return {
          ...categ,subCategs:this.subCategoryList
        }
      }))
    });
  }
  addNewProduct(form: any) {
    var formData = new FormData();
    formData.append("title",form.value.product_name);
    formData.append("value",form.value.product_price);
    formData.append("description",form.value.product_description);
    formData.append("gender",form.value.product_gender);
    console.log(this.files)
    for (const file of this.files) {
      formData.append("file", file);
    }

    formData.append("subCategoryId",form.value.product_subcategory);

    this.productService.createProduct(formData).subscribe(data => {
      console.log(data);
    });
  }

  getFile(event: any) {
    this.files = event.target.files;
    for (const file of this.files) {
      console.log(file);
    }
  }

  getCateg(event: any) {
    this.subCategoryList = this.categoryList.filter((category :any)=>{
      return category.id == event.target.value;
    })
    this.subCategoryList = this.subCategoryList[0].subCategs;
  }


  

}
