export interface Product {
  id:number;
  title:number;
  categoryId:number;
  subCategoryId:number;
  description:string;
  value:number;
  images: {
    url:string;
   }[]
}
